// Se quiser expor APIs para o frontend com segurança
import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('api', {
  // Exemplo: fetch data, versão, etc.
  ping: () => 'pong'
})