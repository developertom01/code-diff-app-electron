import React from 'react'
import DiffViewer from './DiffViewer'
import { useFileDropHandler } from './hooks'

function App() {
  const { fileLanguage, filesDiffText, oldFileContent } = useFileDropHandler()

  return filesDiffText ? (
    <DiffViewer
      language={fileLanguage}
      oldSource={oldFileContent}
      diffText={filesDiffText}
    />
  ) : null
}

export default App
