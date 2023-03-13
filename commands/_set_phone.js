/*CMD
  command: /set_phone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Your phone number, <name>?  (e.g 07....)

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("phone", data.message, "string")
Bot.runCommand("/profile")
Bot.runCommand("/confirm_contact")

