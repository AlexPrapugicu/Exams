export function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.data.token) {
        return {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${user.data.token[0].token}`
        };
    } else return {};
}
