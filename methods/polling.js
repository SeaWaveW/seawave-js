let container = null //轮询容器
let sucFuc = null // sucFuc:成功时的函数 
let errFuc = null // errFuc：失败时的函数
let endFlag = null // endFlag：成功或失败时是否清空轮询
let time = null //执行间隔
let count = null //执行次数

function start() {
    container = window.setInterval(() => {
        if(count <= 0){
            end()
        }
        count --

    },time)
}

const end = function () {
    window.clearInterval(container)
    container = null
    sucFuc = null
    errFuc = null
    endFlag = null
}

const polling = function ( suc,err,ms,sum,boo ) {
    sucFuc = typeof(suc) === 'function' ? suc : null
    errFuc = typeof(err) === 'function' ? err : null
    time = typeof(ms) === 'number' ? ms : 1000
    count = typeof(sum) === 'number' ? sum : 0
    endFlag = typeof(boo) === 'boolean' ? boo : true
    start()
}





export default polling