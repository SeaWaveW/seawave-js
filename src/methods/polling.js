let containerList = [] //轮询容器列表
/**
 * @method 轮询启动
 * @param {String,Number,Number,Function} 
 * @desc 当前轮询名称，执行间隔，执行次数，执行方法
 * @returns {String}
 */
const start =  ( name,time,count,fc ) => {
    let item = {
        name,
        time, //执行间隔
        count, //执行次数
        fc, //执行轮询并行的方法
        timer:null
    }
    item.timer = window.setInterval(() => {
        count --
        console.log(name)
        if(count <= 0){
            end(name)
        }
        if(typeof(item.fc) === 'function'){
            item.fc()
        }
    },time)
    //添加进轮询数组
    containerList.push(item)
}
/**
 * @method 轮询关闭
 * @param {String} 
 * @desc 需要关闭轮询名称
 */
const end = ( name ) => {
    // 查找下标
    let index = containerList.findIndex(item => item.name === name)
    if(index < 0) { return }
    // 清空轮询
    window.clearInterval(containerList[index].timer)
    // 将其从轮询列表中移除
    containerList.splice(index,1)
    console.log('清除该轮询',name,containerList)
}

const polling = {
    start,
    end
}

/* 使用案例
        polling.start('测试',1000,10)
        polling.start('测试2',1000,2,() => {
            setTimeout(() => {
                polling.end('测试')
            },0)
        })
*/

module.exports = polling