/**
 * @method 获取两个数组的交集
 * @param {Array,Array} 
 * @returns {Array}
 */
const intersection = ( arr1 = [], arr2 = [] ) => {
    let arrOne = [...new Set(arr1)]
    let arrTwo = [...new Set(arr2)]
    let results = arrOne.filter(item => arrTwo.includes(item))
    return results
}

export default intersection