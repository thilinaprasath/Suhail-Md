const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94767208992";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_25_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQwLFxuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDksXG4gICAgICAgIDc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitFMFdWblhSZlBMRWp6MlhYRUdJb0FubDJ5QU84aWJ3NHpKZjNveU4vVkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZxc3hNeTFtUWJTWTg5Ni1ZRlJPVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGM5YjY4NjQtY2I4MC00NDNlLWE0ZjQtZTllZGFiNDliNjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMzIsXG4gICAgICAxMTAsXG4gICAgICA0MCxcbiAgICAgIDEyOCxcbiAgICAgIDEzOSxcbiAgICAgIDEwNCxcbiAgICAgIDEyOCxcbiAgICAgIDYsXG4gICAgICAxMDQsXG4gICAgICAyMTAsXG4gICAgICA5OSxcbiAgICAgIDMxLFxuICAgICAgMTQ1LFxuICAgICAgMjUxLFxuICAgICAgMTA2LFxuICAgICAgMjQ2LFxuICAgICAgNTMsXG4gICAgICAyMDIsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNzUsXG4gICAgICAxMTQsXG4gICAgICAxMzMsXG4gICAgICAxMjMsXG4gICAgICAxNzksXG4gICAgICAxMjYsXG4gICAgICAxMjksXG4gICAgICA1MyxcbiAgICAgIDIwOSxcbiAgICAgIDEwNixcbiAgICAgIDE0NSxcbiAgICAgIDI0NSxcbiAgICAgIDIxMSxcbiAgICAgIDEwOSxcbiAgICAgIDksXG4gICAgICA3OCxcbiAgICAgIDE1NyxcbiAgICAgIDI1MSxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJNS1FLVDI1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NzIwODk5MjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIgg8J2QgPCdkIwgICDwnZCR8J2QhPCdkIDwnZCLICDwnZCK8J2QiPCdkI3wnZCGXFxuXFxuXFxu8J2QilxcblxcblxcblxcblxcblxcbvCdkIRcXG5cXG5cXG5cXG5cXG5cXG7wnZCNXFxuXFxuXFxuXFxuXFxuXFxu8J2QmVxcblxcblxcblxcblxcblxcbvCdkI5cIixcbiAgICBcImxpZFwiOiBcIjI2OTYwODQ4NTQwNDg0NDoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVEFwTkFGRUpMc3ViVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhjVE1mUmlYb2FGLzRvZWhscThnYlFYUGVNUjlvb1hwYm9MOFNQQUtpeHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnVycTJ3YXkwajZqUm5JQThlbFZib0EwYUFiMFV6UGpabEcyVWJoeTlmL3RsdVFkRkNJZm5NaEdoWmw5R1ZjNUhRWDdzbHI3VkRBUmdyVjFjc2lHQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzJyY1hwS0x6Q281eDYxL00vcy9ScUY4Y2dBWThuZGZ5cHBpU0VGVDZjamJmRTJHZHNJVkh6NFFGQVhjdXU1K3pFMTgrM3FYZXZ4cXMrMDFaN2c2Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjcyMDg5OTI6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjcwOTUyNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "kenzo",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "kenzo",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "true",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
