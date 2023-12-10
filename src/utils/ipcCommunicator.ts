enum IPC_CHANNELS { 
    SHOW_DIALOGUE = "SHOW_DIALOGUE",
    SHOW_ERROR_DIALOGUE = "SHOW_ERROR_DIALOGUE"
}


type IPCErrorMessage = {
    message: string
}

export class IpcCommunicator {
    public static openErrorDialogue(message: IPCErrorMessage){
        window.ipcRenderer.send(IPC_CHANNELS.SHOW_ERROR_DIALOGUE,message)
    }
}