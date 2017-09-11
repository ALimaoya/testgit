/**
 * Created by Administrator on 2017/9/5 0005.
 */
function ajax(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.setRequestHeader('Authorization','APPCODE b56ceeed6e2449fc8985d4fe85769899')
    xhr.send(null);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            callback(xhr.responseText);
        }
    }
}
}