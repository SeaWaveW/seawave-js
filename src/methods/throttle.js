const throttle = function ( incident, time = 1000 ){
    // 1.定义节流函数的钥匙
    let throttleKey = true;
    // 2.通过闭包保存钥匙，并返回下方函数
    return function(){
        // 3.判断是否允许通过
        //     false直接return掉，不继续往下走
        if(!throttleKey){ return }
        //     true时继续往下走
        // 4.先把钥匙设为false，以防重复点击时发送多次请求
        throttleKey = false;
        // 5.发送请求
        incident.call(this,arguments);
        // 6.执行延时定时器（不清除）,只等规定时间后才能再次点击发送请求
        setTimeout( _ => { throttleKey = true } , time );
    }
}

export default throttle

// btn.onclick = throttle(ff,2000)