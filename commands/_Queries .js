/*CMD
  command: /Queries 
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: support centre
CMD*/

var buttons = [
   [ { title: "👉Customer desk", url: "https://t.me/knec_insider1"} ],

    [ { title: "Updates", url: "https://t.me/+CKebxAfStiBmMjVk" }]
    ]

 

Bot.sendInlineKeyboard(buttons, "Hello user, channel your queries for clarification via our customer desk centre.👇");
