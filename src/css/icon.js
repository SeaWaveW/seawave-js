const iconList = {
    scale: `.sw-icon-scale{display:inline-block;font-size:12px}.sw-icon-scale,.sw-icon-scale::before,.sw-icon-scale::after{background:inherit;width:0.5em;height:2em;-webkit-animation:sw-loading_scale-animation 1s infinite ease-in-out;-moz-animation:sw-loading_scale-animation 1s infinite ease-in-out;-ms-animation:sw-loading_scale-animation 1s infinite ease-in-out;-o-animation:sw-loading_scale-animation 1s infinite ease-in-out;animation:sw-loading_scale-animation 1s infinite ease-in-out}.sw-icon-scale::before,.sw-icon-scale::after{position:absolute;top:0;content:''}.sw-icon-scale{background:#FFF;text-indent:-9999em;position:relative;-webkit-animation-delay:-0.16s;-moz-animation-delay:-0.16s;-ms-animation-delay:-0.16s;-o-animation-delay:-0.16s;animation-delay:-0.16s}.sw-icon-scale::before{left:-0.75em;-webkit-animation-delay:-0.32s;-moz-animation-delay:-0.32s;-ms-animation-delay:-0.32s;-o-animation-delay:-0.32s;animation-delay:-0.32s}.sw-icon-scale::after{left:0.75em}@-webkit-keyframes sw-loading_scale-animation{0%,80%,100%{-webkit-box-shadow:0 0 #FFF;height:1em}40%{-webkit-box-shadow:0 -1em #ffffff;height:1.25em}}@-moz-keyframes sw-loading_scale-animation{0%,80%,100%{-moz-box-shadow:0 0 #FFF;height:1em}40%{-moz-box-shadow:0 -1em #ffffff;height:1.25em}}@-ms-keyframes sw-loading_scale-animation{0%,80%,100%{-ms-box-shadow:0 0 #FFF;height:1em}40%{-ms-box-shadow:0 -1em #ffffff;height:1.25em}}@-o-keyframes sw-loading_scale-animation{0%,80%,100%{-o-box-shadow:0 0 #FFF;height:1em}40%{-o-box-shadow:0 -1em #ffffff;height:1.25em}}@keyframes sw-loading_scale-animation{0%,80%,100%{box-shadow:0 0 #FFF;height:1em}40%{box-shadow:0 -1em #ffffff;height:1.25em}}`,
    success: `.sw-icon_success{display:inline-block;width:20px;height:20px;background-color:#67C23A;border-radius:50%;position:relative}.sw-icon_success::before{content:'';background-color:white;position:absolute;left:25%;top:40%;width:12.5%;height:30%;border-radius:5px 5px 0 5px;-moz-transform:translateX(12.5%) rotate(-45deg);-ms-transform:translateX(12.5%) rotate(-45deg);-o-transform:translateX(12.5%) rotate(-45deg);-webkit-transform:translateX(12.5%) rotate(-45deg);transform:translateX(12.5%) rotate(-45deg)}.sw-icon_success::after{content:'';background-color:white;position:absolute;left:20%;top:30%;width:12.5%;height:50%;border-radius:5px 5px 0 0;-webkit-transform:translate(255%, -10%) rotate(55deg);-moz-transform:translate(255%, -10%) rotate(55deg);-ms-transform:translate(255%, -10%) rotate(55deg);-o-transform:translate(255%, -10%) rotate(55deg);transform:translate(255%, -10%) rotate(55deg)}`,
    warning: `.sw-icon_warning{display:inline-block;width:20px;height:20px;background-color:#E6A23C;border-radius:50%;position:relative}.sw-icon_warning::before{content:'';background-color:white;position:absolute;left:45%;top:22.5%;width:10%;height:40%;border-radius:0 0 25% 25%}.sw-icon_warning::after{content:'';background-color:white;position:absolute;left:45%;top:67.5%;width:10%;height:10%;border-radius:50%}`,
    error: `.sw-icon_error{display:inline-block;width:20px;height:20px;background-color:#F56C6C;border-radius:50%;position:relative}.sw-icon_error::before{content:'';background-color:white;position:absolute;left:40.5%;top:22.5%;width:12.5%;height:50%;border-radius:5px 5px 0 5px;-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sw-icon_error::after{content:'';background-color:white;position:absolute;left:40.5%;top:22.5%;width:12.5%;height:50%;border-radius:5px 5px 0 0;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}`,
    info: `.sw-icon_info{display:inline-block;width:20px;height:20px;background-color:#909399;border-radius:50%;position:relative}.sw-icon_info::before{content:'';background-color:white;position:absolute;left:41%;top:18.5%;width:15%;height:15%;border-radius:50%;box-shadow:-1px 4px 1px white, 1px 9.5px 1px white}.sw-icon_info::after{content:'';background-color:white;position:absolute;left:45%;top:38.5%;width:10%;height:40%;border-radius:0 25% 0 25%}`,
    close: `.sw-icon_close{display:inline-block;width:20px;height:20px;border-radius:50%;position:relative}.sw-icon_close::before{content:'';background-color:#B5B8BF;position:absolute;left:40.5%;top:22.5%;width:12.5%;height:50%;border-radius:5px 5px 0 5px;-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sw-icon_close::after{content:'';background-color:#B5B8BF;position:absolute;left:40.5%;top:22.5%;width:12.5%;height:50%;border-radius:5px 5px 0 0;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}`
}
// export const success = () => {
//     return `<style type="text/css">
//             .sw-icon_success{
//                 display: inline-block;
//                 width: 20px;
//                 height: 20px;
//                 background-color: #67C23A;
//                 border-radius: 50%;
//                 position: relative;
//             }
//             .sw-icon_success::before{
//                 content: '';
//                 background-color: white;
//                 position: absolute;
//                 left: 25%;
//                 top: 40%;
//                 width: 12.5%;
//                 height: 30%;
//                 border-radius: 5px 5px 0 5px;
//                 -moz-transform: translateX(12.5%) rotate(-45deg);
//                 -ms-transform: translateX(12.5%) rotate(-45deg);
//                 -o-transform: translateX(12.5%) rotate(-45deg);
//                 -webkit-transform: translateX(12.5%) rotate(-45deg);
//                 transform: translateX(12.5%) rotate(-45deg);
//             }
//             .sw-icon_success::after{
//                 content: '';
//                 background-color: white;
//                 position: absolute;
//                 left: 20%;
//                 top: 30%;
//                 width: 12.5%;
//                 height: 50%;
//                 border-radius: 5px 5px 0 0;
//                 -webkit-transform: translate(255%,-10%) rotate(55deg);
//                 -moz-transform: translate(255%,-10%) rotate(55deg);
//                 -ms-transform: translate(255%,-10%) rotate(55deg);
//                 -o-transform: translate(255%,-10%) rotate(55deg);
//                 transform: translate(255%,-10%) rotate(55deg);
//             }
//         </style>`
// }
// export const error = (boo) => {
//     const config = {
//         background: boo ? '#F56C6C' : '',
//         color: boo ? 'white' : '#B5B8BF'
//     }
//     return `<style type="text/css">
//             .sw-icon_error{
//                 display: inline-block;
//                 width: 20px;
//                 height: 20px;
//                 background-color: ${config.background};
//                 border-radius: 50%;
//                 position: relative;
//             }
//             .sw-icon_error::before{
//                 content: '';
//                 background-color: ${config.color};
//                 position: absolute;
//                 left: 42.5%;
//                 top: 22.5%;
//                 width: 12.5%;
//                 height: 50%;
//                 border-radius: 5px 5px 0 5px;
//                 -moz-transform: rotate(-45deg);
//                 -ms-transform: rotate(-45deg);
//                 -o-transform: rotate(-45deg);
//                 -webkit-transform: rotate(-45deg);
//                 transform: rotate(-45deg);
//             }
//             .sw-icon_error::after{
//                 content: '';
//                 background-color: ${config.color};
//                 position: absolute;
//                 left: 42.5%;
//                 top: 22.5%;
//                 width: 12.5%;
//                 height: 50%;
//                 border-radius: 5px 5px 0 0;
//                 -webkit-transform: rotate(45deg);
//                 -moz-transform: rotate(45deg);
//                 -ms-transform: rotate(45deg);
//                 -o-transform: rotate(45deg);
//                 transform: rotate(45deg);
//             }
//         </style>`
// }
// export const warning = () => {
//     return `<style type="text/css">
//             .sw-icon_warning{
//                 display: inline-block;
//                 width: 20px;
//                 height: 20px;
//                 background-color: #E6A23C;
//                 border-radius: 50%;
//                 position: relative;
//             }
//             .sw-icon_warning::before{
//                 content: '';
//                 background-color: white;
//                 position: absolute;
//                 left: 45%;
//                 top: 22.5%;
//                 width: 10%;
//                 height: 40%;
//                 border-radius: 0 0 25% 25%;
//             }
//             .sw-icon_warning::after{
//                 content: '';
//                 background-color: white;
//                 position: absolute;
//                 left: 45%;
//                 top: 67.5%;
//                 width: 10%;
//                 height: 10%;
//                 border-radius: 50%;
//             }
//         </style>`
// }
// export const info = (size = 20) => {
//     return `<style type="text/css">
//             .sw-icon_info{
//                 display: inline-block;
//                 width: ${size}px;
//                 height: ${size}px;
//                 background-color: #909399;
//                 border-radius: 50%;
//                 position: relative;
//             }
//             .sw-icon_info::before{
//                 content: '';
//                 background-color: white;
//                 position: absolute;
//                 left: 41%;
//                 top: 18.5%;
//                 width: 15%;
//                 height: 15%;
//                 border-radius: 50%;
//                 box-shadow: -${size / 20}px 4px 1px white, ${size / 20}px ${size / 2.1052631578947367}px 1px white;
//             }
//             .sw-icon_info::after{
//                 content: '';
//                 background-color: white;
//                 position: absolute;
//                 left: 45%;
//                 top: 38.5%;
//                 width: 10%;
//                 height: 40%;
//                 border-radius: 0 25% 0 25%;
//             }
//         </style>`
// }
// export const scale = () => {
// }

window.onload = () => {
    const iconKeys = Object.keys(iconList)
    let styleContent = `<style type="text/css">`
    iconKeys.forEack(key => {
        styleContent += iconList[key]
    })
    styleContent += `</style>`
    document.head.innerHTML += styleContent
}