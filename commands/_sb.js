/*CMD
  command: /sb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: book a slot
CMD*/

var buttons = [
   [ { title: "👉Go to channel", url: "https://t.me/+hl3qAb_WNCg2NDRk"} ],

    [
       { title: "Technical Timetable", url: "knec.ac.ke/wp-content/upl" },
       { title: "Business Timetable", url: "knec.ac.ke/wp-content/upl" }
    ],

    [ { title: "ᗷOOK ᗩ ՏᒪOT", command: "/slot"} ]

]

Bot.sendInlineKeyboard(buttons, "👉𝗧𝗵𝗲 𝗠𝗮𝗿𝗰𝗵/𝗔𝗽𝗿𝗶𝗹 𝟮𝟬𝟮𝟯 𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗮𝗻𝗱 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹 𝗧𝗶𝗺𝗲𝘁𝗮𝗯𝗹𝗲𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝘂𝗽𝗹𝗼𝗮𝗱𝗲𝗱 𝗼𝗻 𝗼𝘂𝗿 𝗞𝗡𝗘𝗖 𝘄𝗲𝗯𝘀𝗶𝘁𝗲’𝘀 𝗵𝗼𝗺𝗲 𝗽𝗮𝗴𝗲..\n\n𝗧𝗮𝗽/𝗖𝗹𝗶𝗰𝗸 𝗼𝗻 𝗕𝗼𝗼𝗸 𝗮 𝘀𝗹𝗼𝘁 𝘁𝗼 𝘀𝗲𝗰𝘂𝗿𝗲 𝘆𝗼𝘂𝗿𝘀𝗲𝗹𝗳 𝗮 𝘀𝗹𝗼𝘁  👇");
