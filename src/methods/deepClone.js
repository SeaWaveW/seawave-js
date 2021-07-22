const deepClone = function ( cloneObject ){
    let cloning = null
    cloning = JSON.parse(JSON.stringify(cloneObject))
    try{}catch(e){
        // ①判断传进来的是 数组 还是 对象
        cloning = Array.isArray( cloneObject ) ? [] : {};
        // ②判断是否是对象
        if( cloneObject && typeof cloneObject === "object" ){
            // ③使用for in 进行循环
            for( let key in cloneObject ){
                // ④①判断是否为 object 类型
                if(typeof cloneObject[key] === "object"){
                    cloning[key] = deepClone(cloneObject[key]);
                }
                // ④②判断是否为函数
                else if( typeof cloneObject[key] === "function" ){
                    cloning[key] = cloneObject[key].bind(null);
                }
                // ④③否则直接赋予
                else{
                    cloning[key] = cloneObject[key];
                }
            }
        }
    }
    // ⑤最后返回
    return cloning
    
   
}

export default deepClone

// let 新对象或新数组的名字 = deepClone( 所需要深度拷贝的对象或数组 )