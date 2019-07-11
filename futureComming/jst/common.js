/**
 * 判断是否是pc设备
 */
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if(window.screen.width>=768){
         flag = true;
    }
    return flag;
}

/**
 * 获取node
 * @param {Object} ele
 */
function $(ele){
	var res = null;
	if("#" == ele[0]){
		var temp = document.getElementById(ele.substring(1))
		res = [temp]
	}else if("." == ele[0]){
		res = document.getElementsByClassName(ele.substring(1))
	}else{
		res = document.getElementsByTagName(ele)		
	}
	return res;
}

/**
 * 获取浏览器可视宽度
 */
function getViewWidth(){
		return window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
}
/**
 * 获取浏览器可视高度
 */
function getViewHeight(){
		return window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight; 
}
/**
 * 设置元素宽度
 * @param {Object} $ele
 * @param {Object} width
 */
function setDivWidth($ele,width){
	$ele.style.width = width+"px"
}
/**
 * 设置元素高度
 * @param {Object} $ele
 * @param {Object} height
 */
function setDivHeight($ele,height){
	$ele.style.height = height+"px"
}
/**
 * 重置body标签尺寸
 */
function resizeBodyTag(){
	
	if(IsPC()){
		
		if(getViewWidth()/getViewHeight()>9/16){
			setDivWidth($(".body")[0],getViewHeight()/16*9);
			setDivHeight($(".body")[0],getViewHeight());
		}else if(getViewWidth()/getViewHeight()<9/16){
			setDivWidth($(".body")[0],getViewWidth());
			setDivHeight($(".body")[0],getViewWidth()/9*16);
		}else{
			setDivWidth($(".body")[0],getViewWidth());
			setDivHeight($(".body")[0],getViewHeight());
		}
		
	}else{
		setDivWidth($(".body")[0],getViewWidth());
		setDivHeight($(".body")[0],getViewHeight());
	}
		
		setDivWidth($("body")[0],getViewWidth());
		setDivHeight($("body")[0],getViewHeight());
	
}


/**
 * JS原生AJAX
 */
var xyfAjax = {
 ajax: function(params) {
  params = params || {};
  params.cache = params.cache || false;
  if (!params.url) {
   throw new Error('参数不合法');
  }
  params.dataType = (params.dataType || 'json').toLowerCase();
  if (params.dataType == 'jsonp') {
   this.ajaxJSONP(params);
  } else if (params.dataType == 'json') {
   this.ajaxJSON(params);
  }
 },
 /**
 * 通过JSONP的方式请求
 * @param {[type]} params [description]
 * @return {[type]}  [description]
 */
 ajaxJSONP(params) {
  params.data = params.data || {};
  params.jsonp = params.jsonp || 'callback';
  // 设置传递给后台的回调参数名和参数值
  var callbackName = 'jsonp_' + (new Date()).getTime();
  params.data[params.jsonp] = callbackName;
  var formatedParams = this.formateParams(params.data, params.cache);
  //创建script标签并插入到页面中
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  head.appendChild(script);
  //创建jsonp回调函数 
  window[callbackName] = function(json) {
   head.removeChild(script);
   clearTimeout(script.timer);
   window[callbackName] = null;
   params.success && params.success(json);
  };
  //发送请求 
  script.src = (!!formatedParams ? params.url + '?' + formatedParams : params.url);
  //为了得知此次请求是否成功，设置超时处理
  if (params.time) {
   script.timer = setTimeout(function() {
    window[callbackName] = null;
    head.removeChild(script);
    params.error && params.error({
     message: '超时'
    });
   }, params.time);
  }
 },
 /**
 * 通过JSON的方式请求
 * @param {[type]} params [description]
 * @return {[type]}  [description]
 */
 ajaxJSON(params) {
  params.type = (params.type || 'GET').toUpperCase();
  params.data = params.data || {};
  var formatedParams = this.formateParams(params.data, params.cache);
  var xhr;
  //创建XMLHttpRequest对象
  if (window.XMLHttpRequest) {
   //非IE6
   xhr = new XMLHttpRequest();
  } else {
   xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  //异步状态发生改变，接收响应数据
  xhr.onreadystatechange = function() {
   if (xhr.readyState == 4 && xhr.status == 200) {
    if (!!params.success) {
     if (typeof xhr.responseText == 'string') {
      params.success(JSON.parse(xhr.responseText));
     } else {
      params.success(xhr.responseText);
     }
    }
   } else {
    params.error && params.error(status);
   }
  }
  if (params.type == 'GET') {
   //连接服务器
   xhr.open('GET', (!!formatedParams ? params.url + '?' + formatedParams : params.url), true);
   //发送请求
   xhr.send(null);
  } else {
   //连接服务器
   xhr.open('POST', params.url, true);
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   //发送请求
   xhr.send(formatedParams);
  }
 },
 /**
 * 格式化数据
 * @param {Obj}  data 需要格式化的数据
 * @param {Boolean} isCache 是否加入随机参数
 * @return {String}   返回的字符串
 */
 formateParams: function(data, isCache) {
  var arr = [];
  for (var name in data) {
   arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }
  if (isCache) {
   arr.push('v=' + (new Date()).getTime());
  }
  return arr.join('&');
 }
}

