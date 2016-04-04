window.onload = function () {
	overLay();
	setOnclick();
	preView();
	fold();	
}
//覆盖层
function overLay() {
	var layer = document.getElementById('overLayer');
	var tip	= document.getElementById('tip');
	var clzTip = document.getElementById('closeTip');
	clzTip.onclick = function () {
		layer.style.display = 'none';
		tip.style.display = 'none';
	}
}
//点击换肤
function skin(whichpic) {
	var urlPic = whichpic.getAttribute('href');
	var olink = document.getElementsByTagName('link')[1];
	olink.setAttribute("href", urlPic);
}
//鼠标悬停预览
function preView() {
	var oImg = document.getElementsByTagName('img');
	var imgPre = oImg[0];
	var divPre = document.getElementById('wrap').getElementsByTagName('div')[0];
	for (i = 1; i < oImg.length; i++) {
		oImg[i].onmouseover = function () {
			for (var j = 1; j < oImg.length; j++) {
				oImg[j].className = "";
			}
			this.className = "smallpic";
			var loadingPic = new Image();
			loadingPic.src = imgPre.src = this.src.replace(/small/,"big");
			divPre.style.display = 'block';
			loadingPic.complete?divPre.style.display = 'none':(imgPre.onload = function () {
				divPre.style.display = 'none';
			});
		}
	}
}
//a标签绑事件
function setOnclick() {
	var oA = document.getElementsByTagName('a');
	for (var i = 0; i < oA.length; i++) {
		oA[i].setAttribute('onclick','skin(this);return false;');
	}
}
//折叠按钮
function fold() {
	var min = false;
	var w = document.getElementById('wrap');
	var btn = document.getElementById('btn');
	var ert = document.getElementsByTagName('li');
	btn.onclick = function () {
		if (!min){
			min = true;
			btn.innerHTML = '展开';
			btn.style.color = 'white';
			w.style.width = '50px';
			w.style.height = '25px';
			for (i = 0; i < ert.length; i++)
			ert[i].style.display = 'none';
		} else {
			btn.style.color = 'black';
			w.style.width = '600px';
			w.style.height = 'auto';
			btn.innerHTML = '收起';
			min = false;
			for (i = 0; i < ert.length; i++)
			ert[i].style.display = 'block';
		}
	}
}
