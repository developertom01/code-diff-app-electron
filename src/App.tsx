import React from 'react'
// import ReactDiffViewer from 'react-diff-viewer'
import * as diff from 'diff'
import DiffViewer from './DiffViewer'

const getFileContents = async (
  fileList?: FileList,
): Promise<[string, string]> => {
  console.log(fileList?.length)
  const fileContents = await Promise.all([
    fileList![0].text(),
    fileList![1].text(),
  ])
  return fileContents
}

function App() {
  const [fileContents, setFileContents] = React.useState<string>('')
  const [oldFileContent, setOldFileContent] = React.useState<string>('')

  document.addEventListener('drop', async (event) => {
    event.preventDefault()
    event.stopPropagation()
    const files = event.dataTransfer?.files
    const contents = await getFileContents(files)
    const changes = diff.createTwoFilesPatch(
      files![0]!.name,
      files![1]!.name,
      contents[0],
      contents[1],
    )

    setOldFileContent(contents[0])
    setFileContents(`
    diff --git  ${files![0]!.name} ${files![1]!.name}
    ${changes}`)
  })

  document.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.stopPropagation()
  })

  return fileContents ? (
    <DiffViewer oldSource={oldFileContent} diffText={fileContents} />
  ) : null
}

export default App
