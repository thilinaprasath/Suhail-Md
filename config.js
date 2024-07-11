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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_32_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICA3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3dKaFBoLzFlS2tQdUxTaWlTb1dBVXZrM0M0LzNUaGRhckRHQStzWHczQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZFhGcXNKX0tSeXVZdFk2cVMyU21GUVwiLFxuICBcInBob25lSWRcIjogXCI4YzA3YWZjOC1iYjY1LTRiYjAtYmFmMy00YjVlNzg1ZjkyNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMTc0LFxuICAgICAgMTA3LFxuICAgICAgOTAsXG4gICAgICAxNDEsXG4gICAgICAzMCxcbiAgICAgIDg1LFxuICAgICAgMjEyLFxuICAgICAgMjIwLFxuICAgICAgMjA4LFxuICAgICAgNjQsXG4gICAgICAxODYsXG4gICAgICAxNzAsXG4gICAgICAyMjcsXG4gICAgICAxNzUsXG4gICAgICAxMjksXG4gICAgICA2NCxcbiAgICAgIDk1LFxuICAgICAgMTE5LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgNixcbiAgICAgIDMyLFxuICAgICAgMjMwLFxuICAgICAgMTU5LFxuICAgICAgMTk3LFxuICAgICAgMCxcbiAgICAgIDI0MCxcbiAgICAgIDI1MSxcbiAgICAgIDIyMCxcbiAgICAgIDgsXG4gICAgICAxMzgsXG4gICAgICAxNzgsXG4gICAgICA4OCxcbiAgICAgIDM3LFxuICAgICAgMTExLFxuICAgICAgMTk0LFxuICAgICAgMjIxLFxuICAgICAgMTY3LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMk4zWlBQWUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY3MjA4OTkyOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QiCDwnZCA8J2QjCAgIPCdkIrwnZCI8J2QjfCdkIZcXG5cXG5cXG5cXG7wnZCOXFxuXFxuXFxuXFxuXFxuXFxu8J2QmVxcblxcblxcblxcblxcblxcbvCdkItcXG5cXG5cXG5cXG5cXG5cXG7wnZCAXFxuXFxuXFxuXFxuXFxuXFxu8J2QkVwiLFxuICAgIFwibGlkXCI6IFwiMjY5NjA4NDg1NDA0ODQ0OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05UQXBOQUZFSm11d0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOGNUTWZSaVhvYUYvNG9laGxxOGdiUVhQZU1SOW9vWHBib0w4U1BBS2l4cz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUYnFRckVNUmJib1VIS3pVN3NzY2c3RlJzVWhsdFUwVU9HMVlPZzJhcHYzZ2pCVWRLMENvd3pwcm9EZkNEY3RWUFhTWXRvK2tqczE2RkpMM0tZSHhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3anh6ZmRDWm8zcWhBM1pxRURCSjlxR0lGRXM3dkptRHlJS0xoR1VhTVZBek5MUlpMTjBzclN0RFNOQ0tTLyszb1U1RExOZXZGaDI5akV2Vlc2amVDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NzIwODk5MjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzE5MTMyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
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
