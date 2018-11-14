const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

const sendGrid = ({ recipient, subject, content }) =>
  new Promise((resolve, reject) => {
    console.log('RECIPIENT',recipient);
    console.log('SUBJECT',subject);
    console.log('CONTENT',content);
    const contentPlainText = content.replace(/<(?:.|\n)*?>/gm, '');
    const envParams = {};

    const request = sg.emptyRequest({
      method: 'POST',
      ...envParams,
      path: '/v3/mail/send',
      host: 'api.sendgrid.com',
      body: {
        personalizations: [
          {
            to: [
              {
                email: recipient
              }
            ],
            subject
          }
        ],
        from: {
          name: 'HPE Developer Portal',
          email: 'hpedev@hpe.com'
        },
        content: [
          {
            type: 'text/plain',
            value: contentPlainText
          },
          {
            type: 'text/html',
            value: content
          }
        ]
      }
    });

    sg.API(request, (error, response) => {
      if (error) {
        console.log('Response', response);
        console.log('Email Error response received', error);
        return reject(error);
      }
      return resolve(recipient);
    });
  });

module.exports = sendGrid;