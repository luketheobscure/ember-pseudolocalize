import Locale from 'ember-i18n/utils/locale';
import configurePseudoloc from '../utils/configure-pseudoloc';
import pseudolocalizeObject from '../utils/pseudolocalize-object';

export function initialize(appInstance) {
  const i18nService = appInstance.lookup('service:i18n');
  const appConfig = appInstance.resolveRegistration('config:environment');

  configurePseudoloc(appConfig['ember-pseudolocalize']);

  const { translations } = new Locale('en-us', appInstance);

  i18nService.addTranslations('en-xa', pseudolocalizeObject(translations));
}

export default {
  initialize,
};
