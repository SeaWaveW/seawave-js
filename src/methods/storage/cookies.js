const cookie = {
    set:(key,value,time)=>{
        const date = new Date()  
        date.setTime( date.getTime() + Number(time) * 24 * 60 * 60 * 1000) 
        document.cookie = key+'='+value+ ';expires=' +date.toUTCString(); 
    },
    get:(key)=>{
        const cookies = document.cookie;
        const cookieArr = cookies.split(';');
        const cookieObj = new Object();
        const numObj = new Object() //接收当key为number类型时
        cookieArr.forEach((item,index)=>{
            let newArr = item.split("=");
            cookieObj[newArr[0].trim()] = newArr[1]
            //当key为number类型时
            if(typeof key === "number" && key-1 === index){
                numObj[newArr[0].trim()] = newArr[1]
            }
        })
        //当key为number类型时
        if(typeof key === "number"){
            return numObj
        }
        //否则
        for(let name in cookieObj){
            if(name == key){ 
                return cookieObj[name]
            }
        }
    },
    remove:(key)=>{
        const date = new Date() 
        date.setTime(date.getTime()+ -1 *24*60*60*1000);
        document.cookie = key+'='+' ;expires=' +date.toUTCString();
    },
    clear:()=>{
        const date = new Date()
        date.setTime(date.getTime()+ -1 *24*60*60*1000);
        const cookies = document.cookie;
        const cookieArr = cookies.split(';');
        const cookieObj = new Object();
        cookieArr.forEach(item=>{
            let newArr = item.split("=");
            cookieObj[newArr[0].trim()] = newArr[1]
        })
        for(let key in cookieObj){
            document.cookie = key+'='+' ;expires=' +date.toUTCString();
        }
    },
    length:(()=>{
        const cookies = document.cookie;
        const cookieArr = cookies.split(';');
        return cookieArr.length
    })(),
    each:(callback)=>{
        const cookies = document.cookie;
        const cookieArr = cookies.split(';');
        const cookieObj = new Object();
        cookieArr.forEach((item,index)=>{
            let newArr = item.split("=");
            cookieObj[newArr[0].trim()] = newArr[1]
            return callback({
                key:newArr[0].trim(),
                value:newArr[1]
            },index)
        })
    }
}

export default cookie