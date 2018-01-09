import pseudoloc from 'pseudoloc';

function pseudolocalizeObject(obj) {
  const localized = { ...obj };

  Object.entries(localized).forEach(([key, value]) => {
    localized[key] = typeof value === 'string' ? pseudoloc.str(value) : pseudolocalizeObject(localized[key]);
  });

  return localized;
}

export default pseudolocalizeObject;
