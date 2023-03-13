/*CMD
  command: /per_unit
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
   [ {title: "Mpesa ", command: "/mpesa" }],
   [ {title: " PayPal", command: "/alert3" }], 
   [ {title: "Western", command: "/alert3" }]
   ]
   
Bot.sendInlineKeyboard(buttons, "💰PAYMENT METHODS💰\n\nSend Mpesa Screenshot to @knec_insider1 for transaction authentication✅️");
