/*CMD
  command: /set_course
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: The course you are currently pursuing, <name>?

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("course", data.message, "string");
Bot.runCommand('/set_inst');
