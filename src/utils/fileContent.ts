export const getFileContents = async (
    fileList?: FileList,
  ): Promise<[string, string]> => {
    const fileContents = await Promise.all([
      fileList![0].text(),
      fileList![1].text(),
    ])
    return fileContents
  }
  