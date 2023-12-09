import { BrowserWindow } from "electron";

export const createEventHandlers = (win : BrowserWindow)=>{
    win.webContents.on("will-navigate",(e,url)=>{
        e.preventDefault()
        console.log(url)
    })
}