window.onload = function () {
//为了给body添加渐变色
	var bH = document.body.clientHeight||document.documentElement.clientHeight;
	var ob = document.body||document.documentElement;
	ob.style.height = bH + 'px';
//box1的图片轮换，单框渐变自动+键控轮播
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
		//根据之后的经验，这里用属性而非变量timer会好一些。
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

//box2的图片轮换，多图立体键控动态
	var obox2 = document.getElementById('box2');
	var oli2 = document.getElementById('lists2');
	var oimg2 = oli2.getElementsByTagName('li');
	var oc2 = document.getElementById('count2');
	var on2 = oc2.getElementsByTagName('li');
	var arr2 = [];
	var index2 = 2;
	for (var i = 0; i < oimg2.length; i++) {
		var limg = oimg2[i];
		arr2.push({
			top: parseInt(getStyle(limg,'top')),
			left: parseInt(getStyle(limg,'left')),
			width: parseInt(getStyle(limg,'width')),
			height: parseInt(getStyle(limg,'height')),
			zIndex: parseInt(getStyle(limg,'z-index'))
		});
		on2[i].index = i;
		on2[i].onmouseover = function () {
			show2(this.index);
		}
	}
	for (var i = 0; i < oimg2.length; i++){
		oimg2[i].index = i;
		oimg2[i].onclick = function () {
			show2(this.index);
		}
	}
	// 获取top、left、width、heigh、z-index
	function getStyle(obj, key) {
		if (obj.currentStyle) {
			return obj.currentStyle[key];
		} else {
			return getComputedStyle(obj, false)[key];
		}
	}
	//显示图片的函数
	function show2(n) {
		tab2(n);
		//修改包含样式信息的数组内元素顺序
		var set2 = opArr(n,arr2);
		// 根据修改后的数组操作图片移动
		for (var i = 0; i < oimg2.length; i++) {
			oimg2[i].style.zIndex = set2[i].zIndex;
			move2(oimg2[i],set2[i]);
		}
		index2 = n;
	}
	// 修改保存了样式的数组的函数
	function opArr(m,arr) {
		m = m - index2;
		for (var i = 0; i < Math.abs(m); i++) {
			if (m < 0) {
				arr.push(arr.shift());
			}
			if (m > 0) {
				arr.unshift(arr.pop());
			}
		}
		return arr;
	}
	// 移动图片的函数
	function move2(obj,arr2item) {
		clearInterval(obj.timer2);
		obj.timer2 = setInterval(function () {
			var de2 = true;
			for (var key in arr2item) {
				var cur2 = parseInt(getStyle(obj, key));
				var final2 = arr2item[key];
				// 设置一个速度，在定时函数内这将制造先快后慢的动画，这除数应该是需要注意的
				var speed2 = (final2 - cur2) / 5;
				speed2 = (speed2 >= 0)?Math.ceil(speed2):Math.floor(speed2);
				if (cur2 != final2) {
					de2 = false;
				}
				cur2 = cur2 + speed2;
				// 什么时候用.key什么时候用[key]取决于key是字符串还是变量，很显然这里key是字符串
				obj.style[key] = cur2 + 'px';
			}
			if (de2 == true) {
				clearInterval(obj.timer2);
				obj.timer2 = null;
			}
		},50);
	}
	//改变下标
	function tab2(m) {
		for (var i = 0; i < on2.length; i++) {
			on2[i].className = "";
		}
		on2[m].className = "current2";
	}
	show2(0);

//box3的图片轮换，多图并列键控滑动
//值得改进的地方：不同组图片用不同的ul来区分(ul不设置id)js代码相应修改，增加相应变量，修改group3（其值应为innerHTML翻倍后图片组数量的一半）（oli3Width也就不需要了，需要增加一个新的分组宽度），和分组的具体情况挂钩，方便以后修改页面增加图片之后轮播自动调整
	var oli3 = document.getElementById('lists3');
	var wr3 = document.getElementById('wrap3');
	var preb3 = document.getElementById('pre3');
	var nextb3 = document.getElementById('next3');
	oli3.innerHTML += oli3.innerHTML;
	var oli3Width = 700;
	var group3 = 2;
	var index3 = 0;
	wr3.style.left = 0;//发现一开始nextbtn很难起作用，所以加了这一句初始化。后来想明白了，这是因为一开始没用box2的getStyle来获取非嵌入的css样式…

	preb3.onclick = function () {
		if (index3 > 0) {
			index3 --;
		} else {
			index3 = group3 - 1;
			wr3.style.left = -(oli3Width * group3) + 'px';
		}
		move3();
	}
	next3.onclick = function () {
		if (index3 < (group3 * 2 - 1)) {
			index3 ++;
		} else {
			index3 = group3;
			wr3.style.left = -(oli3Width * (group3 - 1)) + 'px';
		}
		move3();
	}

	function move3() {
		if (wr3.timer3) {
			clearInterval(wr3.timer3);
		}
		wr3.timer3 = setInterval(function () {
			var de3 = true;
			var cur3 = parseInt(wr3.style.left);
			var final3 = -oli3Width * index3;
			var speed3 = (final3 - cur3) / 10;
			if (speed3 > 0) {
				speed3 = Math.ceil(speed3);
			} else {
				speed3 = Math.floor(speed3);
			}
			if (cur3 != final3) {
				cur3 = cur3 + speed3;
				wr3.style.left = cur3 + 'px';
				de3 = false;
			}
			if (de3) {
				clearInterval(wr3.timer3);
				wr3.timer3 = null;
			}
		},10);
	}

}