const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // NOVA FUNÇÃO: Transforma caminho relativo em absoluto
  resolvePath: (relPath) => ipcRenderer.invoke('get-full-path', relPath),
  verifyPath: (pathToTest) => ipcRenderer.invoke('check-path-exists', pathToTest),
  
  launchGame: (exePath, gamePath) => ipcRenderer.invoke('run-pcsx2', exePath, gamePath),

  // Novo listener para o início do download
  onDownloadStarted: (callback) => ipcRenderer.on('download-started', () => callback()),
  
  // Função para ouvir o progresso do download
  onDownloadProgress: (callback) => ipcRenderer.on('download-progress', (event, value) => callback(value)),
  // Função para ouvir o status final
  onDownloadStatus: (callback) => ipcRenderer.on('download-status', (event, value) => callback(value)),

  checkGtaStatus: () => ipcRenderer.invoke('verificar-gta'),
  teste: () => ipcRenderer.invoke('verificar-iso'),
  verificarInstaladosPs2: () => ipcRenderer.invoke('verificar-iso-instalados-ps2'),
  verificarInstaladosPs1: () => ipcRenderer.invoke('verificar-chd-instalados-ps1'),

  // ... suas outras funções (checkPathExists, etc) ...
  cancelDownload: () => ipcRenderer.send('cancel-download'),

  moverGta: () => ipcRenderer.invoke('mover-arquivo-gta'),
  moverTodos : () => ipcRenderer.invoke('mover-todos-isos') ,
  moverChd: () => ipcRenderer.invoke('mover-todos-chd'),
  deletargta: (caminho) => ipcRenderer.invoke('deletar-gta', caminho),
  sairDoApp: () => ipcRenderer.send('close-app'),
  verificarChd: () => ipcRenderer.invoke('verificar-chd'),
  execPs1: (path) => ipcRenderer.send('executar-jogo-ps1', path),
  verificarChdzada: () => ipcRenderer.invoke('verificar-chdzada')
});

