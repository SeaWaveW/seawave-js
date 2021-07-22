const request = null
/*
 url : 指的是请求地址
 parmas:{
    fileName: 指的是文件下载名
    fileUrl: 指的是文件的下载链接
 }
 type:   ① 1 指的是下载 ②其他任意值 则 返回blod类型，通过.then得到url，用于显示
 method: 指的是请求方式
*/

const download = (url, params = {}, type, method = 'get') => {
  return new Promise((resolve) => {
    let option1 = {}
    let option2 = {}
    if (method === 'get') {
      option1 = {
        params: params,
        responseType: 'blob'
      }
    } else {
      option1 = params
      option2 = {
        responseType: 'blob'
      }
    }
    request[method](url, option1, option2).then(res => {
      if (res && res.data && res.data.size && res.data.type !== 'application/json') {
        if (type === 1) {
          // 下载
          let content = res.data
          let blob = new Blob([content])
          let fileName = params.fileName || decodeURIComponent(res.headers['content-disposition'].split('filename*=')[1].split("''")[1])
          if ('download' in document.createElement('a')) {
            // 非IE下载
            let elink = document.createElement('a')
            elink.download = fileName
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
          } else {
            // IE10+下载
            navigator.msSaveBlob(blob, fileName)
          }
        } else {
          // 返回文件blob格式URL
          let dataInfo = res.data
          let reader = new window.FileReader()
          // 使用readAsArrayBuffer读取文件, result属性中将包含一个 ArrayBuffer 对象以表示所读取文件的数据
          reader.readAsArrayBuffer(dataInfo)
          reader.onload = function (e) {
            let result = e.target.result
            let contentType = dataInfo.type
            // 生成blob图片,需要参数(字节数组, 文件类型)
            let blob = new Blob([result], { type: contentType })
            // 使用 Blob 创建一个指向类型化数组的URL, URL.createObjectURL是new Blob文件的方法,可以生成一个普通的url,可以直接使用,比如用在img.src上
            let url = window.URL.createObjectURL(blob)
            resolve(url)
          }
        }
      } else {
        let reader = new FileReader()
        reader.onload = e => {
          if (e.target.readyState === 2) {
            let result = {}
            result = JSON.parse(e.target.result)
            // result.code === 403
          }
        }
        reader.readAsText(res.data)
      }
    }).catch(() => {
      // 下载时出现错误
    })
  })
}
export default download
