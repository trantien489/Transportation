import React from 'react';
import key from '../../i18n/key';
export class ErrorAlert extends React.Component {
    render() {
        const { responseData, msgErrorGetAPI, msgRedirectToLogin, t } = this.props;
        const clsError = 'alert alert-danger';
        let msgError = <div className={clsError}>{msgErrorGetAPI}</div>;
        if (responseData && (responseData.status === 401 || responseData.status === 403)) {
            const errorDetail = responseData.status === 401 ? t(key.common.error401GetAPI) : t(key.common.error403GetAPI);
            msgError = <div>
                <div className={clsError}>
                    {msgErrorGetAPI}
                    <br />
                    {errorDetail}
                    <br /><a className='alert-link' href='/login'>{msgRedirectToLogin}</a>
                </div>
            </div>;
        }
        return msgError;
    }
}
export default ErrorAlert;
