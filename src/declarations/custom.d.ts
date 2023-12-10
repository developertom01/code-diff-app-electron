import {IpcRenderer} from "electron"
interface Window {
    ipcRenderer: IpcRenderer
    // electronAPI: {
    //     ipcRenderer : IpcRenderer
    // }
}
