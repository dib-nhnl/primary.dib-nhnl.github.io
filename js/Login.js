window.onload = function () {
	//页面重载时表单重置
	var oform = document.getElementsByTagName('form');
	for (var i = 0; i < oform.length; i++) {
		oform[i].reset();
	}
	var w_wrap = document.getElementById('welcome_wrap');
	var w_form = document.getElementById('welcome_form');
	var m_submit = document.getElementById('mid_submit'),
		m_reset = document.getElementById('mid_reset'),
		quit = document.getElementById('quit');
	var mid_btn_l = document.getElementById('mid_btn_l');
	var mid_btn_r = document.getElementById('mid_btn_r');
	var mid_warn = document.getElementById('mid_warn');
	var left_wrap = document.getElementById('left_wrap');
	var plan = document.getElementById('plan');
	m_submit.disabled = false;
	m_reset.disabled = false;
	quit.disabled = false;
	var de_mid_btn_l = true, de_mid_btn_r = true;
	//离开页面按钮
	quit.onclick = function () {
		window.location.href = "../index.html";
	}
	// 中间表单提交后改变界面
	w_form.onsubmit = function (evt) {
		// 防止重复点击
		m_submit.disabled = true;
		m_reset.disabled = true;
		quit.disabled = true;
		// 阻止默认事件
		evt.preventDefault();
		// 隐藏登录框
		changeWelcomeWrap();
		//显示左右按钮以及提示
		setTimeout(showHeadBtn, 3500);
	}
	//另一写法而已
	// w_form.addEventListener('submit', function (evt) {
	// 	// 阻止默认事件
	// 	evt.preventDefault();
	// 	// 隐藏登录框
	// 	changeWelcomeWrap();
	// },false);

	// 获得css样式的函数
	function getStyle(obj, key) {
		if (obj.currentStyle) {
			return obj.currentStyle[key];
		} else {
			return getComputedStyle(obj, false)[key];
		}
	}
	// 改变登录框所在框体
	function changeWelcomeWrap() {
		w_wrap.style.opacity = 1;
		w_wrap.style.filter = "alpha(opacity = 100)";
		w_wrap.timer = null;
		var w_wrap_of = 100;
		mid_warn.innerHTML = "<p>登录中</p>";
		w_wrap.timer = setInterval(function () {		
			if (w_wrap_of >= 0) {
				var w_wrap_mtop = parseInt(getStyle(w_wrap, 'margin-top'));
				w_wrap.style.opacity = (w_wrap_of / 100);
				w_wrap.style.filter = "alpha(opacity = " + w_wrap_of + ")";
				w_wrap_of -= 1;
				w_wrap.style['margin-top'] = (w_wrap_mtop - 1.5) + "px";
				mid_warn.innerHTML = (w_wrap_of % 25 === 0)?"<p>登录中………</p>":"<p>登录中</p>";
			} else {
				clearInterval(w_wrap.timer);
				w_wrap.timer = null;
			}
		},30);
	}
	// 显示左右按钮
	function showHeadBtn() {
		mid_btn_r.style.display = mid_btn_l.style.display = "block";
		mid_warn.innerHTML = "<p>登录成功！</p><p>点击上方两侧按钮可开关其他界面</p><p>开启一个按钮前请先关闭另一个</p>";
	}
	
	var l_cur_top = null, l_final_top = null;
	var r_cur_top = null, r_final_top = null;
	var speed = null;
	mid_btn_l.onclick = function () {
		mid_warn.innerHTML = "";
		if (de_mid_btn_l && de_mid_btn_r) {
			l_cur_top = parseInt(getStyle(mid_btn_l, 'top'));
			l_final_top = 500;
			de_mid_btn_l = false;
			mid_btn_l.timer = null;
			mid_btn_l.className = "rotate_btn_l";
			mid_btn_l.timer = setInterval(function () {
				speed = Math.ceil((l_final_top - l_cur_top) / 4);
				l_cur_top = l_cur_top + speed;
				mid_btn_l.style['top'] = l_cur_top + 'px';
				if (l_cur_top === l_final_top) {
					clearInterval(mid_btn_l.timer);
					mid_btn_l.timer = null;
					left_wrap.style['display'] = "block";
				}
			},3);
		} else if ((!de_mid_btn_l) && de_mid_btn_r) {
			de_mid_btn_l = true;
			mid_btn_l.timer = null;
			mid_btn_l.className = "";
			left_wrap.style['display'] = "none";
			l_cur_top = parseInt(getStyle(mid_btn_l, 'top'));
			l_final_top = 0;
			mid_btn_l.timer = setInterval(function () {
				speed = Math.ceil((l_cur_top - l_final_top) / 4);
				l_cur_top = l_cur_top - speed;
				mid_btn_l.style['top'] = l_cur_top + 'px';
				if (l_cur_top === l_final_top) {
					clearInterval(mid_btn_l.timer);
					mid_btn_l.timer = null;
				}
			},3);
		} else {
			return false;
		}
	}
	mid_btn_r.onclick = function () {
		mid_warn.innerHTML = "";
		if (de_mid_btn_l && de_mid_btn_r) {
			r_cur_top = parseInt(getStyle(mid_btn_r, 'top'));
			r_final_top = 500;
			de_mid_btn_r = false;
			mid_btn_r.timer = null;
			mid_btn_r.className = "rotate_btn_r";
			mid_btn_r.timer = setInterval(function () {
				speed = Math.ceil((r_final_top - r_cur_top) / 4);
				r_cur_top = r_cur_top + speed;
				mid_btn_r.style['top'] = r_cur_top + 'px';
				if (r_cur_top === r_final_top) {
					clearInterval(mid_btn_r.timer);
					mid_btn_r.timer = null;
					plan.style['display'] = "block";
				}
			},3);
		} else if ((!de_mid_btn_r) && de_mid_btn_l) {
			de_mid_btn_r = true;
			mid_btn_r.timer = null;
			mid_btn_r.className = "";
			plan.style['display'] = "none";
			r_cur_top = parseInt(getStyle(mid_btn_r, 'top'));
			r_final_top = 0;
			mid_btn_r.timer = setInterval(function () {
				speed = Math.ceil((r_cur_top - r_final_top) / 4);
				r_cur_top = r_cur_top - speed;
				mid_btn_r.style['top'] = r_cur_top + 'px';
				if (r_cur_top === r_final_top) {
					clearInterval(mid_btn_r.timer);
					mid_btn_r.timer = null;
				}
			},3);
		} else {
			return false;
		}
	}

	// 输入框背景高亮
	// 禁止输入框复制黏贴
	var oinput = document.getElementsByTagName('input');
	for (var i = 0; i < oinput.length; i++) {
		oinput[i].index = i;
		if (oinput[i].getAttribute('type') === "text" || oinput[i].getAttribute('type') === "number" ) {
			oinput[i].onfocus = function () {
				this.className = "input_hl";
				this.select();
			}
			oinput[i].onblur = function () {
				this.className = "";
			}
			oinput[i].onpaste = function () {
				return false;
			}
			oinput[i].oncopy = function () {
				return false;
			}
		}
	}
	//textarea输入高亮以及字数提示
	var otextarea = document.getElementById('remarks');
	var i_textarea = document.getElementsByTagName('i')[0];
	var max_textarea = otextarea.getAttribute('maxlength');

	for (var i = 0; i < otextarea.length; i++) {
		otextarea[i].onfocus = function () {
			this.select();
			this.className = "input_hl";
		}
		otextarea[i].onblur = function () {
			this.className = "";
		}
	}
	otextarea.oninput = otextarea.onpropertychange = function (e) {
		var len = String(this.value).replace('^\x00-\xff','aa').length;
		if (len <= max_textarea) {
			i_textarea.innerHTML = max_textarea - len;
		}
	}
	//动态“婚姻”二级下拉菜单，代码有待完善，应该具有自适应性。
	var marriage = document.getElementById('marriage');
	var marriage_detail = document.getElementById('marriage_detail');
	var m_select = marriage.getElementsByTagName('select')[0];
	m_select.onchange = function () {
		marriage_detail.innerHTML = "";
		if (this.value != "0"){
			switch(this.value){
				case "1":
					var m_1 = ["请选择", "单身主义", "离异", "征友"];
					var m_d_ob1 = "";
					for (var i = 0; i < m_1.length; i++) {
						m_d_ob1 += '<option value = "' + i + '">' + m_1[i] + '</option>';
					}
					marriage_detail.innerHTML = '<select>' + m_d_ob1 + '</select>';
					break;
				case "2":
					var m_2 = ["请选择", "美满", "再婚", "分居"];
					var m_d_ob2 = "";
					for (var i = 0; i < m_2.length; i++) {
						m_d_ob2 += '<option value = "' + i + '">' + m_2[i] + '</option>';
					}
					marriage_detail.innerHTML = '<select>' + m_d_ob2 + '</select>';
					break;
			}
		}
	}
	// 生日栏只能输入数字
	var obirth = document.getElementById('birth');
	var birth_input = obirth.getElementsByTagName('input');
	for (var i = 0; i < birth_input.length; i++) {
		birth_input[i].onkeyup = function () {
			this.value = this.value.replace(/\D/g,'');
		}
	}

}
// 离开页面前的确认框
window.onbeforeunload = function (e) {
	e.returnValue = "确认离开页面吗";
}