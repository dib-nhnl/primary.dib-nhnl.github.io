window.onload = function () {
	showTime();
	leftTime();
}

// 显示系统当前时间，输出到id = "showtime"的元素中
		function showTime() {

			var weekday = new Array(7);
			weekday[0] = "星期一";
			weekday[1] = "星期二";
			weekday[2] = "星期三";
			weekday[3] = "星期四";
			weekday[4] = "星期五";
			weekday[4] = "星期六";
			weekday[6] = "星期日";

			var myDate = new Date();
			var year = myDate.getFullYear();
			var month = myDate.getMonth() + 1;
			var date = myDate.getDate();
			var d = myDate.getDay();
			var h = myDate.getHours();
			var m = myDate.getMinutes();
			var s = myDate.getSeconds();
			h = checkTime(h);
			m = checkTime(m);
			s = checkTime(s);

			document.getElementById('showtime').innerHTML = year + "年" + month + "月" + date + "日" + weekday[d] + h + ":" + m + ":" + s;
			setTimeout(showTime, 500);
		}
// 让小于10的时间戳也能显示为2位数的转变函数，注意是字符串
		function checkTime(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
// 限时，输出到id = "leftTime"的元素中
		function leftTime() {
			var endtime = new Date("2016/3/31,23:59:59");// 结束时间
			var curtime = new Date();
			var lefttime = parseInt((endtime.getTime() - curtime.getTime()) / 1000);// 秒级时间差取整
			var d = parseInt(lefttime / (24 * 60 * 60));
			var h = parseInt((lefttime / (60 * 60)) % 24);// 用取模的方法取小时数
			var m = parseInt((lefttime / 60) % 60);
			var s = parseInt(lefttime % 60);
			d = checkTime(d);
			h = checkTime(h);
			m = checkTime(m);
			s = checkTime(s);			
			document.getElementById('hurryup').innerHTML = '还有' + d + "天" + h + '小时' + m + '分钟' + s + '秒';
			if (lefttime <= 0) {
				document.getElementById('hurryup').innerHTML = '已经到来！';
			}
			setTimeout(leftTime, 500);
		}