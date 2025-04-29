import { app, BrowserWindow } from 'electron'
import path from 'path' //módulo do Node.js para manipular caminhos de arquivos.
import { fileURLToPath } from 'url' //converte a URL do arquivo (como import.meta.url) em caminho local.

const __filename = fileURLToPath(import.meta.url) //  caminho completo do arquivo atual (main.js)
const __dirname = path.dirname(__filename) //  pasta onde o main.js está localizado

const isDev = process.env.NODE_ENV === 'development' // Checa se estamos em modo de desenvolvimento.

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'), //webPreferences.preload: define o script preload.js, que roda no contexto isolado do navegador.
    }
  })

  if (isDev) {
    win.loadURL('http://localhost:5173') //Em dev, carregamos o servidor do Vite (vite dev).
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html')) //Em produção, carregamos o HTML gerado pelo vite build (pasta dist).
  }
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit() //fecha a app se nao estiver no masOS
})