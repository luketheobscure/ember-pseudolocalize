import fetch from 'fetch'

export async function initialize(application) {
  application.deferReadiness()
  
  let i18nService = application.resolveRegistration('service:i18n')
  let locale = await fetch('/api/detect-locale').then((res) => res.text())

  console.log(`Setting locale to ${locale}`);

  i18nService.reopen({ locale })
  application.advanceReadiness()

}

export default {
  initialize
};
