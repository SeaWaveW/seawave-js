const dayUnit = 24 * 60 * 60 * 1000

/**
 * @method 日期格式化
 * @param {String,String} 
 * @desc 日期，格式
 * @returns {String}
 */
const formatter = (dt,dwg = 'yyyyMMdd') => {
    const newTime = getTime(dt);
    const date = new Date(newTime);
    const year = date.getFullYear()
    const month = (date.getMonth() + 1)
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const seconds = date.getSeconds()
    let newDwg = dwg
    newDwg = newDwg.replace(/yyyy/g,year) // 年  2021 
    newDwg = newDwg.replace(/MM/g,month < 10 ? `0${month}` : month) // 月 补0  09
    newDwg = newDwg.replace(/M/g,month) // 月 不补0  9
    newDwg = newDwg.replace(/dd/,day < 10 ? `0${day}` : day) // 日 补0  09
    newDwg = newDwg.replace(/d/g,day) // 日 不补0  9
    newDwg = newDwg.replace(/HH/g,hour < 10 ? `0${hour}` : hour) // 小时(24) 补0  09
    newDwg = newDwg.replace(/H/g,hour) // 小时(24) 不补0  9
    newDwg = newDwg.replace(/hh/g,hour%12 < 10 ? `0${hour%12}` : hour) // 小时(12) 补0  09
    newDwg = newDwg.replace(/h/g,hour%12) // 小时(12) 不补0  9
    newDwg = newDwg.replace(/mm/g,minute < 10 ? `0${minute}` : minute) // 分钟 补0  09
    newDwg = newDwg.replace(/m/g,minute) // 分钟 不补0  9
    newDwg = newDwg.replace(/ss/g,seconds < 10 ? `0${seconds}` : seconds) // 秒 补0  09
    newDwg = newDwg.replace(/s/,seconds) // 秒 不补0  9
    return newDwg
}
/**
 * @method 获取毫秒数
 * @param {String} 
 * @desc 日期
 * @returns {Number}
 */
const getTime = (val) => {
    if(!val){
        return new Date().getTime()
    }
    if(/[\u0391-\uFFE5]/g.test(val)){
        return new Date(val).getTime()
    }
    const valList = val.split(' ')
    valList.forEach((item,index) => {
        if(!index){
            if(!/\W_/g.test(item)){
                valList[index] = `${item.slice(0,4)}-${item.slice(4,6)}-${item.slice(6,8)}`
            }
        }else {
            if(!/\W_/g.test(item)){
                valList[index] = `${item.slice(0,2)}:${item.slice(2,4)}:${item.slice(4,6)}`
            }
        }
    })
    const newVal = valList.join(' ')
    return new Date(newVal).getTime()
}
/**
 * @method 获取某月最大天数
 * @param {String,String} 
 * @desc  年份，月份
 * @returns {Number}
 */
const getMonthDay = (year,month) => {
    const max = new Date(year,month,0).getTime()
    const min = new Date(`${year}-${month}-01`)
    const count = (max - min) / dayUnit
    return Math.ceil(count + 1)
}
/**
 * @method 获取两个不同日期相差天数
 * @param {String,String} 
 * @desc  日期，日期
 * @returns {Number}
 */
const getDifferDay = (d1,d2) => {
    const nd1 = getTime(d1)
    const nd2 = getTime(d2)
    const d = nd1 >= nd2 ? nd1 - nd2 : nd2 - nd1
    return parseInt(d / dayUnit)
}
export default {
    getTime,
    formatter,
    getMonthDay,
    getDifferDay
}