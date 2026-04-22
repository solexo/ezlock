# Image Optimizer
Add-Type -AssemblyName System.Drawing

$images = @(
    @{ Path = "public\images\logobb.webp"; Width = 128; Height = 128 },
    @{ Path = "public\images\i40 (2).webp"; Width = 525; Height = 525 },
    @{ Path = "public\images\x1ai.webp"; Width = 525; Height = 525 }
)

foreach ($img in $images) {
    $imagePath = $img.Path
    $newWidth = $img.Width
    $newHeight = $img.Height

    # Load original image
    $originalImage = [System.Drawing.Image]::FromFile((Resolve-Path $imagePath))

    # Create new bitmap
    $resizedImage = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($resizedImage)

    # High quality settings
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    # Draw resized image
    $graphics.DrawImage($originalImage, 0, 0, $newWidth, $newHeight)

    # Save as WebP (if supported, otherwise PNG)
    $outputPath = $imagePath
    try {
        $resizedImage.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Webp)
        Write-Host "Resized: $imagePath to ${newWidth}x${newHeight}"
    } catch {
        # If WebP not supported, save as PNG and rename
        $pngPath = $imagePath -replace '\.webp$', '.png'
        $resizedImage.Save($pngPath, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host "Resized: $imagePath to ${newWidth}x${newHeight} (saved as PNG)"
    }

    # Cleanup
    $graphics.Dispose()
    $resizedImage.Dispose()
    $originalImage.Dispose()
}

Write-Host "Image optimization complete!"