/*CMD
  command: /all_units
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
   [ {title: "Mpesa ", command: "/mpesa1" }],
   [ {title: " PayPal", command: "/alert3" }], 
   [ {title: "Western", command: "/alert3" }]
   ]
   
Bot.sendInlineKeyboard(buttons, "💰PAYMENT METHODS💰\n\nSend Mpesa Screenshot to @knec_insider1 for transaction authentication✅️");
