window.onload = function(){
	resizeBodyTag();
}

window.onresize = function(){
	resizeBodyTag();
}

$("#btn-open")[0].onclick = function(){

	$("#arrow-m0")[0].style.display="none";	
	$("#arrow-m1")[0].style.display="none";	
	$("#arrow-m2")[0].style.display="none";	
	$(".background-L")[0].style.left = "-100%";
	$(".background-R")[0].style.left = "100%";
	$(".background-message")[0].style.opacity = "1";
	$(".words")[0].style.opacity = "0";
	showShake()
	appendSpan()
	listenOpen();
	
}
var timer = null;
var delay = 200;
var i = 0;
//var txt = "　　前些天，我和我室友谈到去乐山逛了一圈，又怀念了一下大学的时光，沫若湖旁的蔷薇花依然像往常一样美丽，湖边的测量队依然像我们当初一样傻里傻气的一脸笑容。当说起和谁一起去的时候，我说：“我朋友和他的女朋友，另外还有一个漂亮的女孩子，很可爱”。他反问我，问我是不是喜欢上人家了，我忽然不知该如何回答，因为我满眼都是那个女孩如春风般的笑容，似水波般的眼眸，但我却不知道我在她的世界里我是怎样的一个角色。顿了会儿，我说，她纯真的笑容甜到心里了，不过我不知道怎么样才能给这么好的女孩子幸福。他女朋友说：“你是不是傻，我们要的就是一个值得信赖的人，会在疲惫的时候有一个可以依靠的肩膀，在快乐的时候一起疯一起闹，我和我家茂阳都是在外漂泊，但是有他在我就觉得很有安全感”，然后他俩就打情骂俏去了........|　　是啊，我们都是漂泊在时间长河中的人，每个人都在彷徨，望着望不到的未来，多想有个可以相互依偎的人。也不知道是从哪天开始，手机铃音响起的时候，都会首先看看是不是那个女孩的讯息，不过始终还是有些落寞~|　　或许心爱的人不需要翻山越岭去寻找，有时候她就在我目所能及的地方，有时候缘分就在那么不经意间产生，见到你的那一刻惊艳而淡雅，再见的那一刻，花香十里未及你心芬芳。或许你能给我个机会， 在未来的日子里，每天对你说晚安。在未来的日子里，为你温粥煮茶。在未来的日子里，抚慰你每一寸疲惫的心灵。在未来的日子里，为你遮风避雨。我不需要伞，因为我就是伞，就是那个值得一生信赖的依靠，无论风霜如刀，我心依然温暖如初。做我的天使，你看到的会是一个为家拼搏的汉子和一个温馨的家。|　　婷，我喜欢你！让我牵起你的手，余生我们一起走吧。 ";
//var txt = "出现光标了现光标了现光标了现光标了现光标了现光标了现光标了";
var txt = "<span class='normalWords'>　　前些天，我和我室友谈到去乐山逛了一圈，又怀念了一下大学的时光，沫若湖旁的蔷薇花依然像往常一样美丽，湖边的测量队依然像我们当初一样傻里傻气的一脸笑容。当说起和谁一起去的时候，我说：“我朋友和他的女朋友，另外还有一个漂亮的女孩子，很可爱”。他反问我，问我是不是喜欢上人家了，我忽然不知该如何回答，因为我满眼都是那个女孩如春风般的笑容，似水波般的眼眸，但我却不知道我在她的世界里我是怎样的一个角色。顿了会儿，我说，她纯真的笑容甜到心里了，不过我不知道怎么样才能给这么好的女孩子幸福。他女朋友说：“你是不是傻，我们要的就是一个值得信赖的人，会在疲惫的时候有一个可以依靠的肩膀，在快乐的时候一起疯一起闹，我和我家茂阳都是在外漂泊，但是有他在我就觉得很有安全感”，然后他俩就打情骂俏去了........</span><br><span class='normalWords'>　　是啊，我们都是漂泊在时间长河中的人，每个人都在彷徨，望着望不到的未来，多想有个可以相互依偎的人。也不知道是从哪天开始，手机铃音响起的时候，都会首先看看是不是那个女孩的讯息，不过始终还是有些落寞~</span><br><span class='normalWords'>　　或许心爱的人不需要翻山越岭去寻找，有时候她就在我目所能及的地方，有时候缘分就在那么不经意间产生，见到你的那一刻惊艳而淡雅，再见的那一刻，花香十里未及你心芬芳。或许你能给我个机会， 在未来的日子里，每天对你说晚安。在未来的日子里，为你温粥煮茶。在未来的日子里，抚慰你每一寸疲惫的心灵。在未来的日子里，为你遮风避雨。我不需要伞，因为我就是伞，就是那个值得一生信赖的依靠，无论风霜如刀，我心依然温暖如初。做我的天使，你看到的会是一个为家拼搏的汉子和一个温馨的家。</span><br><span class='normalWords'>　　婷，我喜欢你！让我牵起你的手，余生我们一起走吧。</span> ";

function appendSpan(){
	$(".content")[0].innerHTML = txt;
}
//function appendSpan(){
//	var lastSpan = lastChild($(".content")[0]);
//	
//	
//	if(i>=txt.length){
//		window.clearTimeout(timer);
//		timer = null;
//		
//		return false;
//	}
//	if(delay == 400) delay = 200;
//	 
//	if(txt[i]=="，" || txt[i]=="。" || txt[i]=="：" || txt[i]=="~" || txt[i] == "|"){
//		delay = 400;
//	}
//	
//	var item = txt[i];
//	
//	if(txt[i] == "|"){
//		var span = document.createElement("br");
//		$(".content")[0].appendChild(span);
//	}else{
//		
//		var span = document.createElement("span");
//		span.innerText = item;
//		span.setAttribute("class","normalWords");
//		span.style.opacity = 0;
//		$(".content")[0].appendChild(span);
//	}
//	
//	/*var tmp = $(".normalWords");
//	
//	if(tmp.length>1){
//		tmp[tmp.length-2].style.opacity = 1;
//	}
//	*/
//	if(lastSpan!=null){
//		lastSpan.style.opacity = 1;
//	}
//	
//	$(".inner-box")[0].scrollTop= $(".inner-box")[0].scrollHeight
//	i++
//	self.setTimeout(appendSpan,delay)
//	//appendSpan();
//}

function lastChild(obj) {
	if(obj=='undefined' || typeof(obj)=='undefined') return null;
    return obj.lastElementChild ? obj.lastElementChild : obj.lastChild;
}



function showShake(){
	$(".click-btn")[0].style.opacity = 1;

}
$(".click-btn")[0].onclick = function(){
	window.clearInterval(timer);
	timer = null;
	timer = self.setInterval(listenMessage,1500);
	window.onresize = function(){}
	$(".content")[0].style.display = "none"
	$(".title")[0].style.display = "none";
	$(".textarea")[0].style.top = "5%";
	$(".btn-group")[0].style.top = "85%";
	$(".click-btn")[0].style.opacity = 0;
}
var timer = null;
function shakeClick(){
	window.clearInterval(timer);
	timer = null;
	timer = self.setInterval(listenMessage,1500);
	window.onresize = function(){}
	$(".content")[0].style.display = "none"
	$(".title")[0].style.display = "none";
	$(".textarea")[0].style.top = "5%";
	$(".btn-group")[0].style.top = "85%";
	$(".click-btn")[0].style.opacity = 0;
}


$(".btn-confirm")[0].onclick = function(){
	exitEdit();
}
$(".btn-cancle")[0].onclick = function(){
	exitEdit();
}


function exitEdit(){
	window.clearInterval(timer);
	timer = null;
	sendMessage();
	window.onresize = function(){ resizeBodyTag() };
	$(".content")[0].style.display = "block"
	$(".title")[0].style.display = "block";
	$(".textarea")[0].style.top = "100%";
	$(".btn-group")[0].style.top = "100%";
	$(".click-btn")[0].style.opacity = 1;

}


function sendMessage(){
xyfAjax.ajax({
 url:'http://39.100.9.149:10010/future/writep',
 type:'post', //or post
 dataType:'json', //or jsonp
 data:{
  msg:$(".textarea")[0].innerText
 },
 success: function(data){
 },
 error:function(status){
 }
})

}

var ct = "";

function listenMessage(){
	console.log(1)
	var temp = $(".textarea")[0].innerText;
	if(ct == temp){
		return
	}else{
		ct = temp
	}
xyfAjax.ajax({
 url:'http://39.100.9.149:10010/future/write',
 type:'post', //or post
 dataType:'json', //or jsonp
 data:{
  msg:$(".textarea")[0].innerText
 },
 success: function(data){
 },
 error:function(status){
 }
})
}



function listenOpen(){
xyfAjax.ajax({
 url:'http://39.100.9.149:10010/future/write',
 type:'post', //or post
 dataType:'json', //or jsonp
 data:{
  msg:"open"
 },
 success: function(data){
 },
 error:function(status){
 }
})
}
