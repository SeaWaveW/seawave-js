import isIE from "./isIE";
import {isDom} from "./dom";
/**
 * @method 非ie打印入口
 * @param {Document,Object}
 * @desc  元素，配置
 */
const notIEinit = (dom,options) =>{
    // 获取所有样式与打印元素的html
    // const ActiveXObject = `<object id="ActiveXObject" class="no-print" TYPE="application/x-itst-activex" ALIGN="baseline" BORDER="0" WIDTH="0" HEIGHT="0" clsid="{7D3E53BF-7AF9-4868-8163-59854D3062E2}" progid="Resources/TestDataValidationTool.cab"></object>`
    const content = getStyle(options) + getHtml(dom) 
    // setPageStyle(options)
    // 生成iframe
    writeIframe(content,options);
}
/**
 * @method ie打印入口
 * @param {Document,Object}
 * @desc  元素，配置
 */
 const yesIEinit = (dom,options) =>{
    // setPageStyle(options)
    const innerHTML = getStyle(options) + getHtml(dom)
    const ieWindow = window.open()
    ieWindow.document.write(innerHTML)
    ieWindow.location.reload()
    ieWindow.focus()
    ieWindow.print()
    ieWindow.close()
}
/**
 * @method 获取样式内容
 * @param {Object}
 * @desc  配置
 */
const getStyle = (options) => {
    let styleStr = ""
    // 获取所有样式
    let styleList = document.querySelectorAll('style,link');
    for (let i = 0; i < styleList.length; i++) {
        styleStr += styleList[i].outerHTML;
    }
    // 打印时隐藏
    const noPrintList = Array.isArray(options.noPrint) ? options.noPrint : [options.noPrint]
    // 打印时不截断
    const avoidList = Array.isArray(options.avoid) ? options.avoid : [options.avoid]
    // 添加基本样式
    styleStr += `<style type="text/css">
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    *::after {
                        content: '';
                        display: block;
                        clear: both;
                    }
                    html,body{
                        height: auto;
                        font-size: 12px;
                    }
                    .text-break {
                        word-break: break-all;
                        word-wrap: break-word;
                    }
                    @media print {
                        .no-print,${noPrintList.join(',')}{
                            display: none;
                        }
                        ${avoidList.join(',')} {
                            page-break-after: avoid;
                        }
                        .always {
                            page-break-after: always;
                            height: 0;
                            overflow: hidden;
                        }
                    }
                </style>`
    // 添加打印时样式
    if(options.style){
        styleStr += options.style.indexOf('<style') === 0
               ? options.style
               : `<style type="text/css">${options.style}</style>`
    }
    return styleStr;
}
/**
 * @method 获取打印元素内容
 * @param {Document}
 * @desc  元素
 */
const getHtml = (dom) => {
    let inputs = document.querySelectorAll('input');
    let textareas = document.querySelectorAll('textarea');
    let selects = document.querySelectorAll('select');
    
    const inputsKeys = Object.keys(inputs)
    inputsKeys.forEach(key => {
        if( ['checkbox','radio'].includes(inputs[key].type) ){
            inputs[key].checked ? inputs[key].setAttribute('checked', "checked") : inputs[key].removeAttribute('checked')
        }else if( ['text'].includes(inputs[key].type) ){
            inputs[key].setAttribute('value', inputs[key].value)
        }
    })
    const textareasKeys = Object.keys(textareas)
    textareasKeys.forEach(key => {
        if( ['textarea'].includes(textareas[key].type) ){
            textareas[key].innerHTML = textareas[key].value
        }
    })
    const selectsKeys = Object.keys(selects)
    selectsKeys.forEach(key => {
        if( ['select-one'].includes(selects[key].type) ){
            let child = selects[key].children;
            const childKeys = Object.keys(child)
            childKeys.forEach(ckey => {
                if( ['OPTION'].includes(child[ckey].tagName) ){
                    child[ckey].selected ? child[ckey].setAttribute('selected', "selected") : child[ckey].removeAttribute('selected')
                }
            })
        }
    })
    return dom.outerHTML;
}
/**
 * @method 打印
 * @param { htmlStr , configObj}
 * @desc  元素内容，配置对象
 */
const writeIframe = (content,options) => {
    let iframe = document.createElement('iframe')
    let ifr = document.body.appendChild(iframe)

    iframe.id = "sw-print_iframe";
    iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
    let win = ifr.contentWindow || ifr.contentDocument;
    let doc = ifr.contentDocument || ifr.contentWindow.document;
    doc.open();
    doc.write(content);
    doc.close();
    // 调用最终打印
    toPrint(win,options, function () {
      document.body.removeChild(iframe)
    });
}
/**
 * @method 最终打印
 * @param { htmlStr , configObj}
 * @desc  元素内容，配置对象
 */
const toPrint = (win,options, callBack) =>{
    win.onload = () => {
      try {
        setTimeout(() => {
          win.focus();
          typeof options.onStart === 'function' && options.onStart();
          if (!win.document.execCommand('print', false, null)) {
            win.print();
          }
          typeof options.onEnd === 'function' && options.onEnd();
          win.close();
          callBack && callBack()
        });
      } catch (err) {
        console.log('err', err);
      }
    }
}
/**
 * @method 设置打印页样式
 * @param { configObj }
 * @desc  配置对象
 */
const setPageStyle = (options) => {
    try {
        // 自定义页眉/页脚、页边距，要用到ActiveX控件（在ie的安全设置的启用），会修改注册表中ie的设置，代码如下。
        const pageKeys = Object.keys(options.config)
        if(!pageKeys.length) return;

        const hkey_root = 'HKEY_CURRENT_USER'
        const hkey_path = '\\Software\\Microsoft\\Internet Explorer\\PageSetup\\'
        const RegWsh = new ActiveXObject("WScript.Shell")
        let hkey_key = ''
        pageKeys.forEach(key => {
            if( ['top','right','bottom','left'].includes(key) ){
                hkey_key = `margin_${key}`
                options.config[key] = `${ options.config[key] * 0.6 }`
            }else{
                hkey_key = key
            }
            RegWsh.RegWrite( hkey_root + hkey_path + hkey_key , `${ options.config[key] }`);
        })
    } catch(e) {
        console.error('e',e)
    }
}
/**
 * @method 打印入口
 * @param {String/Document,Object}
 * @desc  元素名/元素，配置
 */
const print = (dom,option) => {
    // 配置拷贝
    const options = Object.assign({
        noPrint: ['.noPrint'], // 打印时隐藏
        avoid: '.avoid', // 打印时不截断
        style:``, // 打印时样式
        config:{ // page样式
            font: 'font-size: 12px; font-family: 黑体; line-height: 24px; text-align: center;',
            header: 'seawave',
            footer: '&b &p / &P',
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        },
        onStart: function () { }, // 打印前方法
        onEnd: function () { }, // 打印后方法
    }, option);
    // 判断是否为dom节点
    const newDom = isDom(dom) ? dom : document.querySelector(dom)
    // 是否为ie浏览器
    options.isIE = isIE()
    // 入口
    options.isIE ? yesIEinit(newDom,options) : notIEinit(newDom,options)
}

export default print