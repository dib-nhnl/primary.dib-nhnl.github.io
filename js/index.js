var contentData = [
	[
		{title: '随手练习'},
		{title: '不安分的球', url: 'game/ball.html'},		
	],
	[
		{title: '原生JavaScript'},
		{title: '覆盖、预览和换肤', url: 'e/style_tt.html'},
		{title: '几种图片轮播', url: 'e/ppt.html'},
		{title: '登录界面', url: 'e/Login.html'},
	],
	[
		{title: 'jQuery'},
		{title: '表格', url: 'q/table.html'},
		{title: '鼠标提示', url: 'q/tips.html'},
	],
	[
		{title: 'Bootstrap'},
		{title: '介绍页面', url: 'b/flash.html'},
	]
];
var docForm = "";
for (var i = 0; i < contentData.length; i++) {
	var sub = "";
	var items = contentData[i];
	for (var j = 0; j < items.length; j++){
		var urls = items[j];
		if (j == 0) {
			sub += "<li><h2><a href='javascript:;' title='" + urls.title + "''>" + urls.title + "</a></h2><dl class='sub'>";
		}  else {
			sub += '<dd><a href="' + urls.url + '" target="_blank" title="' +urls.title + '">' +urls.title + '</a></dd>';
		}
		if (j == items.length - 1) {
			sub += "</dl></li>";
		}
	}
	docForm += sub;
}
var uL = document.getElementById('uL');
uL.innerHTML = docForm;
var oH2 = uL.getElementsByTagName('h2');
var oDl = uL.getElementsByTagName('dl');
var op = false, h2index = -1;
for (var i = 0; i < oH2.length; i++) {
 	oH2[i].onclick = (function (n) {
 		return function () {
 			for (var j = 0; j < oDl.length; j++){
 				oDl[j].style.display = 'none';
 			}
 			if (h2index == n && op) {
 				oDl[n].style.display = 'none';
 				op = false;
 			} else {
 				oDl[n].style.display = 'block';
 				op = true;
 			}
 			h2index = n;
 		}
 	})(i); 
}