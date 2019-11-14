import key from '../i18n/key';
import { toastr } from 'react-redux-toastr';
import { commonConstant } from '../contants/common';
export function handleErrorBasic(errorStatus, stringTitle, t) {
    if (errorStatus === 400) {
        toastr.error(stringTitle, t(key.common.error400GetAPI));
        return true;
    }
    if (errorStatus === 401) {
        toastr.error(stringTitle, t(key.common.error401GetAPI));
        return true;
    }
    if (errorStatus === 403) {
        toastr.error(stringTitle, t(key.common.error403GetAPI));
        return true;
    }
    if (errorStatus === 404) {
        toastr.error(stringTitle, t(key.common.error404GetAPI));
        return true;
    }
    return false;
}
export function handleParameter(match) {    
    let result = commonConstant.ParamAdd;
    if (match && match.params && match.params.id) {
        if (match.params.id > 0) {
            result = parseInt(match.params.id);
        } else {
            result = match.params.id;
        }
    }
    return result;
}
