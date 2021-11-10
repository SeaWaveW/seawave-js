/**
 * @method 排序
 * @param {Array,Boolean} 
 * @desc 数组，排序
 * @returns {Array}
 */
const sort = (list,flag) => {
    let boo = typeof(flag) === 'boolean' ? flag : true
    return list.sort((min,max) => {
        return boo ? min-max : max-min
    })
}

module.exports = sort
