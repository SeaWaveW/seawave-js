import sum from './sum'
/**
 * @method 累加
 * @param {Will,String}
 * @desc  任意类型，字段名
 * @returns {Number}
 */
const cumsum = (val,vari) => {
    if(Array.isArray(val)){
        let newVal = 0
        val.forEach(item => {
            newVal = sum(newVal,cumsum(item))
        })
        return newVal
    }else if(typeof val === 'object'){
        return val[vari]
    }else {
        return val
    }
}

export default cumsum