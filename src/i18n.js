import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './transilation/en.ts';
import ruTranslation from './transilation/ru.ts';

const resources = {
    en: {
        translation: enTranslation,
    },
    ru: {
        translation: ruTranslation,
    },
};

i18next
    .use(initReactI18next) // Initialize react-i18next
    .init({
        resources,
        lng: 'en',
    });

export const changeLanguage = (lng) => {
        i18next.changeLanguage(lng); // Change the language dynamically
};

export default i18next;


// import i18next from 'react-i18next';
// import { initReactI18next } from 'react-i18next';
// import enTranslation from './transilation/en.ts';
// import ruTranslation from './transilation/ru.ts';
// const i18n = i18next.init({
//     resources: {
//         en: {
//             translation: enTranslation
//         },
//         ru: {
//             translation: ruTranslation
//         }
//     },
//     lng: 'en'
// });
// i18next.use(initReactI18next).init({
//     resources,
//     lng: 'en',
// });
// export default i18n;