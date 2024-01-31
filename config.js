const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '966536471289'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0N0UjgvVDhqdTNyMFVPc2VCVExVUldmOUJjRGExNWczZ3pwOXFVNTVuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1ZmazJQR1JRRWtaMjRIeGh2Ulo3Wm9BY0crNUo3UWRDSWpreHFETXpqaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSEk2NVUwa1B3eXh6UFV5TVB6a0FaR2txUTQxMWI4cURjdmxRNXVpcEVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyejJoVmtZZUdyNmVSTW5TaCtZTTZlZ0pjTFBaZG1nRkJOTXFQbVZURXhzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHd0V3V0ZudDFQVjVZVjFZamptaGdDbzBwSVRnVFMrblVISG52TTBHRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIWldJRCtqMmhCOHp0Uy9HenRpYTd5cEtJK0tqY0g5eUZlcnF0YlZzMk09In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYT2xraS8zZVZjK0tnbldpcVpMaGp0VG5lQVErektCL0REdUc2UUtSakNtWlM4MzJncVUvZ3JxaHZXZXJOT25oZ1R3WFNTZnB3T2JwaGM3MEVEekVoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyOCwiYWR2U2VjcmV0S2V5IjoiaWFPL1lGSm4reU1PQlpsOHFaQTVJc0hmN2J4dmtYdDhDbGI1cXYybHphYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDkxMTIyMzgwMzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTE3Nzk4RjRBQ0FENURGOTNCMDU4OEVGRjdBMDNERjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNjcyODQ2NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSTRoLWhWVzNTT2FpTW5pWU9ONGZ0QSIsInBob25lSWQiOiI3OTUwZTYyNi03NzZmLTRiNmItYTk3NC01ZGU2MGZkOGFjNDEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY5WnNsWHZtS3VCRmtqbHRzRHowWnA1dUNVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2dk9mRmhrdzNTOEkyV3dMNEJwYXAzbE5RNE09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdmExTElDRUlxNDZxMEdHQXdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0OHhWbWR2RzlWWk1WOUpYUktHMHBKaTRDL0xRMWNqOVpGdk1oM0dtcjN3PSIsImFjY291bnRTaWduYXR1cmUiOiJzQ3hRZDVpR0VaS1prb3NTWTk4L2pIWUJ4U3FXaWE3TEdEK0lJN0VCdGZBRU9EQnZVd2FIY2d4ZFBWbDVSQ2huSXlwcWdwUXU3ejBsZnZpdWNrZmNBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVmQxbk1hdzdmbGZJQ2JValdpK0FJYmEvRlRSMjRVV083cms1ZXFqVk96UVRNTXdxMHVOOUEyb2d1TWpxaVNLVXlhdUd4NThnY1orVTFWQnFDUmNhaUE9PSJ9LCJtZSI6eyJpZCI6IjI0OTExMjIzODAzNzoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJRdWVlbi1BbnlhX1YyIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0OTExMjIzODAzNzoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUE1WWm5ieHZWV1RGZlNWMFNodEtTWXVBdnkwTlhJL1dSYnpJZHhwcTk4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA2NzI4NDYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQVlBQUpPaCJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'MISS-TOLLEN',
  packname:  process.env.PACK_NAME || 'BOT',
  
  botname:   process.env.BOT_NAME === undefined ? "KAISER-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SHERLOCK' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
