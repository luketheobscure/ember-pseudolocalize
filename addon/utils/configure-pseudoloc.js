import pseudoloc from 'pseudoloc';

export default function configurePseudoloc(config = {}) {
  const pseudolocDefaults = {
    startDelimiter: '{{',
    endDelimiter: '}}',
  };

  pseudoloc.option = { ...pseudoloc.option, ...pseudolocDefaults, ...config };

  return pseudoloc;
}
