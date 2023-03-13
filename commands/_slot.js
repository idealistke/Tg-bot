/*CMD
  command: /slot
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

var tgID=data.user.telegramid;
var firstName = data.user.first_name;
var lastName = data.user.last_name;
var userName = data.user.username;
var greetings = "Hello, " + firstName + " " + lastName + "(" + userName + ") ! \nTelegramID: " + tgID;

Bot.sendMessage(greetings);

var buttons = [
   [ {title: " TECHNICALS", command: "/register" }],
   [ {title: " BUSINESS", command: "/register" }],
  [ 
     {title: "❌️", command: "/close" },
     {title: "✔️", command:"/alert"}
     
   ]
]

Bot.sendInlineKeyboard(buttons, "Specify your category👇  please don't tap more than once 🙏");
