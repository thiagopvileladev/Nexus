Set shell = CreateObject("WScript.Shell")
' Pega a pasta onde o script esta
strPath = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
shell.CurrentDirectory = strPath
' Roda o Electron usando o node_modules local
shell.Run "powershell -windowstyle hidden -command .\node_modules\.bin\electron .", 0, False