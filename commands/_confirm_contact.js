/*CMD
  command: /confirm_contact
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
👤<name> <last_name> is the provided information  *all correct?*

👍 *YES* -  /yes

❌ *NO* - /no 
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(data.message=="/yes"){
   Bot.sendMessage("Subscribe to our leaks packages in order to complete your booking request")
   
   var buttons = [
   [ {title: "Per unit ", command: "/alert1" }],
   [ {title: " All units", command: "/alert2" }]
   ]
   
Bot.sendInlineKeyboard(buttons, "🔷️LEAKAGES SUBSCRIPTION PACKAGES🔷️");
}else{
  Bot.sendMessage("Change data /change");
}
