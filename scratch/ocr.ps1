Add-Type -AssemblyName System.Drawing

[Windows.Globalization.Language,Windows.Globalization,ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder,Windows.Graphics.Imaging,ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine,Windows.Media.Ocr,ContentType=WindowsRuntime] | Out-Null

function Run-Ocr([string]$fullPath) {
    $file = [Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath).GetAwaiter().GetResult()
    $stream = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read).GetAwaiter().GetResult()
    $decoder = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream).GetAwaiter().GetResult()
    $bitmap = $decoder.GetSoftwareBitmapAsync().GetAwaiter().GetResult()
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    $result = $engine.RecognizeAsync($bitmap).GetAwaiter().GetResult()
    return $result.Text
}

foreach ($slice in @("scratch\slice_header.png", "scratch\slice_cards_top.png", "scratch\slice_cards_bottom.png", "scratch\slice_footer.png")) {
    Write-Host "=== $slice ==="
    try {
        $p = (Resolve-Path $slice).Path
        $text = Run-Ocr $p
        Write-Host $text
    } catch {
        Write-Host "Error: $_"
    }
}
