import fetch from 'fetch';

export async function initialize(application) {
  application.deferReadiness();

  const i18nService = application.resolveRegistration('service:i18n');
  const locale = await fetch('/api/detect-locale').then(res => res.text());

  // eslint-disable-next-line no-console
  console.info(`Setting locale to ${locale}`);

  i18nService.reopen({ locale });
  application.advanceReadiness();
}

export default {
  initialize,
};
