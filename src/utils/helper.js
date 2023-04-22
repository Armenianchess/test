
export const getLocalStorage = (key) => { 
    const getStorage = localStorage.getItem(key)
    try {
        return getStorage? atob(getStorage): false 
    } catch (e) {
        return false
    }
}

export const setLocalStorage = (key,varToSet) => {
    const getStorage = localStorage.setItem(key,btoa(varToSet))
}