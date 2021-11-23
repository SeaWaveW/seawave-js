/**
 * @method 统计字符出现次数
 * @param {String} 
 * @desc  文字
 * @returns {Object}
 */
const charStats = (str) => {
    const list = str.split('')
    const obj = {}
    list.forEach(key => {
        obj[key] ? obj[key]+=1 : obj[key] = 1
    })
    return obj
}

export default charStats