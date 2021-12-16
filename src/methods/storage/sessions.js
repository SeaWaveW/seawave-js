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
const sessions = {
    get: (key) => {
        //当传入的值为number类型时
        if( typeof key === "number" ){
            const slength = Object.keys(sessionStorage);
            let arr = new Array();
            for(let i=0; i<slength.length; i++){
                let keys = Object.keys(sessionStorage)[i];
                let values = sessionStorage.getItem(keys);
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
            return JSON.parse(sessionStorage.getItem(key))
        }catch(e){
            return sessionStorage.getItem(key)
        }
    },
    set: (key,value) => {
        if(Object.prototype.toString.call(value) && typeof value === "object"){
            return  sessionStorage.setItem(key,JSON.stringify(value))
        }
        return sessionStorage.setItem(key,value)
    },
    remove: (key) => {
        sessionStorage.removeItem(key);
    },
    clear: () => {
        sessionStorage.clear();
    },
    // lengths:( () => {
    //     const arr = Object.keys(sessionStorage);
    //     return Array.isArray(arr) ? arr.length : 0
    // } )(),
    each:(callback)=>{
        let arr = new Array();
        for(let i=0; i<stroage.session.length; i++){
            let key = Object.keys(sessionStorage)[i];
            let value = stroage.session.get(key);
            arr[i] = {
                key,value
            } 
        }
        return arr.forEach( (item,index) =>{
            callback(item,index);
        })
    }
}

export default sessions