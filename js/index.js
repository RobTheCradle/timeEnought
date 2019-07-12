window.onload = function(){
	resizeBodyTag();
	repositionDialog();
	//initCanvas();
}

window.onresize = function(){
	repositionDialog();
}

$(".send-btn")[0].onclick = function(){
	$this = this;
	forbiddenClick($this);
	$this.innerText = "发送中";
	$(".msg-flag")[0].classList.add("msg-send-icon-out");
	
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
 	revertClick($this)
 	$this.innerText = "发送";
 	$(".msg-flag")[0].classList.remove("msg-send-icon-out");
 	//console.log(data.session)
 },
 error:function(status){
 	//$(".msg")[0].innerText = "网站出错了，杀个程序员祭天吧！";
 }
})
}

function forbiddenClick($ele){
	$ele.classList.add("forbiddenClick");
}

function revertClick($ele){
	$ele.classList.remove("forbiddenClick");
}

//
//function initCanvas(){
//	var canvas = document.getElementById("canvas");
//	var ctx = canvas.getContext("2d");
//	var img = new Image();
//	img.src = "img/fengye.png";
//	img.onload = function(){
//		drawImg(ctx,img,0,0,100,100,45);
//	} 
//}
//
//
//function drawImg(ctx,img,x,y,width,height,rotate){
//	//ctx.rotate(rotate * Math.PI / 180);
//	ctx.drawImage(img,x,y,width,height);
//	//ctx.rotate(0);
//}