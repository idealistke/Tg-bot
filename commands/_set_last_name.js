/*CMD
  command: /set_last_name
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: What is your last name, <name>?

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("last_name", data.message, "string");
Bot.runCommand('/set_index');
