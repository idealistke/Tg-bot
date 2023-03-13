/*CMD
  command: /KCSE
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var buttons = [
    {title: "1️⃣ FULL NAMES", command: "/" },
    {title: "2️⃣ INDEX NUMBER", command: "/" },
    {title: "3️⃣ SCHOOL CODE", command: "/" },
    {title: "4️⃣ RANDOM NUMBER", command: "/" },
    {title: "5️⃣ SUBJECT GRADES", command: "/" },
    {title: "Close Menu ❌️", command: "/" },
];

Bot.sendInlineKeyboard(buttons, "Enter your details in the order as shown below");
