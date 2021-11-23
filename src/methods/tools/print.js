const init = (dom,options) =>{
    const content = getStyle(options) + getHtml(dom);
    writeIframe(content,options);
}
const getStyle = (options) => {
    let str = ""
    let styles = document.querySelectorAll('style,link');
    for (let i = 0; i < styles.length; i++) {
        str += styles[i].outerHTML;
    }
    str += `<style>${options.noPrint ? options.noPrint : '.no-print'}{display:none;}</style>`
    return str;
}

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
const writeIframe = (content,options) => {
    let iframe = document.createElement('iframe')
    let ifr = document.body.appendChild(iframe)

    iframe.id = "myIframe";
    iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
    let win = ifr.contentWindow || ifr.contentDocument;
    let doc = ifr.contentDocument || ifr.contentWindow.document;
    doc.open();
    doc.write(content);
    doc.close();
    toPrint(win,options, function () {
      document.body.removeChild(iframe)
    });
}
const toPrint = (win,options, callBack) =>{
    win.onload = function () {
      try {
        setTimeout(function () {
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
 * @method 打印
 * @param {String/Document,Object}
 * @desc  元素名/元素，配置
 */
const print = (dom,options) => {
    options = Object.assign({
        noPrint: '.no-print',
        onStart: function () { },
        onEnd: function () { }
    }, options);

    if ((typeof dom) === "string") {
        dom = document.querySelector(dom);
    }

    init(dom,options)
    
}

export default print