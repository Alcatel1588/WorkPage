
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
			var block = document.getElementById("snitch");
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
		x_block = block.offsetLeft;
		y_block = block.offsetTop;
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
		block.style.top = new_y + "px";
		block.style.left = new_x + "px";
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
			
			
	  