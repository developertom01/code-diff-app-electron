import React from 'react'
import DiffViewer from './DiffViewer'
import { useFileDropHandler } from './hooks'
import { IpcCommunicator } from './utils'

function App() {
  const { fileLanguage, filesDiffText, oldFileContent } = useFileDropHandler()
  React.useEffect(() => {
    IpcCommunicator.openErrorDialogue({ message: 'Some error' })
  }, [])
  return filesDiffText ? (
    <DiffViewer
      language={fileLanguage}
      oldSource={oldFileContent}
      diffText={filesDiffText}
    />
  ) : null
}

export default App
