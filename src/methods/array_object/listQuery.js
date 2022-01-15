/**
 * @method 列表查询
 * @param { data,page,size,config } 
 * @desc  数据集，页数，大小，返回字段配置
 * @returns {
 *          data: Array,
 *          page: Number,
 *          size: Number
 *          total: Number 
 *       }
 */
function listQuery ( list = [], page = 1, size = 10, config = {} ){
    config = Object.assign({
        data: 'data',
        page: 'page',
        size: 'size',
        total: 'total',
        over: true // 是否页数溢出报错
    },config)
    if(config.over && page > Math.ceil(list.length / size)){
        throw new Error(`当前页数大于实际数据分页！`)
    }
    return {
        [config.total]: list.length,
        [config.data]: list.slice( (page-1) * size, page * size ),
        [config.page]: page,
        [config.size]: size,
    }
}

export default listQuery