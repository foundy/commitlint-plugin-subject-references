module.exports = ({ subject, references }, when = 'never', value) => {


  // const { subject } = parsed;

  const result = /\(([^)]+)\)$/.exec(subject);

  const issues = references.map(({ prefix, issue }) => `${prefix}${issue}`).join(',');

  // if (issues.join(''))

  console.log('issues', issues, issues === result[1]);

  // const result = subject.match(/\(([^)]+)\)$/);
  console.log('result', result);
  // console.log('parsed', parsed);
  // console.log('when', when);
  // console.log('value', value);
  // console.log('subject', subject);
  // console.log('references', references);
  return [
    true,
    'is test'
  ];
};
