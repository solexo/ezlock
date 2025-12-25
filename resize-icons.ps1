# DOMO28 Icon Resizer PowerShell Script
# This script resizes the logo to proper icon sizes

Write-Host "🔧 DOMO28 Icon Resizer" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Check if the logo exists
$logoPath = "public\images\logob.webp"
if (-not (Test-Path $logoPath)) {
    Write-Host "❌ Logo not found at: $logoPath" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Found logo: $logoPath" -ForegroundColor Green

# Create icons directory if it doesn't exist
$iconsDir = "public\icons"
if (-not (Test-Path $iconsDir)) {
    New-Item -ItemType Directory -Path $iconsDir -Force
    Write-Host "✅ Created icons directory" -ForegroundColor Green
}

# Function to resize image using .NET
function Resize-Image {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Width,
        [int]$Height
    )
    
    try {
        Add-Type -AssemblyName System.Drawing
        
        # Load the original image
        $originalImage = [System.Drawing.Image]::FromFile((Resolve-Path $InputPath))
        
        # Create a new bitmap with the target size
        $resizedImage = New-Object System.Drawing.Bitmap($Width, $Height)
        $graphics = [System.Drawing.Graphics]::FromImage($resizedImage)
        
        # Set high quality settings
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        # Fill with white background
        $graphics.FillRectangle([System.Drawing.Brushes]::White, 0, 0, $Width, $Height)
        
        # Calculate dimensions to fit the logo (90% of canvas with padding)
        $logoSize = [Math]::Floor($Width * 0.9)
        $x = [Math]::Floor(($Width - $logoSize) / 2)
        $y = [Math]::Floor(($Height - $logoSize) / 2)
        
        # Draw the resized image
        $graphics.DrawImage($originalImage, $x, $y, $logoSize, $logoSize)
        
        # Save as PNG
        $resizedImage.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Clean up
        $graphics.Dispose()
        $resizedImage.Dispose()
        $originalImage.Dispose()
        
        Write-Host "✅ Created: $OutputPath ($Width x $Height)" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "❌ Error creating $OutputPath : $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Resize to different sizes
$sizes = @(
    @{Size=180; Name="icon-180x180.png"},
    @{Size=192; Name="icon-192x192.png"},
    @{Size=512; Name="icon-512x512.png"}
)

$successCount = 0
foreach ($sizeInfo in $sizes) {
    $outputPath = Join-Path $iconsDir $sizeInfo.Name
    if (Resize-Image -InputPath $logoPath -OutputPath $outputPath -Width $sizeInfo.Size -Height $sizeInfo.Size) {
        $successCount++
    }
}

Write-Host "================================" -ForegroundColor Cyan
Write-Host "🎉 Resizing complete! Created $successCount out of $($sizes.Count) icons" -ForegroundColor Green

if ($successCount -eq $sizes.Count) {
    Write-Host "✅ All icons created successfully!" -ForegroundColor Green
    Write-Host "📱 Test on iPhone by adding to home screen" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  Some icons failed to create. Check the errors above." -ForegroundColor Yellow
}

