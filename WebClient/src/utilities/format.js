import moment from 'moment';
export function formatStringToDateTime(stringDateTime, formatString) {
    if (!stringDateTime || stringDateTime === '') return null;
    if (formatString == null) formatString = 'DD/MM/YYYY HH:mm';
    var dateTime = new Date(stringDateTime);
    dateTime = moment(dateTime).format(formatString);
    return dateTime;
}
export function formatDateTimeToString(valueDateTime, formatString) {
    if (!valueDateTime) return null;
    var stringDateTime = moment(valueDateTime).format('YYYY-MM-DDTHH:mm:ss');
    if (formatString != null) stringDateTime = moment(valueDateTime).format(formatString);
    return stringDateTime;
}
export function formatString(stringOrigin, stringReplace) {
    if (stringOrigin == null || stringOrigin === '') return '';
    let result = '';
    const indexStart = stringOrigin.indexOf('{');
    const indexEnd = stringOrigin.indexOf('}');
    if (indexStart > -1 && indexStart > -1 && indexStart < indexEnd) {
        result = setCharAt(stringOrigin, indexStart, indexEnd, stringReplace);
    }
    return result;
}
function setCharAt(str, indexStart, indexEnd, chr) {
    if (indexStart > str.length - 1) return str;
    return str.substr(0, indexStart) + chr + str.substr(indexEnd + 1);
}
export function cloneObject(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
export function convertUTCDateToLocalDate(stringDate){
    let utcDate = new Date(stringDate + 'z');
    let localTime= moment.utc(utcDate).local();
    return localTime;
}

export function toCurrency(numberString) {
    numberString = numberString.toString().replace(/,/g,'');
    let result =  numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result;
}

export function currencyToNumber(numberString) {
    numberString = numberString.toString().replace(/,/g,'');
    let result =  isNaN(parseInt(numberString)) ? 0 : parseInt(numberString);
    return result;
}