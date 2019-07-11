window.onload = function(){
	resizeBodyTag();
	repositionDialog();
}

window.onresize = function(){
	repositionDialog();
}

$(".send-btn")[0].onclick = function(){
	xyfAjax.ajax({
 url:'http://39.100.9.149:10010/chat/get',
 type:'get', //or post
 dataType:'json', //or jsonp
 data:{
  chat:$(".chat-input")[0].value,
  session:$(".hideInput")[0].value
 },
 success: function(data){
 	$(".chat-input")[0].value = "";
 	$(".hideInput")[0].value = data.session;
 	$(".msg")[0].innerText = data.say;
 	console.log(data.session)
 },
 error:function(status){
 	//$(".msg")[0].innerText = "网站出错了，杀个程序员祭天吧！";
 }
})
}
