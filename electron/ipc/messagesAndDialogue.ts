import { BrowserWindow, dialog, ipcMain } from "electron"

enum IPC_CHANNELS { 
    SHOW_DIALOGUE = "SHOW_DIALOGUE",
    SHOW_ERROR_DIALOGUE = "SHOW_ERROR_DIALOGUE"
}

type IPCErrorMessage = {
    message: string
} 

export const createEventHandlers= ()=>{
    ipcMain.on(IPC_CHANNELS.SHOW_ERROR_DIALOGUE,(ev, args:IPCErrorMessage)=>{
        const win = BrowserWindow.fromWebContents(ev.sender)!
        dialog.showMessageBox(win, {message: args.message})
    })
}