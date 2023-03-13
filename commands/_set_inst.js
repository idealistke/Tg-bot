/*CMD
  command: /set_inst
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Name of your learning institution, <name>? (e.g. Chavakali polytechnic)

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("inst", data.message, "string");
Bot.runCommand('/set_phone');
