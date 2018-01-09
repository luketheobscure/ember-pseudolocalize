import pseudoloc from 'pseudoloc';
import Locale from 'ember-i18n/utils/locale';

pseudoloc.option.startDelimiter = '{{';
pseudoloc.option.endDelimiter = '}}';

function pseudolocObject(obj) {
  const localized = { ...obj };

  Object.entries(localized).forEach(([key, value]) => {
    localized[key] = typeof value === 'string' ? pseudoloc.str(value) : pseudolocObject(localized[key]);
  });

  return localized;
}

export function initialize(appInstance) {
  const i18nService = appInstance.lookup('service:i18n');

  const { translations } = new Locale('en-us', appInstance);

  i18nService.addTranslations('en-xa', pseudolocObject(translations));
}

export default {
  initialize,
};
