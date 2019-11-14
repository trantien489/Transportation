import { commonConstant } from '../contants/common';
import { getSessionStorage } from '../utilities/storage';
function getToken() {
    if (typeof (Storage) !== 'undefined') {
        let authToken = getSessionStorage(commonConstant.AUTH_TOKEN);
        if (authToken) {
            return 'Bearer ' + authToken;
        }
    } else {
        console.log('Sorry! No Web Storage support...');
    }
}
const API_SERVICES = {
    HOST: process.env.REACT_APP_URL_BASE_API,
    HOST_MOCK: process.env.REACT_APP_URL_BASE_MOCK_API,
    PROXY: process.env.REACT_APP_URL_PROXY_API,
    VERSION: process.env.REACT_APP_VERSION_API,
    // HEADERS: {
    //     crossDomain: true,
    //     'Content-Type': 'application/json; charset=utf-8',       
    // },
    HEADERS: () => {
        return {
            crossDomain: true,
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: getToken()
        }
    }
};
export default API_SERVICES;