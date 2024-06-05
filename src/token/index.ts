import Cookies from "js-cookie";

export function getToken() {
    return Cookies.get("auth_token")
}

export function removeToken() {
    return Cookies.remove("auth_token")
}

