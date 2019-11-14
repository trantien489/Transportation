import { getSessionStorage } from './storage';
import { commonConstant } from '../contants/common';
//All function return value is boolean type
export function isNullOrEmptyObject(obj) {
    if (obj) return JSON.stringify(obj) === JSON.stringify({});
    else return true;
}
//
export function isEmptyOrSpace(anyType) {
    let strText = anyType + "";
    return strText.trim() === "";
}
//
export function isNullActionReducer(action) {
    if (action) return action.isLoading || isNullOrEmptyObject(action.responseData);
    else return true;
}
//
export function hasRecordsActionReducer(action) {
    if (action) return action.responseData && action.responseData.Data && action.responseData.Data.Records;
    else return false;
}
export function removeItemFromItems(item, items) {
    if (items && items.length > 0 && item) {
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }
    }
    return items;
}
export function changeStatusItemFromItems(item, items) {
    if (items && items.length > 0 && item) {
        const index = items.indexOf(item);
        if (index > -1) {
            if (items[index].Status === 'Active' || items[index].Status === 'InActive') {
                items[index].Status = items[index].Status === 'Active' ? 'InActive' : 'Active';
            }
            else if (items[index].Status === 1 || items[index].Status === 0) {
                items[index].Status = items[index].Status === 1 ? 0 : 1;
            }
        }
    }
    return items;
}
export function changeIsDefaultItemFromItems(item, items) {
    if (items && items.length > 0 && item) {
        const index = items.indexOf(item);
        if (index > -1) {
            if (items[index].IsDefault === 'Yes' || items[index].IsDefault === 'No') {
                items[index].IsDefault = items[index].IsDefault === 'Yes' ? 'No' : 'Yes';
            }
            else if (items[index].IsDefault === 1 || items[index].IsDefault === 0) {
                items[index].IsDefault = items[index].IsDefault === 1 ? 0 : 1;
            }
        }
    }
    return items;
}
export function applyCheckAuthorized() {
    const id = getSessionStorage(commonConstant.AUTH_ID);
    const token = getSessionStorage(commonConstant.AUTH_TOKEN);
    const expired = getSessionStorage(commonConstant.AUTH_EXPIRES_IN);
    if (!(id && token && expired)) {
        if (typeof window !== 'undefined') {
            window.location.href = '/login';
        }
    }
}

export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}