export const getDataFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const setDataToLocalStorage = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value))
}