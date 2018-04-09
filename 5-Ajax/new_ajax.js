function ajax(url,fnsucc,fnfaild){
    var oAjax = null;
    if(window.XMLHttpRequest){
    //不存在的变量会报错，不存在的属性仅仅是undefined
        oAjax = new XMLHttpRequest();
    }else{
        oAjax = new ActiveXObject("Microsoft.XMLHttp");
    }
    //连接服务器open(方法，URL，异步)
    oAjax.open('GET',url,true);
    //发送请求
    oAjax.send();
    //接收服务器返回
    oAjax.onreadystatechange = function(){
        if(oAjax.readyState == 4){
            if(oAjax.status == 200){
                //alert('成功'+oAjax.responseText);
                fnsucc(oAjax.responseText);
            }else{
                //alert('失败');
                if(fnfaild){
                    fnfaild();
                }
            }
        }
    };
}