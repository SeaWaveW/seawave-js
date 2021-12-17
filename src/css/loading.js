export const createChild = (id,boxId,boxHeight,options) => {
    return `
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
}

export const createIcon = (loadingSum,options) => {
    const iconClass = `sw-loading_${loadingSum}-box_icon`
    return options.icon
        ? `<i class="${options.icon}"></i>`
        : `<i class="${iconClass}">
            <style type="text/css">
                .${iconClass}{
                    position: relative;
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    animation: ${iconClass}-animation 0.9s linear infinite;
                    -webkit-animation: ${iconClass}-animation 0.9s linear infinite;
                    -moz-animation: ${iconClass}-animation 0.9s linear infinite;
                    -ms-animation: ${iconClass}-animation 0.9s linear infinite;
                    -o-animation: ${iconClass}-animation 0.9s linear infinite;
                }
                .${iconClass}::after{
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    border-radius: 50%;
                    border-top: 2.5px solid ${options.color};
                    border-right: 2.5px solid ${options.color};
                    box-sizing: border-box;
                }
                @keyframes ${iconClass}-animation {
                    0%{
                        transform: rotate(0deg);
                    }
                    100%{
                        transform: rotate(360deg);
                    }
                }
                @-webkit-keyframes ${iconClass}-animation {
                    0%{
                        -webkit-transform: rotate(0deg);
                    }
                    100%{
                        -webkit-transform: rotate(360deg);
                    }
                }
                @-moz-keyframes ${iconClass}-animation {
                    0%{
                        -moz-transform: rotate(0deg);
                    }
                    100%{
                        -moz-transform: rotate(360deg);
                    }
                }
                @-ms-keyframes ${iconClass}-animation {
                    0%{
                        -ms-transform: rotate(0deg);
                    }
                    100%{
                        -ms-transform: rotate(360deg);
                    }
                }
                @-o-keyframes ${iconClass}-animation {
                    0%{
                        -o-transform: rotate(0deg);
                    }
                    100%{
                        -o-transform: rotate(360deg);
                    }
                }
                
            </style>
        </i>`  
}