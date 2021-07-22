const enReg = /[A-Z]/
const hump = (name) => {
    let boo = enReg.test(name) //判断传入是大驼峰还是已转好的
    let newList = name.split('') //切割成数组
    
    if(!boo){
        newList[0] = String(newList[0]).toLocaleUpperCase()
    }

    for(let i=0; i<newList.length; i++){
        // 大驼峰 => 拼接
        if(boo){
            if(enReg.test(newList[i])){
                i !== 0 ? newList[i] = '-' + String(newList[i]).toLocaleLowerCase()
                        : newList[i] = String(newList[i]).toLocaleLowerCase()
            }
        }
        // 拼接 => 大驼峰
        else{
            if(newList[i] === '-'){
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