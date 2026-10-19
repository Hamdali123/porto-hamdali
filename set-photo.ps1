# ============================================================
# set-photo.ps1
# Klik kanan file ini > "Run with PowerShell"
#
# Cara pakai:
#   1. Simpan foto profil ke folder Downloads (nama bebas)
#   2. Jalankan script ini
#   3. Pilih nomor foto dari daftar
# Script menyalin foto pilihan menjadi public\profile.jpg
# ============================================================

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$dest = Join-Path $root "public\profile.jpg"

Write-Host "=== Set Foto Profil ===" -ForegroundColor Cyan

$folders = @(
  (Join-Path $env:USERPROFILE "Downloads"),
  (Join-Path $env:USERPROFILE "Pictures"),
  (Join-Path $env:USERPROFILE "Desktop"),
  (Join-Path $env:USERPROFILE "Documents")
)

$validExt = @(".jpg", ".jpeg", ".png", ".webp")

$images = foreach ($f in $folders) {
  if (Test-Path -LiteralPath $f) {
    Get-ChildItem -LiteralPath $f -Recurse -File -ErrorAction SilentlyContinue |
      Where-Object {
        $validExt -contains $_.Extension.ToLower() -and
        $_.FullName -notlike "*\node_modules\*" -and
        $_.FullName -notlike "*\.next\*" -and
        $_.FullName -notlike "*\porto-hamdali\*"
      }
  }
}

$images = $images | Sort-Object LastWriteTime -Descending | Select-Object -First 8

if (-not $images) {
  Write-Host "Tidak ada file gambar (.jpg/.jpeg/.png/.webp) ditemukan." -ForegroundColor Yellow
  Write-Host "Simpan foto profil ke folder Downloads dulu, baru jalankan script ini lagi."
  Read-Host "Tekan Enter untuk keluar"
  exit
}

Write-Host ""
Write-Host "Foto terbaru yang ditemukan:" -ForegroundColor Cyan
$i = 1
foreach ($img in $images) {
  Write-Host ("  [{0}] {1}  ({2})" -f $i, $img.Name, $img.LastWriteTime.ToString("dd MMM yyyy HH:mm"))
  $i++
}

Write-Host ""
$choice = Read-Host "Masukkan nomor foto yang benar (default 1)"

$index = 1
if ($choice -and ($choice -as [int]) -ge 1 -and ($choice -as [int]) -le $images.Count) {
  $index = [int]$choice
}

$pick = $images[$index - 1]
Copy-Item -LiteralPath $pick.FullName -Destination $dest -Force

Write-Host ""
Write-Host ("OK! '{0}' disalin ke public\profile.jpg" -f $pick.Name) -ForegroundColor Green
Write-Host "Buka localhost:3000 lalu refresh dengan Ctrl + Shift + R"
Read-Host "Tekan Enter untuk keluar"
