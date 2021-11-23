/**
 * @method 驼峰命名
 * @param {String,String} 
 * @desc 字符串，标识
 * @returns {String}
 */
const hump = (name,split = '-') => {
    const enReg = /[A-Z]/
    let boo = enReg.test(name) //判断传入是大驼峰还是已转好的
    let newList = name.split('') //切割成数组
    
    if(!boo){
        newList[0] = String(newList[0]).toLocaleUpperCase()
    }

    for(let i=0; i<newList.length; i++){
        // 大驼峰 => 拼接
        if(boo){
            if(enReg.test(newList[i])){
                i !== 0 ? newList[i] = split + String(newList[i]).toLocaleLowerCase()
                        : newList[i] = String(newList[i]).toLocaleLowerCase()
            }
        }
        // 拼接 => 大驼峰
        else{
            if(newList[i] === split){
                newList[i] = ''
                if(i !== newList.length - 1){
                    newList[i+1] = String(newList[i+1]).toLocaleUpperCase()
                }
            }
        }
        
    }
    
    return newList.join('')
}

export default hump
