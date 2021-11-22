// /**
//  * @method 对象是否全空
//  * @param {object}
//  * @returns {object}
//  */
// function allEmpty (oldObj) {
//     let extent = Object.keys(oldObj).length
//     let newObj = Array.isArray(oldObj) ? [] : {}
//     for (let key in oldObj) {
//         // 当为字符串时
//         if (typeof oldObj[key] === 'string' && oldObj[key].trim() === '') {
//             extent--
//         }
//         // 当为引用数据类型时
//         else if (typeof oldObj[key] === 'object') {
//             newObj[key] = allEmpty(oldObj[key])
//             if (typeof newObj[key] === 'boolean' && newObj[key]) {
//                 extent--
//             }
//         }
//     }
//     return !Boolean(extent)
// }

// export default allEmpty
/**
 * @method 是否为空
 * @param {Will}
 * @desc  任意类型
 * @returns {Boolean}
 */
const isNull = (val) => {
    let boo = false
    const booList = []
    const nullList = ['undefined','null','NaN']
    const newVal = `${val}`
    if(nullList.includes(newVal)){
        boo = true
    }if(typeof val === 'string'){
        boo = !val.trim().length
    }else if(typeof val === 'number'){
        boo = !val && val !== 0
    }else if(Array.isArray(val)){
        if(val.length){
            val.forEach(item => {
                booList.push( isNull(item) )
            })
            boo = !Boolean( booList.filter(item => item).lengath )
        }else{
            boo = true
        }
    }else if(typeof val === 'object'){
        const keys = Object.keys(val)
        if(keys.length){
            keys.forEach(key => {
                booList.push( isNull(val[key]) )
            })
            boo = !Boolean( booList.filter(item => item).lengath )
        }else{
            boo = true
        }
    }
    return boo
}

export default isNull