import TelegramBot from 'node-telegram-bot-api';

// Initialize the Telegram bot with the token from BotFather
const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, { polling: false });

// Define your chat IDs (replace these with actual Telegram user IDs)
const chatIds = ['73431135750', '504012970', '353105629', '1875269732']; // Add multiple chat IDs if necessary

const escapeMarkdownV2 = (text) => {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
};

const escapePhoneNumber = (phone) => {
  return phone.replace(/\+/g, '\\+').replace(/[-\s()]/g, ''); // Escapes only the plus sign, removes other symbols
};

async function sendTelegram(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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

export default sendTelegram;
