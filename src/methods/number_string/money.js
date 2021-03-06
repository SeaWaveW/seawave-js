// 汉字的数字
const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
// 基本单位
const cnIntRadice = ['拾', '佰', '仟']
// 对应整数部分扩展单位
const cnIntUnits = ['万', '亿', '兆']
// 对应小数部分单位
const cnDecUnits = ['角', '分', '毫', '厘']
// 整数金额时后面跟的字符
const cnInteger = '整'
// 整型完以后的单位
const cnIntLast = '元'
// 完整的中文数组
const zhArr = [...cnNums,...cnIntRadice,...cnIntUnits,...cnDecUnits,...cnInteger,...cnIntLast]

/**
 * @method 金额按千分符分割
 * @param {String/Number,String} 
 * @desc  数值，头部符号
 * @returns {String}
 */
const thousandSeparator = (val,symbol = '') => {
    if (!val && val !== 0) return
    let parts = Number(val).toFixed(2).toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `${symbol}${parts.join('.')}`
}
/**
 * @method 千分符转金额
 * @param {String} 
 * @desc  数值
 * @returns {String}
 */
 const thousandSeparatorReversal = (money) => {
  if (!money && money !== 0) return
  return money.replace(/\_/g,'').replace(/\./g,'_').replace(/[\u0391-\uFFE5]/g,'').replace(/\W/g,'').replace(/[a-zA-Z]/g,'').replace(/\_/g,'.')
}
/**
 * @method 金额转中文
 * @param {String/Number} 
 * @desc  数值
 * @returns {String}
 */
const digitUp = (money) => {
    const CnIntRadice = [...[''],...cnIntRadice]
    console.error('CnIntRadice',CnIntRadice)
    const CnIntUnits = [...[''],...cnIntUnits]
    console.error('CnIntUnits',CnIntUnits)
    // 最大处理的数字
    let maxNum = 999999999999999.9999
    // 金额整数部分
    let integerNum
    // 金额小数部分
    let decimalNum
    // 输出的中文金额字符串
    let chineseStr = ''
    // 分离金额后用的数组，预定义
    let parts = null;
    if (money === '') { return '' }
    money = parseFloat(money)
    if (money >= maxNum) {
      // 超出最大处理数字
      return ''
    }
    if (money === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger
      return chineseStr
    }
    // 转换为字符串
    money = money.toString()
    if (money.indexOf('.') === -1) {
      integerNum = money
      decimalNum = ''
    } else {
      parts = money.split('.')
      integerNum = parts[0]
      decimalNum = parts[1].substr(0, 4)
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0
      let IntLen = integerNum.length
      for (let i = 0; i < IntLen; i++) {
        let n = integerNum.substr(i, 1)
        let p = IntLen - i - 1
        let q = p / 4
        let m = p % 4
        if (n === '0') {
          zeroCount++
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0]
          }
          // 归零
          zeroCount = 0
          chineseStr += cnNums[parseInt(n)] + CnIntRadice[m]
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += CnIntUnits[q]
        }
      }
      chineseStr += cnIntLast
    }
    // 小数部分
    if (decimalNum !== '') {
      let decLen = decimalNum.length
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substr(i, 1)
        if (n !== '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i]
        }
      }
    }
    if (chineseStr === '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger
    } else if (decimalNum === '') {
      chineseStr += cnInteger
    }
    return chineseStr
}
/**
 * @method 中文转
 * @param {String} 
 * @desc  数值
 * @returns {String}
 */
const digitLo = (money) => {
  return money
}
/**
 * @method 金额方法
 * @param {String/Number,String/false} 
 * @desc  数值，符号(为false时转金额)
 * @returns {String}
 */
export default (val,symbol = '') => {
    if(typeof symbol === 'boolean' && !symbol){
      const newVal = `${val}`
      let boo = false
      for(let i=0; i<newVal.length; i++){
        if(boo) break;
        boo = zhArr.includes(newVal[i])
      }
      return boo ? digitLo(val) : thousandSeparatorReversal(val)
    }else if(['ZH','CN','CNY'].includes(symbol.toUpperCase())){
      return digitUp(val)
    }else {
      return thousandSeparator(val,symbol)
    }
}