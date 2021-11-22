/**
 * @method 小数点补全
 * @param {Number/String,Number}
 * @desc  数值，需要补多少个
 * @returns {String}
 */
    const mendZero = (val,num,) => {
    for(let i=0; i<num; i++){
        val += '0'
    }
    console.error('小数',val,num)
    return val
}

/**
 * @method 相加函数
 * @param {Number/String,Number/String}
 * @desc  数值1，数值2
 * @returns {String}
 */
const sum = (n1,n2) => {
    const numList = []
    const num1 = n1.toString().split('.')
    let num1_0 = num1[0] && num1[0].length ? num1[0] : []
    let num1_1 = num1[1] && num1[1].length ? num1[1] : []

    const num2 = n2.toString().split('.')
    let num2_0 = num2[0] && num2[0].length ? num2[0] : []
    let num2_1 = num2[1] && num2[1].length ? num2[1] : []
    // 补全阶段
    if(num1.length > 1 && num2.length > 1){
        if(num1_1.length > num2_1.length){
            num2_1 = mendZero(num2_1,num1_1.length - num2_1.length)
        }else if(num2_1.length > num1_1.length){
            num1_1 = mendZero(num1_1,num2_1.length - num1_1.length)
        }
    }else if(num1.length > 1 || num2.length > 1){
        if(num1_1.length){
            num2_1 = mendZero('',num1_1.length)
        }else if(num2_1.length){
            num1_1 = mendZero('',num2_1.length)
        }
    }
    // 相加阶段
    // 定义整数是否需要加1 （当小数点相加大于等于1时，那么整数就需要加1）
    let enter = false
    // 先进行小数相加
    const decBoo = (num1_1 && num1_1.length) || (num2_1 && num2_1.length) 
    if(decBoo){
        const leng = num1_1 && num1_1.length ? num1_1.length : num2_1.length
        // 定义接收数组
        const num_2 = []
        // 是否前一位需要加1 （例如：当 第2位相加大于等于10时，那么第一位就需要加1）
        let num_1_2 = false
        for(let i=leng-1; i>=0; i--){
            // 将两数相加
            let sum_num = Number(num1_1[i]) + Number(num2_1[i])
            // 若后一位相加大于等于10时，那么本次需要加1
            if(num_1_2){
                sum_num += 1
            }
            // 将标识重置
            num_1_2 = false
            // 若相加大于10
            if(sum_num >= 10){
                // 那么需要减10
                sum_num -= 10
                // 当为第1位相加时，那么需要通知整数要加1，否则就为下一次相加需要加一
                if(i === 0){
                    enter = true
                }else{
                    num_1_2 = true
                }
            }
            // 赋予对应位置
            num_2[i] = sum_num
        }
        // 最后拼接赋值
        numList[1] = num_2.join('')
    }
    // 再进行整数相加
    let num_1 = Number(num1_0) + Number(num2_0)
    // 若小数大于等于1，那么整数需要加1
    if(enter){
        num_1 += 1
    }
    // 最后赋值
    numList[0] = num_1.toString()
    return numList.join('.')
    
}

export default sum