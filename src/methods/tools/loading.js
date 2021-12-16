let loadingSum = 0

const createLoading = (options) => {
    // 设置父容器
    const parent = document.querySelector(options.el)
    const parentPosition = parent.style.position
    if( !['fixed','relative','absolute',].includes(parentPosition) ) {
        parent.style.position = 'relative'
    }
    const parentHeight = parent.clientHeight
    // 设置子容器
    const child = document.createElement('div')
    const id = `sw-loading_${loadingSum}`
    child.id = id
    // 设置中心容器
    const box = document.createElement('div')
    const boxId = `sw-loading_${loadingSum}-box`
    box.id = boxId
    box.innerHTML = `<i class="${options.icon}"></i>
            <div>${options.text}</div>`
    // 获取高度操作
    const fixed = document.createElement('div')
    fixed.style.zIndex = -99999
    fixed.style.position = 'fixed'
    fixed.style.opacity = 0
    fixed.appendChild(box)
    document.body.appendChild(fixed)
    const boxHeight = document.getElementById(boxId).clientHeight
    document.body.removeChild(fixed)
    // 设置样式
    child.innerHTML = `
                <style type="text/css">
                    #${id} {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        background: ${options.background};
                        color: ${options.color};
                    }
                    #${id} #${boxId} {
                        position: absolute;
                        top: 50%;
                        margin-top: -${boxHeight / 2}px;
                        left: 0;
                        width: 100%;
                    }
                </style>

              `
    child.appendChild(box)
    // 序号递增
    loadingSum++
    return {
        id,
        parent,
        child,
        start: function (){
            const dom = document.getElementById(this.id)
            if(dom){
               this.close() 
            }
            this.parent.appendChild(child)
        },
        close: function () {
            this.parent.removeChild(child)
        }
    }
}

const loading = ( option ) => {
    const options = Object.assign({
        el: `body`,
        background: `rgba(0,0,0,0.7)`,
        color: `#e9c571`,
        icon: ``,
        text: `加载中`
    }, option)

    return createLoading(options)
}

export default loading