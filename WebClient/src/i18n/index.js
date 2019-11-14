import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import vi from './vi';
import { getLanguageDefault } from '../utilities/languageDefault';
i18n.use(LanguageDetector).init({
    resources: {
        en: en,
        vi: vi,
    },
    lng: getLanguageDefault(),
    fallbackLng: ['en', 'vi'],
    ns: ['translations', 'message',],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
});
export default i18n;