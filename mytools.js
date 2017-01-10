/**
 * Created by demrin on 2016/11/11.
 */

/**
 * ajax 请求式
 */
function startAjax(url,type,requestData,succeed,failed){
    if(type == 'get' || type == 'GET'){
        var temstrings = '&';
        for(var i in requestData){
            if(request[i] == 'underfined' || typeof(requestData[i]) == 'underfined'){
                temstrings = temstrings + i + '=&'
            }else{
                temstrings = temstrings + i + '=' + requestData[i] + '&'
            }
        }
        if(url.indexOf('?')){
            url = url + temstrings
        }else{
            url = url + '?' + temstrings
        }
    }else if(type == 'post' || type == 'POST'){
        var temstrings = new Array()
    }
}

/**
 * 警告提示样式
 */
var alert;
alert = function(msg){
    
}

/**
 * 请求加载.....
 */
function loading(){
    setTimeout(
        function(){
            $('#loading').hide()
        },5000
    )
}