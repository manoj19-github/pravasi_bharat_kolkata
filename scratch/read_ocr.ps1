[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime] | Out-Null

function Run-Ocr($relPath) {
    $fullPath = (Resolve-Path $relPath).Path
    $file = [Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath).GetAwaiter().GetResult()
    $stream = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read).GetAwaiter().GetResult()
    $decoder = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream).GetAwaiter().GetResult()
    $bitmap = $decoder.GetSoftwareBitmapAsync().GetAwaiter().GetResult()
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    $ocrResult = $engine.RecognizeAsync($bitmap).GetAwaiter().GetResult()
    return $ocrResult.Text
}

Write-Host "--- HEADER ---"
Run-Ocr "scratch/header_preview.png"

for ($i = 1; $i -le 6; $i++) {
    Write-Host "--- CARD $i BODY ---"
    Run-Ocr "scratch/card$($i)_body.png"
}

Write-Host "--- FOOTER / BOTTOM ---"
Run-Ocr "scratch/bottom_preview.png"
