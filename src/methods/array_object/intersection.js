/**
 * @method 获取两个数组的交集
 * @param {Array,Array,String,Function} 
 * @desc  数组1，数组2，变量，回调（每次寻找成功时的回调）
 * @returns {Array}
 */
const intersection = ( arr1 = [], arr2 = [], vari, callBack ) => {
    if(!vari){
        let arrOne = [...new Set(arr1)]
        let arrTwo = [...new Set(arr2)]
        let results = arrOne.filter(item => arrTwo.includes(item))
        return results
    }
    if(vari){
        const interList = []
        arr1.forEach(item1 => {
            const item2 = arr2.find(item2 => item2[vari] === item1[vari])
            if(item2){
                if(typeof callBack === 'function'){
                    callBack(item1,item2)
                }
                interList.push(item2)
            }
        })
        return interList
    }
    
}

export default intersection