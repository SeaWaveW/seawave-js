/**
 * @method 类型格式化
 * @param {Array/Object,String/Number,String,String} 
 * @desc 数组/对象，数值，属性名，属性值
 * @returns {String}
 */
const typeMap = (arrObj,vari,key,value) => {
    if(Array.isArray(arrObj)){
        const item = arrObj.find(item => `${item[key]}` === `${vari}`)
        return item ? item[value] : ''
    }
    return arrObj[vari]
}

export default typeMap