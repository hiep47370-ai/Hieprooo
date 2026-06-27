import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new TelegramBot(token, { polling: true });

const GROUP_A = -1004440531479;
const GROUP_B = -1004304715572;

bot.on("message", async (msg) => {
  if (msg.chat.id !== GROUP_A) return;
  try {
    await bot.copyMessage(GROUP_B, GROUP_A, msg.message_id);
    console.log("Đã copy sang nhóm B");
  } catch (err) {
    console.log(err);
  }
});
