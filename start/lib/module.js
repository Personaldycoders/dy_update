const {
    default: makeWASocket,
    makeWALegacySocket,
    BufferJSON,
    Browsers,
    initInMemoryKeyStore,
    extractMessageContent,
    makeInMemoryStore,
    proto, 
    WAProto,
    DisconnectReason,
    useMultiFileAuthState,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateWAMessage,
    generateForwardMessageContent,
    generateWAMessageContent, 
    generateWAMessageFromContent,
    downloadAndSaveMediaMessage,
    getAggregateVotesInPollMessage,
    jidNormalizedUser, 
    WAMessageStubType,
    getContentType,
    relayMessage,
    WA_DEFAULT_EPHEMERAL,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys")
global.getAggregateVotesInPollMessage = getAggregateVotesInPollMessage
global.jidNormalizedUser = jidNormalizedUser
global.WAProto = WAProto
global.makeCacheableSignalKeyStore = makeCacheableSignalKeyStore
global.makeWASocket = makeWASocket
global.makeWALegacySocket = makeWALegacySocket
global.BufferJSON = BufferJSON
global.Browsers = Browsers
global.initInMemoryKeyStore = initInMemoryKeyStore
global.extractMessageContent = extractMessageContent
global.makeInMemoryStore = makeInMemoryStore
global.proto = proto
global.DisconnectReason = DisconnectReason
global.useMultiFileAuthState = useMultiFileAuthState
global.AnyMessageContent = AnyMessageContent
global.fetchLatestBaileysVersion = fetchLatestBaileysVersion
global.prepareWAMessageMedia = prepareWAMessageMedia
global.downloadContentFromMessage = downloadContentFromMessage
global.getBinaryNodeChild = getBinaryNodeChild
global.jidDecode = jidDecode
global.areJidsSameUser = areJidsSameUser
global.generateWAMessage = generateWAMessage
global.generateForwardMessageContent = generateForwardMessageContent
global.generateWAMessageContent = generateWAMessageContent
global.generateWAMessageFromContent = generateWAMessageFromContent
global.WAMessageStubType = WAMessageStubType
global.getContentType = getContentType
global.relayMessage = relayMessage
global.WA_DEFAULT_EPHEMERAL = WA_DEFAULT_EPHEMERAL
global.chalk = require("chalk") 
global.downloadAndSaveMediaMessage = require("./funcdy.js") 
global.fetch = require("node-fetch") 
global.FileType = require("file-type") 
global.formBuffer = require("file-type").fromBuffer
global.Boom = require("@hapi/boom").Boom 
global.PhoneNumber = require("awesome-phonenumber") 
global.fs = require("fs") 
global.pino = require("pino")
global.axios = require("axios") 
global.cheerio = require("cheerio") 
global.ffmpeg = require("fluent-ffmpeg") 
global.util = require("util")
global.Jimp = require("jimp")
global.moment = require("moment-timezone") 
global.crypto = require("crypto") 
global.ms = require("parse-ms") 
global.os = require("os") 
global.path = require("path")
global.exec = require("child_process").exec 
global.spawn = require("child_process").spawn 
global.api = require("api-dylux")
global.execSync = require("child_process").execSync
global.speed = require('performance-now')
global.vm = require("node:vm")
global.webp = require("node-webpmux")
global.rimraf = require("rimraf")
global.async = require("async")
global.request = require("request")
global.MultiStream = require("multistream")
global.fakeUa = require("fake-useragent")
global.FormData = require("form-data")
global.yts = require('yt-search')
global.webp = require('node-webpmux')
global.ytdl = require('ytdl-core')