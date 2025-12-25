# Simple Icon Resizer
Add-Type -AssemblyName System.Drawing

$logoPath = "public\images\logo_resized.webp"
$iconsDir = "public\icons"

# Create icons directory
if (-not (Test-Path $iconsDir)) {
    New-Item -ItemType Directory -Path $iconsDir -Force
}

# Load original image
$originalImage = [System.Drawing.Image]::FromFile((Resolve-Path $logoPath))

# Function to create resized icon
function Create-Icon {
    param($size, $filename)
    
    $resizedImage = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($resizedImage)
    
    # High quality settings
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    
    # White background
    $graphics.FillRectangle([System.Drawing.Brushes]::White, 0, 0, $size, $size)
    
    # Calculate logo size (90% of canvas)
    $logoSize = [Math]::Floor($size * 0.9)
    $x = [Math]::Floor(($size - $logoSize) / 2)
    $y = [Math]::Floor(($size - $logoSize) / 2)
    
    # Draw logo
    $graphics.DrawImage($originalImage, $x, $y, $logoSize, $logoSize)
    
    # Save as PNG or ICO
    $outputPath = Join-Path $iconsDir $filename
    if ($filename -eq "favicon.ico") {
        $resizedImage.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Icon)
    } else {
        $resizedImage.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    
    # Cleanup
    $graphics.Dispose()
    $resizedImage.Dispose()
    
    Write-Host "Created: $filename ($size x $size)"
}

# Create icons
Create-Icon 16 "favicon-16x16.png"
Create-Icon 32 "favicon-32x32.png"
Create-Icon 32 "favicon.ico"
Create-Icon 180 "icon-180x180.png"
Create-Icon 192 "icon-192x192.png"
Create-Icon 512 "icon-512x512.png"

# Cleanup
$originalImage.Dispose()

Write-Host "Icon resizing complete!"

