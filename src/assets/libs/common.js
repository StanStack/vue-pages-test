// DEBUG 模式，统计所有请求的耗时
var isDebug = false
var commonPart = 'http://192.168.1.120:8090/disaster';
// var commonPart = 'http://113.247.231.112:5050/disaster';
// var commonPart = 'http://112.74.175.232:8090/disaster'
var mask = mui.createMask(function() {
	return mask.clickClose;
}); //clickClose 自定义属性
var hasTimeoutToast = false;
var timeoutRequests = [];
/**
 * Ajax請求
 * 
 * @param url 请求地址
 * @param params 传递参数
 * @param onSucceed 处理成功
 * @param onError 处理失败
 * @param info 传入参数
 */
function ajaxPost(url, params, onSuccess, info, hasMask) {
	if(window.plus) {
		var network = plus.networkinfo.getCurrentType()
		if(network === plus.networkinfo.CONNECTION_NONE || network === plus.networkinfo.CONNECTION_UNKNOW) {
			mui.toast("当前没有网络")
			return
		}
	}

	if(isDebug && console && console.time) {
		console.time(url)
	}

	$.ajax({
		type: "post",
		url: commonPart + url,
		data: params,
		cache: false,
		dataType: "json",
		timeout: 60000,
		processData: false,
        contentType: false,
		beforeSend: function() {
			if(hasMask !== false) {
				mask.show(); //显示遮罩
				$(".onload").show();
			}
		},
		success: function(data) {
			if(data.code === 1) {
				try {
					onSuccess(data, info);
				} catch(e) {
					console.log(e.message)
				}
			} else if(data.reqState == -100) {
				mui.alert(data.reqMsg, "提示", "确定", function() {})
			} else {
				mui.alert(data.reqMsg, "提示", "确定", function() {})
			}
		},
		error: function(data) {
			mui.alert(data.reqMsg, "提示", "确定", function() {})
		},
		complete: function(XMLHttpRequest, status) {
			if(status === 'timeout' || status === 'error') {
				if(!hasTimeoutToast) {
					mui.toast("网络出现异常")
					hasTimeoutToast = true
					setTimeout(function() {
						hasTimeoutToast = false
					}, 3000)
				}
				timeoutRequests.push([url, params, onSuccess, info, hasMask])
			}

			if(hasMask !== false) {
				$(".onload").hide();
				mask.close();
			}

			if(isDebug && console && console.timeEnd) {
				console.timeEnd(url)
			}
		}
	});
}

function ajaxGet(url, params, onSuccess, info, hasMask) {
	if(window.plus) {
		var network = plus.networkinfo.getCurrentType()
		if(network === plus.networkinfo.CONNECTION_NONE || network === plus.networkinfo.CONNECTION_UNKNOW) {
			mui.toast("当前没有网络")
			return
		}
	}

	if(isDebug && console && console.time) {
		console.time(url)
	}

	$.ajax({
		type: "get",
		url: commonPart + url,
		data: params,
		cache: false,
		dataType: "json",
		timeout: 60000,
		beforeSend: function() {
			if(hasMask !== false) {
				mask.show(); //显示遮罩
				$(".onload").show();
			}
		},
		success: function(data) {
			if(data.code == 1 || data.code == 4) {
				try {
					onSuccess(data, info);
				} catch(e) {
					console.log(e.message)
				}
			} else if(data.reqState == -100) {
				mui.alert(data.reqMsg, "提示", "确定", function() {})
			} else {
				mui.alert(data.reqMsg, "提示", "确定", function() {})
			}
		},
		error: function(data) {
			mui.alert(data.reqMsg, "提示", "确定", function() {})
		},
		complete: function(XMLHttpRequest, status) {
			if(status === 'timeout' || status === 'error') {
				if(!hasTimeoutToast) {
					mui.toast("网络出现异常")
					hasTimeoutToast = true
					setTimeout(function() {
						hasTimeoutToast = false
					}, 3000)
				}
				timeoutRequests.push([url, params, onSuccess, info, hasMask])
			}

			if(hasMask !== false) {
				$(".onload").hide();
				mask.close();
			}

			if(isDebug && console && console.timeEnd) {
				console.timeEnd(url)
			}
		}
	});
}



 /**
   * 返回含有过滤源key的对象数组，规则:同时满足所有source key/value的对象
   * @param {Array of Object} collection 待过滤对象数组
   * @param {Object} source 过滤源
   */
  function dataFilter(collection, source) {
    var arr = [];
    var keys = Object.keys(source);
    arr = collection.filter(function(item){
      for (var i = 0; i < keys.length; i++) {
        if ( !item.hasOwnProperty(keys[i]) || item[keys[i]] !== source[keys[i]]) {
          return false;
        }
      }
      return true;
    });
    return arr;
  }
  
mui.plusReady(function() {
	plus.webview.currentWebview().setStyle({scrollIndicator:'none'});
})