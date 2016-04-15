window.onload = function () {
	// 输入框背景高亮
	// 禁止输入框复制黏贴
	var oinput = document.getElementsByTagName('input');
	for (var i = 0; i < oinput.length; i++) {
		oinput[i].index = i;
		if (oinput[i].getAttribute('type') === "text") {
			oinput[i].onfocus = function () {
				this.className = "input_hl";
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
	var otextarea = document.getElementsByTagName('textarea');
	for (var i = 0; i < otextarea.length; i++) {
		otextarea[i].onfocus = function () {
			this.className = "input_hl";
		}
		otextarea[i].onblur = function () {
			this.className = "";
		}
	}
	var quit = document.getElementById('quit');
	quit.onclick = function () {
		window.location.href = "../index.html";
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