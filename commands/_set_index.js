/*CMD
  command: /set_index
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Your index number, <name>?

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("index", data.message, "string");
Bot.runCommand('/set_course');
