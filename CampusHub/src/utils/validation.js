export function validateLogin(email, password) {
    if (email.trim() === "" || password.trim() === "") {
        return false;
    }
    return true;
}

export function validateTask(title) {
    if (title.trim() === "") {
        return false;
    }
    return true;
}

export function validateResource(title, url) {
    if (title.trim() === "" || url.trim() === "") {
        return false;
    }
    return true;
}