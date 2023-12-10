import React from 'react'
import {
  SUPPORTED_LANGUAGES_TYPE,
  getFileContents,
  getLanguageFromFilename,
} from '../utils'
import * as diff from 'diff'

export const useFileDropHandler = () => {
  const [filesDiffText, setfilesDiffText] = React.useState<string>('')
  const [oldFileContent, setOldFileContent] = React.useState<string>('')
  const [fileLanguage, setFileLanguage] = React.useState<
    SUPPORTED_LANGUAGES_TYPE
  >('txt')
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
    const language = getLanguageFromFilename(files![0]!.name!)
    if (!language) {
      alert('Language not supported')
      return
    }
    setFileLanguage(language)
    setfilesDiffText(`
    diff --git  ${files![0]!.name} ${files![1]!.name}
    ${changes}`)
  })

  document.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.stopPropagation()
  })
  return { filesDiffText, oldFileContent, fileLanguage }
}

export default useFileDropHandler
