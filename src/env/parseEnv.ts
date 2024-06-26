export const env = (key: string): string => {
    const value = process.env[key]
    if (!value) {
        throw Error(`No envieonment variable found for ${key}`)
    }
    return value
}

export const getJsonFromFile = <T = Record<string, string>>(path: string): T => {
    return require(`${process.cwd()}${path}`)

}