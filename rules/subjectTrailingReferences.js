module.exports = ({ subject, header, references }, when = 'always', value) => {
  const negated = when === 'never';

  // disable
  if (negated) {
    return [true];
  }

  // only parentheses
  const matches = (subject || '').match(/\(([^)]+)\)$/);
  const match = matches ? matches[1] : '';
  const issues = [];

  references.every(({ prefix, issue }, idx) => {
    const key = `${prefix}${issue}`;
    const has = header.includes(key);

    if (has) {
      header = header.replace(key, `__${idx}__`);

      issues.push(key);
    }

    return has;
  });

  const exactMatch = match === issues.join(',');

  return [
    exactMatch,
    'subject trailing format mismatch'
  ];
};
