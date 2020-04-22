import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';
import translationDE from './locales/de/translation.json';

// the translations
const resources = {
  English: {
    translation: translationEN,
  },
  Polish: {
    translation: translationPL,
  },
  Deutsch: {
    translation: translationDE,
  },
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'English',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
