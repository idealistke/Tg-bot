/*CMD
  command: /close
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

if(message=="❌"){
   return  // exit from command on "Back"
}

Bot.sendMessage("Operation Cancelled")

// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Hello, user! you have cancelled your booking slot process😢",
  show_alert: is_alert 
})
