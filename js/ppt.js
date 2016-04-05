window.onload = function () {
//给body添加渐变色，这里让body先有个高度，开发完毕后取消这些
	var bH = document.body.clientHeight||document.documentElement.clientHeight;
	var ob = document.body||document.documentElement;
	ob.style.height = bH + 'px';
//box1的图片轮换
	var obox1 = document.getElementById('box1');
	var oli1 = document.getElementById('lists1');
	var oimg1 = oli1.getElementsByTagName('li');
	var oc1 = document.getElementById('count1');
	var on1 = oc1.getElementsByTagName('li');
	var index1 = 0, ao1 = 0, timer1 = null, timer = null, de1 = true;
	//显示下标为n的图片
	function show1(n) {
		index1 = n;
		for (var i = 0; i < on1.length; i++) {
			on1[i].className = "";
		}
		clearInterval(timer);
		for (var i = 0; i < oimg1.length; i++) {
			oimg1[i].style.opacity = 0;
			oimg1[i].style.filter = "alpha(opacity = 0)";
		}
		timer = setInterval(function () {
			if(ao1 > 100) {
				ao1 = 0;
				clearInterval(timer);
			} else {
				oimg1[index1].style.opacity = (ao1 / 100);
				oimg1[index1].style.filter = "alpha(opacity = " + ao1 + ")";
				ao1 += 1;
				on1[index1].className = "current1";
			}		
		},20);

	}

	//小下标鼠标悬停显示图片
	for (var j = 0; j < on1.length; j++) {
		on1[j].index = j;
		on1[j].onmouseover = function () {
			show1(this.index);
		}
	}

	//自动播放函数
	function autoplay1() {
		var autocount = index1;
		timer1 = setInterval(function () {
			if (de1) {
				show1(autocount);
			} else {
				autocount ++;
				show1(autocount);
				de1 = true;
			}
			if (autocount >= oimg1.length - 1) {
				autocount = -1;
			}
			autocount ++;	
		},3000);
	}
	// 图片框悬停停止自动播放
	obox1.onmouseover = function () {
		clearTimeout(timer1);
	}
	// 鼠标移出图片范围重新自动播放
	obox1.onmouseout = function () {
		autoplay1();
		de1 = false;
	}
	
	//页面载入后直接运行自动播放
	autoplay1();

}