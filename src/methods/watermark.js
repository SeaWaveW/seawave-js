/**
 * @method 生成水印
 * @param {Object} 
 * @desc  配置对象
 *     {
 *       text: 'seawave', // 内容
 *       family: '微软雅黑', // 字体
 *       color: 'rgba(0,0,0,0.10)', // 颜色
 *           or [
 *                 [0,'magenta'],[0.5,'blue'],[1,'red']
 *             ]
 *       size: 22, // 字号
 *       density: 0.5, // 密度
 *       vessel:[
 *          '.sw-watermark', // 显示区域
 *       ]
 *     }
 * @returns {Number}
 */
 const createWatermark = (config) => {
    const {text,family,color,size,density} = config
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    let width = context.measureText(text).width
    width = Math.ceil( Math.sqrt(2*width**2) ) * (density+1)
    canvas.width = width
    canvas.height = size
    context.font = `${size}px ${family}`
    context.textBaseline = 'middle'
    context.fillText(text,0,size/2)
    width = context.measureText(text).width
    width = Math.ceil( Math.sqrt(2*width**2) ) * (density+1)
    canvas.width = width
    canvas.height = width
    if(Array.isArray(color)){
        const gradient = context.createLinearGradient(0,0,canvas.width,0);
        color.forEach(arr => {
            gradient.addColorStop(`${arr[0]}`,`${arr[1]}`);
        })
        context.fillStyle = gradient
    }else{
        context.fillStyle = color
    }
    context.font = `${size}px ${family}`
    context.textBaseline = 'middle'
    context.rotate( (-45 * Math.PI) / 180)
    context.fillText(text,-width/2,width/2 + size*2)
    context.fillText(text,-size,-size/2)
    return canvas.toDataURL('image/png')
}
const setWatermark = (config) => {
    const {density} = config
    config.density = density >= 0 && density <=1 ? density : 1
    if(config.dom){
        config.dom.style.backgroundImage = `url('${createWatermark(config)}')`
    }else{
        const style = document.createElement('style')
        style.setAttribute('type','text/css')
        const styleList = []
        config.vessel.forEach(item => {
            styleList.push(`${item}:after`)
        })
        const boxStyle = `${config.vessel.join(',')}{
            position: relative;
        }`
        const afterStyle = `${styleList.join(',')}{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index:-1;
            background-image: url('${createWatermark(config)}')
        }`
        style.innerHTML += (boxStyle + '\n' + afterStyle)  
        document.querySelector('head').appendChild(style)
    }
}

/**
 * @method 水印方法
 * @param {Object} 
 * @desc  配置对象
 * @returns {Number}
 */
const watermark = (config = {}) => {
    const newConfig = Object.assign({
        text: 'seawave',
        family: '微软雅黑',
        // color: [
        //     [0,'magenta'],[0.5,'blue'],[1,'red']
        // ],
        color: 'rgba(0,0,0,0.10)',
        size: 20,
        density: 0.15,
        vessel: [
            '.sw-watermark'
        ] 
    },config)
    return setWatermark(newConfig)
}

export default watermark