/**
 * @type get 
 * @param {string/number} 
 * @desc 键名/下标
 * @type set
 * @param {key,value} 
 * @desc 键名，键值
 * @type remove
 * @param {key}
 * @desc 键名
 * @type clear
 * @desc 清除
 * @type length
 * @desc 长度
 * @type each
 * @param {function(item,index)} 
 * @desc 方法(项，标)
 */
const local = {
    get:(key)=>{
        //当传入的值为number类型时
        if( typeof key === "number" ){
            const llength = localStorage.length
            let arr = new Array()
            for(let i=0; i<llength; i++){
                let keys = localStorage.key(i)
                let values = localStorage.getItem(keys)
                arr[i] = {
                    key:keys,
                    value:values
                }
                if(i == key-1){
                    return arr[i]
                }
            }
        }
        //否则
        try{
            return JSON.parse(localStorage.getItem(key))
        }catch(e){
            return localStorage.getItem(key)
        }
    },
    set:(key,value)=>{
        if(Object.prototype.toString.call(value) && typeof value === "object" ){
            return  localStorage.setItem(key,JSON.stringify(value))
        }
        return localStorage.setItem(key,value)
    },
    remove:(key)=>{
        localStorage.removeItem(key)
    },
    clear:()=>{
        localStorage.clear()
    },
    // lengths:typeof localStorage === 'object' ? localStorage.length : 0,
    each:(callback)=>{
        let arr = new Array()
        for(let i=0; i<stroage.local.length; i++){
            let key = localStorage.key(i)
            let value = localStorage.getItem(key)
            arr[i] = {
              key,value
            }
        }
        return arr.forEach( (item,index)=> {
            callback(item,index)
        })
    },
}

export default local