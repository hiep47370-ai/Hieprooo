import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const GROUP_A = -1004440531479;

const GROUP_B = -1004304715572;

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true
  }
});

console.log("Bot đang theo dõi nhóm A...");

bot.on("message", async (msg) => {
  try {
    if (msg.chat.id !== GROUP_A) return;

    await bot.copyMessage(
      GROUP_B,
      GROUP_A,
      msg.message_id
    );

    console.log("Đã copy:", msg.message_id);
  } catch (err) {
    console.log(err instanceof Error ? err.message : err);
  }
});
