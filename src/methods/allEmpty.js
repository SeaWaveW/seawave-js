const allEmpty = function (oldObj) {
    let extent = Object.keys(oldObj).length
    let newObj = Array.isArray(oldObj) ? [] : {}
    for (let key in oldObj) {
        // 当为字符串时
        if (typeof oldObj[key] === 'string' && oldObj[key].trim() === '') {
            extent--
        }
        // 当为引用数据类型时
        else if (typeof oldObj[key] === 'object') {
            newObj[key] = allEmpty(oldObj[key])
            if (typeof newObj[key] === 'boolean' && newObj[key]) {
                extent--
            }
        }
    }
    return !Boolean(extent)
}

export default allEmpty