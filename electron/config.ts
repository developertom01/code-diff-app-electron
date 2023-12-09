type APP_CONFIG = {
    appEnv : "dev"|"prod"|"test"
}

export const config:APP_CONFIG = {
    appEnv : process.env.APP_ENV  as APP_CONFIG["appEnv"] ?? "dev"
}

console.log({config})