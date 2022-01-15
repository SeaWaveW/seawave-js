/**
 * @method 最大值
 * @param { sum, max, decimal } 
 * @desc  值，最大值, 小数点个数
 * @returns { String }
 */
const max = (sum = '', max = '100', dec = 2) => {
    const newSumList = []
    // 阈值
    max += ''
    const maxList = max.split('.')
    const maxInteger = Number(maxList[0]); // 整数
    const mdFlag = maxList.length > 1; // 是否存在小数
    const maxDecimal = mdFlag ? maxList[1] : ''; // 小数部分(不转number)
    // 值
    sum += ''
    const sumList = sum.split('.')
    let integer = Number(sumList[0]); // 整数
    const dFlag = sumList.length > 1; // 是否存在小数
    let decimal = dFlag ? sumList[1] : ''; // 小数部分(不转number)
    // 判断整数
    newSumList.push( integer > maxInteger ? `${maxInteger}` : `${integer}` )
    
    // 整数 是否大于 最大值的整数值
    if(integer > maxInteger){
        // 当最大值中存在小数
        if(mdFlag){ 
            // 那么将 最大值的小数 赋予 小数
            newSumList.push( maxDecimal )
        }
    }
    // 整数 等于 最大值的整数值
    else if( integer === maxInteger){
        // 若 最大值的小数存在
        if(mdFlag){
            // 若存在小数
            if(dFlag){
                const newDecimal = Number(`0.${decimal}`)
                const newMaxDecimal = Number(`0.${maxDecimal}`)
                // 若小数大于最大值的小数，那么取最大值的小数，反之亦然
                newSumList.push( newDecimal > newMaxDecimal ? maxDecimal : decimal )
            }
        }
    }
    // 整数 小于 最大值的整数值
    else{
        // 若存在小数
        if(dFlag){
            newSumList.push( decimal )
        }
    }
    
    // 最后小数格式整理：存在小数
    if(newSumList.length > 1){
        const num = dec - newSumList[1].length
        // 若小数长度小于限制数 则补0
        if(num > 0){
            for(let i=0; i<num; i++){
                newSumList[1] += '0'
            }
        }
        // 若不小于则截取
        else{
            newSumList[1] = newSumList[1].slice(0,dec)
        }
    }
    return newSumList.join('.')
}

export default max