/**
 * @method 去重
 * @param {Array/Object，or Object} 
 * @desc  需要去重的数组或对象（若为对象时则）
 * @returns {Array}
 */
const deWeight = (arr) => {
    return [...new Set(arr)]
}


