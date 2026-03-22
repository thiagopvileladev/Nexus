# Força o caminho a ser uma String (texto) pura
$PastaDoProjeto = (Get-Location).Path
$CaminhoVBS = Join-Path $PastaDoProjeto "iniciar.vbs"
$AtalhoPath = [System.IO.Path]::Combine([Environment]::GetFolderPath("Desktop"), "Nexus.lnk")

Write-Host "Verificando Node.js..." -ForegroundColor Cyan
if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "Node.js detectado!" -ForegroundColor Green
} else {
    Write-Host "Node.js NAO encontrado! Iniciando instalador incluso..." -ForegroundColor Yellow
    # Isso abre o instalador que você mandou na pasta
    Start-Process msiexec.exe -ArgumentList "/i `"$PastaDoProjeto\node-v20-x64.msi`"" -Wait
    Write-Host "Agora que instalou, rode o instalar.bat novamente!" -ForegroundColor Cyan
    pause
    exit
}

Write-Host "Criando atalho na Area de Trabalho..." -ForegroundColor Cyan
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($AtalhoPath)
$Shortcut.TargetPath = "wscript.exe"
$Shortcut.Arguments = "`"$CaminhoVBS`""
# Aqui estava o erro: agora garantimos que é String
$Shortcut.WorkingDirectory = [string]$PastaDoProjeto
$Shortcut.Save()

Write-Host "Pronto! Tudo configurado." -ForegroundColor Green
$Shortcut.IconLocation = Join-Path $PastaDoProjeto "nexus.ico"
$Shortcut.Save()

Write-Host "Pronto! Tudo configurado. Esta janela fechara em 2 segundos..." -ForegroundColor Green
Start-Sleep -Seconds 2
exit