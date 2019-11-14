import { commonConstant } from '../contants/common';
import { getLocalStorage } from "./storage";
export function getLanguageDefault() {
    const lng = getLocalStorage(commonConstant.system.TRANSLATION_KEY);
    const defaultLanguage = lng ? lng : 'vi';
    return defaultLanguage;
}