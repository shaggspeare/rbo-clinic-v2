import sendgrid from '@sendgrid/mail';
import TelegramBot from 'node-telegram-bot-api';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize the Telegram bot with the token from BotFather
const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, { polling: false });

// Define your chat IDs (replace these with actual Telegram user IDs)
const chatIds = ['73431135750', '504012970', '353105629']; // Add multiple chat IDs if necessary

const escapeMarkdownV2 = (text) => {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
};

async function sendEmail(req, res) {
  try {
    // Send email via SendGrid
    await sendgrid.send({
      to: ['viacheslav.stetsenko@gmail.com', 'oleksandr.yachnyk@gmail.com', 'yachnikoksana@icloud.com'],
      from: 'syavast@ukr.net',
      subject: `Запис для "Рух без обмежень" від ${req.body.name}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <style>
          .table { border: 3px solid; border-collapse: collapse; }
          .table-head { padding: 10px; border: 3px solid; }
          .table-cell { border: 1px solid; padding: 10px; }
        </style>
      </head>
      <body>
        <div style="margin-left: 20px;margin-right: 20px;">
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
      </html>`
    });

    const escapePhoneNumber = (phone) => {
      return phone.replace(/\+/g, '\\+').replace(/[-\s()]/g, ''); // Escapes only the plus sign, removes other symbols
    };
    // Escape special characters for MarkdownV2
    const escapedName = escapeMarkdownV2(req.body.name);
    const escapedPhone = escapePhoneNumber(req.body.phone);
    const escapedMessage = escapeMarkdownV2(req.body.message);

    // Send message to Telegram users
    const message = `
*🔔 * *НОВИЙ ЗАПИС*\n
*👤 Ім'я:* ${escapedName}
*📞 Телефон:* ${escapedPhone}
*📝 Повідомлення:*
${escapedMessage}
`;

    // Loop through chat IDs and send the message to each user
    for (const chatId of chatIds) {
      try {
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
      } catch (error) {
        console.error(`Failed to send message to ${chatId}:`, error.message);
      }
    }

    return res.status(200).json({ error: '' });

  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
