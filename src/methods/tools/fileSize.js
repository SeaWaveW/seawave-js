/**
 * @method 文件大小
 * @param { size, suffix, toFixed } 
 * @desc  值，是否转带单位, 当为转单位时（此参数才生效）
 * @returns { String }
 */
const suffixKeys = [ 'B','KB','MB','GB','TP','PB','EB','ZB','YB','BB','NB','DB','CB','XB']
const sizeStart = 1024;
const suffixList = []
suffixKeys.forEach((item,index) => {
    suffixList.push({
        suffix: item,
        size: index === 0 ? sizeStart : suffixList[index -1].size * sizeStart
    })
})

const fileSize = ( size, suffix = true, tf=2 ) => {
    if(suffix){
        if(/[^\d]/g.test(`${size}`)) throw new Error(`请传入正确的文件大小!`)
        for( let i=0; i<suffixList.length; i++ ){
            const newSize = Number(size)
            if( newSize < suffixList[i].size ){
                const index = i === 0 ? i : i - 1
                size = `${ newSize / suffixList[index].size }`
                suffix = suffixList[index].suffix
                break
            }
        }
        return `${size.indexOf('.') >=0 ? Number(size).toFixed(tf) : size}${suffix}`
    }else {
        size += ''
        const sizeSuffix = size.replace(/[^a-zA-Z]/g,'')
        const suffixItem = suffixList.find(item => item.suffix.toUpperCase() === sizeSuffix.toUpperCase())
        if(!suffixItem) throw new Error(`请传入正确的文件大小格式!`)
        return Number( size.replace(/[^\d]/g,'') ) * suffixItem.size
    }
}
// console.warn( fileSize(1555555) )
export default fileSize