const sort = (list,flag) => {
    let boo = typeof(flag) === 'boolean' ? flag : true
    return list.sort((min,max) => {
        return boo ? min-max : max-min
    })
}

export default sort