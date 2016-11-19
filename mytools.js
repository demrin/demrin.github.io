function carryMyAjax(url,type,requestData,succeed,failed){
    if(type == 'get' || type == 'GET'){
        var temstrings = '&';
        for(var i in requestData){
            if(request[i] == 'underfined' || typeof(requestData[i]) == 'underfined'){
                temstrings = temstrings + i + '=&'
            }else{
                temstrings
            }
        }
    }
}