const fetch = require('node-fetch')
const { cardTemplate } = require('./template')

const convert = (num) => {
    if (num >=1E8) {
        num = (num / 1E8).toFixed(1) + "亿"
    } else if (num >= 1E4) {
        num = (num / 1E4).toFixed(1) + "万"
    }
    return num
}

const toHHMMSS = (second) => [
        Math.floor(second / 3600),
        Math.floor(second / 60) % 60,
        second % 60
    ].map(n => n.toString().padStart(2, 0)).join(':')

const getVideoMessage = async (id) => {
    const type = id.slice(0, 2).toLowerCase()
    const vtype = { 'av': 'aid', 'bv': 'bvid' }[type]
    const url = `http://api.bilibili.com/x/web-interface/view?${vtype}=${type == 'bv' ? id : id.slice(2)}`
    const data = (await (await fetch(url)).json())['data'];
    return data ? {
        v_id: id,
        v_title: data['title'],
        v_time: toHHMMSS(data['duration']),
        v_playview: convert(data['stat']['view']),
        v_danmaku: convert(data['stat']['danmaku']),
        v_upname: data['owner']['name'],
        v_cover: data['pic']
    }:{
        v_id: id,
        v_title: "出错了！",
        v_time: "00:00:00",
        v_playview: 0,
        v_danmaku: 0,
        v_upname: ""
    }
}

module.exports = async (id) => cardTemplate(await getVideoMessage(id))
