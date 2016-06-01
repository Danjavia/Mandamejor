dpd.email.post({
  to      : this.email,
  subject : 'MandaMejor registration',
  text    : [
    this.username,
    '',
    'Thank you for registering for MandaMejor!'
  ].join('\n')
}, function ( err, results ) {
    // ...
});