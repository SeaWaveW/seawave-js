/**
 * @method 获取文字长度
 * @param {String/Object/Array,Object} 
 * @desc  文字/对象/数组，配置（只有当为字符串时才会用）
 * @returns {Number}
 */

const getLength = (val,config) => {
    if(typeof val === 'string'){
        config = Object.assign({
            cn:2, // 中文
            en:1, // 英文
            num:1, // 数字
            str:1, // 特殊字符
            whi:1 // 空格
        },config)
        const list = val.split('')
        const cns = list.filter(char => /[\u0391-\uFFE5]/.test(char))
        const ens = list.filter(char => /[a-zA-Z]/.test(char))
        const nums = list.filter(char => /\d/.test(char))
        const strs = list.filter(char => /\W_/.test(char))
        const whis = list.filter(char => /\s/.test(char))
        const {cn,en,num,str,whi} = config
        return (cns.length * cn) + (ens.length * en) + (nums.length * num) + (strs.length * str) + (whis.length * whi)
    }else if(typeof val === 'object'){
        if(Array.isArray(val)){
            return val.length
        }else{
            const keys = Object.keys(val)
            return keys.length
        }
    }
    
}

export default getLength