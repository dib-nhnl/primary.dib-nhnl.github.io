window.onload = function () {
	overLay();
	setOnclick();
	preView();
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
			// var urlPre = this.src.replace(/small/,"big");
			// imgPre.setAttribute('src', urlPre);
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
