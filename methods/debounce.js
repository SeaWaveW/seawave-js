const debounce = function (incident,time = 1000){
    // 1.钥匙
    let debounceKey = null;
    // 2.使用闭包保存钥匙，并返回下方函数
    return function(){
        // 3.连续点击时清除上一把钥匙
        clearTimeout(debounceKey);
        // 4.连续点击时重新绑定一个延时定时器
        debounceKey = setTimeout( _ =>{
            // 5.时间间隔大于time时 执行 传进来的函数
            incident.call(this,arguments)
        },time)
    }
}

export default debounce
// btn.onclick = debounce(ff,2000)