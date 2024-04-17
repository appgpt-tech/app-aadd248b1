//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    skeletons: {
      name: 'Skeletons',
      fields: { bowAndArrow: 'Bow And Arrow', id: 'id' },
    },
    dragons: {
      name: 'Dragons',
      fields: { shootFireAndSlash: 'Shoot Fire And Slash', id: 'id' },
    },
    cyclops: { name: 'Cyclops', fields: { bigHammer: 'Big Hammer', id: 'id' } },
  },
};
const frResources = {
  resources: {
    skeletons: {
      name: 'Skeletons (fr)',
      fields: { bowAndArrow: 'Bow And Arrow (fr)', id: 'id' },
    },
    dragons: {
      name: 'Dragons (fr)',
      fields: { shootFireAndSlash: 'Shoot Fire And Slash (fr)', id: 'id' },
    },
    cyclops: {
      name: 'Cyclops (fr)',
      fields: { bigHammer: 'Big Hammer (fr)', id: 'id' },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);