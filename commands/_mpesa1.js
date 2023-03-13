/*CMD
  command: /mpesa1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
*MPESA PAYMENT PROCEDURE*

1️⃣ Open Your M-Pesa App/Sim Toolkit 

2️⃣ Tap Lipa na M-Pesa

3️⃣ Select Pay bill

4️⃣ Enter *522522* as your business/paybill number

5️⃣ Enter *1301747130* as the Account number

6️⃣ Enter the amount (kes. 11,150) then your M-Pesa pin 

7️⃣ Press OK to initialize the transaction

*📍Send Mpesa Screenshot to @knec_insider1 for transaction authentication✅️ and wait for response*
  ANSWER
  keyboard: I have Paid
  aliases: 
CMD*/

// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Follow the procedure below to make payments 👇",
  show_alert: is_alert 
})
