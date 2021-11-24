/**
 * @method 计算执行过程所需毫秒数
 * @param {Function} 
 * @desc  执行函数
 * @returns {Number}
 */
const exTime = (exFun) => {
    const start = new Date().getTime();
    if(typeof exFun === 'function'){
        exFun()
    }
    const end = new Date().getTime();
    return end - start
}

export default exTime