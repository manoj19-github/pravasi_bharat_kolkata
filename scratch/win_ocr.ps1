Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.IsGenericMethod }

function Await($winRtOp, $resultType) {
    $asTask = $asTaskGeneric[0].MakeGenericMethod($resultType)
    $netTask = $asTask.Invoke($null, @($winRtOp))
    $netTask.Wait()
    return $netTask.Result
}

[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime] | Out-Null

function Run-Ocr($relPath) {
    $fullPath = (Resolve-Path $relPath).Path
    $fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath)
    $file = Await $fileOp ([Windows.Storage.StorageFile])
    
    $streamOp = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    $stream = Await $streamOp ([Windows.Storage.Streams.IRandomAccessStream])
    
    $decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    $decoder = Await $decoderOp ([Windows.Graphics.Imaging.BitmapDecoder])
    
    $bitmapOp = $decoder.GetSoftwareBitmapAsync()
    $bitmap = Await $bitmapOp ([Windows.Graphics.Imaging.SoftwareBitmap])
    
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    $ocrOp = $engine.RecognizeAsync($bitmap)
    $ocrResult = Await $ocrOp ([Windows.Media.Ocr.OcrResult])
    return $ocrResult.Text
}

Write-Host "=== HEADER ==="
Run-Ocr "scratch/header_preview.png"

for ($i = 1; $i -le 6; $i++) {
    Write-Host "=== CARD $i ==="
    Run-Ocr "scratch/card$($i)_body.png"
}

Write-Host "=== BOTTOM ==="
Run-Ocr "scratch/bottom_preview.png"
