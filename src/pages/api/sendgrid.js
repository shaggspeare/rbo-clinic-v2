import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: ['viacheslav.stetsenko@gmail.com', 'oleksandr.yachnyk@gmail.com'],
      from: 'syavast@ukr.net',
      subject: `Запис для "Рух без обмежень" від ${req.body.name}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <style>
        .table {
         border: 3px solid;
         border-collapse: collapse;
        }
        
        .table-head {
          padding: 10px;
          border: 3px solid;
        }
        
        .table-cell {
          border: 1px solid;
          padding: 10px;
        }
      </style>
      </head>
      <body>
        <div className="container" style="margin-left: 20px;margin-right: 20px;">
          <h2>Новий запис від ${req.body.name}: </h2>
          <table class="table">
           <tr class="table-row">
            <th class='table-head'>Ім'я</th><th class='table-head'>${req.body.name}</th>
           </tr>
           <tr class="table-row">
            <td class="table-cell">Номер телефону</td><td class="table-cell">${req.body.phone}</td>
           </tr>
           <tr class="table-row">
            <td class="table-cell">Що турбує:</td><td class="table-cell">${req.body.message}</td>
           </tr>
          </table>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
