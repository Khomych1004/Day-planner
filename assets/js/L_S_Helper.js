// Saving to local storage
function saveLocalStorage(key, text) {
    localStorage.setItem(key, text);
}

// Get from local storage
function loadLocalStorage(key) {

    return localStorage.getItem(key);

}