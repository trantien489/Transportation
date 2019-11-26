export function addAction(arrCurrentAction, action) {
    arrCurrentAction.push(action);
}

export function isExistAction(arrCurrentAction, action) {
    return arrCurrentAction.indexOf(action) !== -1;
}

export function removeAction(arrCurrentAction, action) {
    return arrCurrentAction.filter((val) => {
        return val !== action
    });
}