import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("8995852189:AAEdbBpwNXpyr9W9p9cR3ikHRVo1cFW1ozw", { polling: true });

const GROUP_A = -1004440531479; // ID nhóm nguồn

const GROUP_B = -1004304715572; // ID nhóm đích

bot.on("message", async (msg) => {

  if (msg.chat.id !== GROUP_A) return;

  try {

    await bot.copyMessage(

      GROUP_B,          // chat đích

      GROUP_A,          // chat nguồn

      msg.message_id    // ID tin nhắn cần copy

    );

    console.log("Đã copy sang nhóm B");

  } catch (err) {

    console.log(err);

  }

});
