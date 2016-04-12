window.onload = function () {
	// 输入框背景高亮
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
}