Add-Type -AssemblyName System.Drawing

$sourcePath = "public\images\logob.webp"
$outputPath = "public\images\logo_resized.webp"

# Load original image
$originalImage = [System.Drawing.Image]::FromFile((Resolve-Path $sourcePath))

# Target size for og:image
$targetWidth = 1200
$targetHeight = 630

# Calculate aspect ratio
$originalAspect = $originalImage.Width / $originalImage.Height
$targetAspect = $targetWidth / $targetHeight

# Determine new dimensions maintaining aspect ratio
if ($originalAspect > $targetAspect) {
    # Original is wider
    $newWidth = $targetWidth
    $newHeight = [Math]::Floor($targetWidth / $originalAspect)
} else {
    # Original is taller
    $newHeight = $targetHeight
    $newWidth = [Math]::Floor($targetHeight * $originalAspect)
}

# Create resized image
$resizedImage = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
$graphics = [System.Drawing.Graphics]::FromImage($resizedImage)

# High quality settings
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

# White background
$graphics.FillRectangle([System.Drawing.Brushes]::White, 0, 0, $targetWidth, $targetHeight)

# Center the image
$x = [Math]::Floor(($targetWidth - $newWidth) / 2)
$y = [Math]::Floor(($targetHeight - $newHeight) / 2)

# Draw resized image
$graphics.DrawImage($originalImage, $x, $y, $newWidth, $newHeight)

# Save as PNG
$resizedImage.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Cleanup
$graphics.Dispose()
$resizedImage.Dispose()
$originalImage.Dispose()

Write-Host "Logo resized to $targetWidth x $targetHeight and saved as $outputPath"