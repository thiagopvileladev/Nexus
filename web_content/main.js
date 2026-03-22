const { spawn } = require('child_process');
const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const fs = require('fs');
const ini = require('ini');

const isPackaged = app.isPackaged;
const resourcesPath = isPackaged
  ? process.resourcesPath
  : __dirname;


function getAssetPath(...paths) {
  return path.join(resourcesPath, ...paths);
}


let win;    
let splash;  
let activeDownloads = new Set();

function createWindow() {
  splash = new BrowserWindow({
    fullscreen: true,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    center: true
  });
  splash.loadFile('splash.html');

  win = new BrowserWindow({
    fullscreen: true,
    show: false,
    webPreferences: {
      preload: getAssetPath('preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true
    }
  });


  session.defaultSession.webRequest.onHeadersReceived({ urls: ['*://*/*'] }, (details, callback) => {
    const headers = details.responseHeaders;
    Object.keys(headers).forEach(header => {
      const lowerHeader = header.toLowerCase();
      if (lowerHeader === 'x-frame-options' || lowerHeader === 'content-security-policy') {
        delete headers[header];
      }
    });
    callback({ cancel: false, responseHeaders: headers });
  });

  
  session.defaultSession.on('will-download', (event, item, webContents) => {
    activeDownloads.add(item);
    win.webContents.send('download-started');

    
    const folderPath = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2');

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, item.getFilename());
    item.setSavePath(filePath);

    item.on('updated', (event, state) => {
      if (state === 'progressing' && item.getTotalBytes() > 0) {
        const progress = (item.getReceivedBytes() / item.getTotalBytes()) * 100;
        win.webContents.send('download-progress', progress.toFixed(2));
      }
    });

    item.once('done', (event, state) => {
      activeDownloads.delete(item);
      win.webContents.send('download-status', state);
    });
  });

  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));

  win.loadFile('index.html');

  win.once('ready-to-show', () => {
    setTimeout(() => {
      splash.close();
      win.show();
    }, 12000);
  });

  
  function rodarExtrator() {
    
    
    const pythonExecutavel = getAssetPath('python_bin', 'python.exe');

    
    const scriptPython = getAssetPath('extractor.py');
    const pastaJogosPs2 = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2');

    
    const pythonProcess = spawn(pythonExecutavel, [scriptPython, pastaJogosPs2]);

    pythonProcess.stdout.on('data', (data) => {
      console.log(`[PYTHON]: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`[PYTHON ERROR]: ${data}`);
    });

    
    app.on('window-all-closed', () => {
      if (pythonProcess) pythonProcess.kill();
    });
  }

  
  rodarExtrator();
}

app.whenReady().then(createWindow);



ipcMain.handle('check-path-exists', async (event, pathToTest) => {
  const resolvedPath = path.isAbsolute(pathToTest) ? pathToTest : getAssetPath(pathToTest);
  return fs.existsSync(resolvedPath);
});

ipcMain.handle('run-pcsx2', async (event, exePathFraco, gamePath) => {
  
  const pcsx2Real = getAssetPath('ps2_emulator', 'PS2', 'Play2', 'pcsx2-qt.exe');

  
  const resolvedGamePath = path.isAbsolute(gamePath) ? gamePath : getAssetPath(gamePath);

  const subprocess = spawn(pcsx2Real, [resolvedGamePath, '-fullscreen', '-nogui'], {
    detached: true,
    stdio: 'ignore'
  });

  subprocess.unref();
  return { success: true };
});

ipcMain.handle('verificar-iso', async () => {
  const folderPath = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2');
  try {
    if (!fs.existsSync(folderPath)) return false;
    const files = fs.readdirSync(folderPath);
    return files.some(file => file.toLowerCase().endsWith('.iso'));
  } catch (error) { return false; }
});

ipcMain.handle('verificar-chdzada', async () => {
  const folderPath = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2');
  try {
    if (!fs.existsSync(folderPath)) return false;
    const files = fs.readdirSync(folderPath);
    return files.some(file => file.toLowerCase().endsWith('.chd'));
  } catch (error) { return false; }
});

ipcMain.handle('deletar-gta', async (event, caminhoRelativo) => {
  const caminhoCompleto = getAssetPath(caminhoRelativo);
  try {
    
    if (fs.existsSync(caminhoCompleto)) {
      await fs.promises.unlink(caminhoCompleto);
      return { success: true };
    } else {
      
      return { success: true, message: "Arquivo já não existia." };
    }
  } catch (erro) {
    return { success: false, message: erro.message };
  }
});

ipcMain.handle('mover-arquivo-gta', async () => {
  const origem = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2', 'Grand Theft Auto - San Andreas (USA) (v3.00).iso');
  const pastaDestino = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2', 'JOGOS PRONTOS PS2');
  const destinoFinal = path.join(pastaDestino, 'Grand Theft Auto - San Andreas (USA) (v3.00).iso');
  try {
    if (!fs.existsSync(pastaDestino)) fs.mkdirSync(pastaDestino, { recursive: true });
    await fs.promises.rename(origem, destinoFinal);
    return { success: true };
  } catch (err) { return { success: false, error: err.message }; }
});

ipcMain.handle('mover-todos-isos', async () => {
  const pastaOrigem = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2');
  const pastaDestino = path.join(pastaOrigem, 'JOGOS PRONTOS PS2');
  try {
    if (!fs.existsSync(pastaDestino)) fs.mkdirSync(pastaDestino, { recursive: true });
    const arquivos = await fs.promises.readdir(pastaOrigem);
    const arquivosIso = arquivos.filter(arq => arq.toLowerCase().endsWith('.iso'));
    for (const arquivo of arquivosIso) {
      await fs.promises.rename(path.join(pastaOrigem, arquivo), path.join(pastaDestino, arquivo));
    }
    return { success: true, count: arquivosIso.length };
  } catch (err) { return { success: false, error: err.message }; }
});

ipcMain.handle('mover-todos-chd', async () => {
  const pastaOrigem = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2');
  const pastaDestino = getAssetPath('duckstation', 'JOGOS PS1', 'JOGOS PRONTOS PS1');
  try {
    if (!fs.existsSync(pastaDestino)) fs.mkdirSync(pastaDestino, { recursive: true });
    const arquivos = await fs.promises.readdir(pastaOrigem);
    const arquivosChd = arquivos.filter(arq => arq.toLowerCase().endsWith('.chd'));
    for (const arquivo of arquivosChd) {
      await fs.promises.rename(path.join(pastaOrigem, arquivo), path.join(pastaDestino, arquivo));
    }
    return { success: true, count: arquivosChd.length };
  } catch (err) { return { success: false, error: err.message }; }
});

ipcMain.handle('verificar-iso-instalados-ps2', async () => {
  const folderPath = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2', 'JOGOS PRONTOS PS2');
  try {
    if (!fs.existsSync(folderPath)) return [];
    return fs.readdirSync(folderPath).filter(f => f.toLowerCase().endsWith('.iso'));
  } catch (e) { return []; }
});

ipcMain.handle('verificar-chd-instalados-ps1', async () => {
  const folderPath = getAssetPath('duckstation', 'JOGOS PS1', 'JOGOS PRONTOS PS1');
  try {
    if (!fs.existsSync(folderPath)) return [];
    return fs.readdirSync(folderPath).filter(f => f.toLowerCase().endsWith('.chd'));
  } catch (e) { return []; }
});

ipcMain.on('executar-jogo-ps1', (event, gamePath) => {
  const duckstationPath = getAssetPath("duckstation", "duckstation-qt-x64-ReleaseLTCG.exe");
  
  const resolvedGamePath = path.isAbsolute(gamePath) ? gamePath : getAssetPath(gamePath);

  const process = spawn(duckstationPath, [resolvedGamePath], { detached: true, stdio: 'ignore' });
  process.unref();
});

ipcMain.handle('verificar-chd', async () => {
  const folderPath = getAssetPath('ps2_emulator', 'PS2', 'JOGOS PS2');
  try {
    if (!fs.existsSync(folderPath)) return false;
    const files = fs.readdirSync(folderPath);
    return files.filter(f => f.toLowerCase().endsWith('.chd')).length > 0;
  } catch (e) { return false; }
});

ipcMain.on('cancel-download', () => {
  activeDownloads.forEach(item => item.cancel());
  activeDownloads.clear();
});

ipcMain.on('close-app', () => { app.quit(); });



ipcMain.handle('get-full-path', async (event, relPath) => {
  return getAssetPath(relPath);
});