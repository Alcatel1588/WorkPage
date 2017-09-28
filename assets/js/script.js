
$(document).ready(function(){
			// hide #back-top first
			PopUpHide();
			$("#back-top").hide();
			$("#back-hadoop").hide();
			new Clipboard('.btn-clipboard');
			
			var div = document.createElement('div');
			div.className = "alert alert-success";
			div.innerHTML = "<a href=\"http://localhost:5080/polyanalyst/help/eng/toc.html\" target=\"_blank\">Winter is coming ... </a>";

			document.body.appendChild(div);
			
			var ie = 0;
			var op = 0;
			var ff = 0;
			var browser = navigator.userAgent;
			if (browser.indexOf("Opera") != -1) op = 1;
			else {
				if (browser.indexOf("MSIE") != -1) ie = 1;
				else {
				  if (browser.indexOf("Firefox") != -1) ff = 1;
				}
			  }
			var pr_client_left = document.getElementById("bt_client_left");
			pr_client_left.onmouseenter = function() { // курсор зашёл на элемент-родитель [mozilla.org]
    			var find_div = document.getElementById("bt_client");
    			find_div.style.width = 164+"px";
    			find_div.style.right = 72+"px";
    			this.style.width = 82+"px";
    			var div_ico = document.createElement('div');
    			div_ico.setAttribute("class","hide_ico");
    			div_ico.setAttribute("id","client_hide_ico");
    			div_ico.style.top = 2+"px";
    			div_ico.style.left = 27+"px";
    			div_ico.setAttribute("style","background: url(assets/css/images/client_open.png) no-repeat; margin-top: -44px; margin-left: 20px;");
    			div_ico.setAttribute("title","Open");
    			div_ico.innerHTML = "<a style=\"height:100%; width:100%; display:inline-block;\" href=\"https://localhost:5043/polyanalyst/static/paclient/pa6client.html?locale=eng\"target=\"_blank\"></a>";
    			this.appendChild(div_ico);
  			}
  			pr_client_left.onmouseleave = function() { // курсор зашёл на элемент-родитель [mozilla.org]
    			var find_div = document.getElementById("bt_client");
    			find_div.style.width = 92+"px";
    			find_div.style.right = 0+"px";
    			this.style.width = 20+"px";
    			find_div = document.getElementById("client_hide_ico");
    			find_div.parentNode.removeChild(find_div);
  			}
			var block = document.getElementById("menu_panel_move");
			var main_block = document.getElementById("menu_panel");
			delta_x = 0;
			delta_y = 0;
			  /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
			  block.onmousedown = saveXY;
			  if (op || ff) {
				block.addEventListener("onmousedown", saveXY, false);
			  }
			  document.onmouseup = clearXY;
			  block.ondragstart = function() {
					return false;
				};
			//==
			/* При нажатии кнопки мыши попадаем в эту функцию */
	  function saveXY(obj_event) {
		/* Получаем текущие координаты курсора */
		if (obj_event) {
		  x = obj_event.pageX;
		  y = obj_event.pageY;
		}
		else {
		  x = window.event.clientX;
		  y = window.event.clientY;
		  if (ie) {
			y -= 2;
			x -= 2;
		  }
		}
		/* Узнаём текущие координаты блока */
		x_block = main_block.offsetLeft;
		y_block = main_block.offsetTop;
		/* Узнаём смещение */
		delta_x = x_block - x;
		delta_y = y_block - y;
		/* При движении курсора устанавливаем вызов функции moveWindow */
		document.onmousemove = moveBlock;
		if (op || ff)
		  document.addEventListener("onmousemove", moveBlock, false);
	  }
	  function clearXY() {
		document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
	  }
	  function moveBlock(obj_event) {
		/* Получаем новые координаты курсора мыши */
		if (obj_event) {
		  x = obj_event.pageX;
		  y = obj_event.pageY;
		}
		else {
		  x = window.event.clientX;
		  y = window.event.clientY;
		  if (ie) {
			y -= 2;
			x -= 2;
		  }
		}
		/* Вычисляем новые координаты блока */
		new_x = delta_x + x;
		new_y = delta_y + y;
		main_block.style.top = new_y + "px";
		main_block.style.left = new_x + "px";
	  }
			//==
			// fade in #back-top
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 1000) 
						{
						$('#back-top').fadeIn();
						} else 
						{
							$('#back-top').fadeOut();
						}
					});
				$(window).scroll(function () {
					if ($(this).scrollTop() > 1000) 
						{
						$('#back-hadoop').fadeIn();
						} else 
						{
							$('#back-hadoop').fadeOut();
						}
					});
					// scroll body to 0px on click
				$('#back-top a').click(function () {
					$('body,html').animate({
						scrollTop: 1000
						}, 800);
				});
				$('#back-hadoop a').click(function () {
					$('body,html').animate({
						scrollTop: 2700
						}, 800);
					return false;
				});
				$('#hadoop_p span').click(function () {
					$('body,html').animate({
						scrollTop: 2700
						}, 800);
					return false;
				});
				
			});
			
			var pics = ["images/gif/little-moth.gif",
						"images/gif/sinek.gif", 
						"images/gif/two.gif"];
			var img = document.getElementById("moth-img"), num = 0;
					
			img.addEventListener("click", changeImg);
			function changeImg(){
				num<pics.length-1 ? num++ : num=0;
				img.src = pics[num];
			}
			
			var up_button = document.getElementById("up"), down_button = document.getElementById("down");
			
		});
				
			//Функция отображения PopUp
			function PopUpShow(){
				$("#popup1").show();
			}
			//Функция скрытия PopUp
			function PopUpHide(){
				$("#popup1").hide();
			}
			
			
	  