
const DEFAULT_TEXT_EXTENSION = "txt"
const EXTENSION_SUPPORTED = ["cpp","js","cjs","ts","php","dart","go","json","xml", "html", "txt", "java"] as const
const LANGUAGES_SUPPORTED = ["cpp","javascript","typescript","php","dart","go","json","xml", "html","txt","java"] as const

type SUPPORTED_EXTENSION_TYPE =  typeof EXTENSION_SUPPORTED[number]
export type SUPPORTED_LANGUAGES_TYPE =  typeof LANGUAGES_SUPPORTED[number]

const getExtensionFromFileName=(fileName: string): SUPPORTED_EXTENSION_TYPE =>{
    if (!fileName.includes(".")) {
        return fileName as SUPPORTED_EXTENSION_TYPE
    }
    return fileName.split(".").at(-1) as SUPPORTED_EXTENSION_TYPE ??  DEFAULT_TEXT_EXTENSION
}

const fileExtensionLanguageMap =  new Map<SUPPORTED_EXTENSION_TYPE,SUPPORTED_LANGUAGES_TYPE>()
.set("js", "javascript")
.set("cjs", "javascript")
.set("ts", "typescript")
.set("cpp","cpp")
.set("dart","dart")
.set("php","php")
.set("json","json")
.set("xml","xml")
.set("html","html")
.set("txt","txt")
.set("java","java")

export const getLanguageFromFilename = (filename: string):SUPPORTED_LANGUAGES_TYPE | undefined => {
    const extension = getExtensionFromFileName(filename)
    return fileExtensionLanguageMap.get(extension)
}