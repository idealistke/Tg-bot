/*CMD
  command: /register
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter your details. What is your First name?

  <<KEYBOARD

  KEYBOARD
  aliases: /change, technicals
CMD*/

User.setProperty("name", data.message, "string"); 
Bot.runCommand('/set_last_name');
