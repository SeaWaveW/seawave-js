/**
 * @method 获取最大/最小值
 * @param {Array,String/Boolean,Boolean} 
 * @desc 数组，获取最大还是最小/字段名，获取最大还是最小(当第二个参数为变量时才生效)
 * @returns {Number}
 */
const maixn = (arr,vari,xn) => {
    const boo = typeof vari === 'string' 
            ? typeof xn === 'boolean'
                ? xn
                : true
            : typeof vari === 'boolean'
                ? vari
                : true

    if(typeof vari === 'string'){
        const newArr = arr.map(item => item[vari])
        return boo ? Math.max.apply(null,newArr) : Math.min.apply(null,newArr)
    }else{
        return boo ? Math.max.apply(null,arr) : Math.min.apply(null,arr)
    }
}

export default maixn