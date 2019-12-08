import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { REPORT } from '../actionTypes/report';
import {
    reportBangkeSuccessAction,
    reportBangkeFailureAction,
    reportCheckBangkeSuccessAction,
    reportCheckBangkeFailureAction,
} from '../actions/report';
import API_SERVICES from '../services';
const API_BANGKE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Report/Bangke';
const API_CHECK_BANGKE = API_SERVICES.HOST + API_SERVICES.VERSION + '/Report/CheckBangke';



// BANGKE
const reportBangkeEpic = action$ => action$.pipe(
    ofType(REPORT.BANGKE),
    mergeMap((action) => {
        return Promise.resolve(
            fetch(API_BANGKE + action.payload.queryString, {
                headers: API_SERVICES.HEADERS()
            }).then(response => {
                if (response.status === 200) {
                    response.blob().then(blob => downloadFile(blob,action))
                } else {
                    throw new Error(response.status)
                }
            }).then(() => reportBangkeSuccessAction())
            .catch(error =>reportBangkeFailureAction({
                        message: 'Lỗi xãy ra', 
                        status: 401
                    }))
        )
    })
);

// CHECK_BANGKE
const reportCheckBangkeEpic = action$ => action$.pipe(
    ofType(REPORT.CHECK_BANGKE),
    mergeMap((action) => {
        return ajax.getJSON(API_CHECK_BANGKE + action.payload, API_SERVICES.HEADERS()).pipe(
            map(response => reportCheckBangkeSuccessAction(response)),
            catchError(error => of(reportCheckBangkeFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

const downloadFile = (blob, action) =>{
    return new Promise((resolve, reject) => {
        let day = action.payload.day;
        let month = action.payload.month;
        let year = action.payload.year;
        let monthReport = action.payload.monthReport;
        let yearReport = action.payload.yearReport;
    
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `Bảng kê tháng ${monthReport}-${yearReport}__Ngày xuất ${day}-${month}-${year}.xlsx`;
        a.click();

        resolve();
    })
    
}
export { reportBangkeEpic, reportCheckBangkeEpic };
