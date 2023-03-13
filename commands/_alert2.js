/*CMD
  command: /alert2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: <name> <last_name> click here to subscribe to this package 👉/all_units

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
  text: "Hello, user! Leak of the entire units costs ksh.11,150",
  show_alert: is_alert 
})
