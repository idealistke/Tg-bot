/*CMD
  command: /alert1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: <name> <last_name> click here to subscribe to this package 👉/per_unit

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Hello, user! Leaks per unit costs ksh.1,350",
  show_alert: is_alert 
})
