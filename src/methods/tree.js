/**
     * @method 生成树型结构
     * @param {Array,String,String,String,Array} 
     * @desc  数据树（第一次则为源数据），树构成, 子赖父标识， 为父根据, 源数据
     * @returns {Object}
     */
const createdTree = (list = [], key = 'children', child = 'parentId', parent = 'id',oldList = []) => {
    let parentList = []
    // 若是第一次则进行生成祖宗节点
    if(!oldList.length){
        list.forEach((item,index) => {
            // 若是无依赖标识则为祖宗节点
            if(!item[child]){
                parentList.push({...{},...item})
            }
        })
    }else {
        parentList = list
    }
    // 赋值
    const newList = oldList.length ? oldList : list
    // 进行父级循环
    parentList.forEach(item => {
        // 若数组还有剩余则继续生成子项
        if(newList.length){
            item[key] = createdChildren(newList,item,child,parent)
        }
        // 再次进行判断，是否存在数构成项,若是存在则继续递归生成
        if(item[key] && item[key].length){
            console.warn('再次进入生成树',newList)
            item[key] = createdTree(item[key],key,child,parent,newList)
        }
    })
    // 最后返回
    return parentList
}
/**
 * @method 生成树叶
 * @param {Array,Object,String,String} 
 * @desc  数据树，当前项, 子赖父标识， 为父根据
 * @returns {Object}
 */
const createdChildren = ( list = [], obj = {}, child = 'parentId', parent = 'id')  => {
    const newList = []
    list.forEach((item,index) => {
        if(item[child] === obj[parent]){
            // 添加为子项
            newList.push({
                ...item,
                // 赋予层级关系
                [child]:obj[parent]
            })
        }
    })
    return newList
}


/**
 * @method 获取树型结构中的父亲
 * @param {Array,String,Object,String,String} 
 * @desc  数据树，树构成，当前项,当前项字段，父项字段
 * @returns {Object}
 */
const getTreeParent = (list = [], key = 'children', obj = {}, child = 'parentId', parent = 'id') => {
    const newList = treeFlattening(list,key)
    const newObj = typeof obj === 'object' ? obj : { [child]:obj }
    const item = newList.find(item => item[parent] === newObj[child])
    return item || {}
}
/**
 * @method 树型结构扁平化
 * @param {Array,String} 
 * @desc  数据树，树构成
 * @returns {Object}
 */
 const treeFlattening = (list = [], key = 'children') => {
    let newList = []
    list.forEach(item => {
        if(item[key]){
            newList = [...newList,...treeFlattening(item[key],key)]
        }
        newList = [...newList,...[item]]
    })
    return newList
}

export default {
    createdTree,
    getTreeParent,
    treeFlattening
}