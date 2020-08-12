export const timeout = (delay) => {
    return new Promise(res => setTimeout(res, delay));
};


export const getUserRole = () => {
    const item = JSON.parse(localStorage.getItem("user"));
    return item.data.role;
};

export const getLoggedUser = () => {
    const item = JSON.parse(localStorage.getItem("user"));
    return item.data.userName;
};


export const sorter = (key, order = 'asc') => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }
        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'des') ? (comparison * -1) : comparison
        );
    };
}
