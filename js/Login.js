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
	//动态“婚姻”二级下拉菜单
	var marriage_items = [["0:请选择","1:未婚","2:已婚"],["1:离异","2:单身","3:征友"],["1:美满","2:分居","3:再婚"]];
	var marriage = document.getElementById('marriage');
	var marriage_detail = document.getElementById('marriage_detail');
	function marriageMatch(arr,callback) {
		for (var i = 0; i < arr.length; i++) {
			if (callback.call(arr[i], i, arr[i]) === false) {
				break;
			}
		}
		return arr;
	}
	marriageMatch(marriage_items, function (i) {
		if (i === 0) {
			marriage_fill(marriage, marriage_items[0]);
		}
	});
	var m_select = marriage.getElementsByTagName('select')[0];
	var m_d_select = marriage_detail.getElementsByTagName('select')[0];
	m_select.onchange = function () {
		marriage_fill(marriage_detail,marriage_items[this.value]);
	}
	function marriage_fill(obj, items) {
		var op = "";
		marriageMatch(items, function (j) {
			op += '<option value="' + (j + 1) + '">' + (items[j].replace(/\d+:/, '')) + '</option>';
		});
		obj.innerHTML = '<select>' + op + '</select>';
		return obj;
	}
}