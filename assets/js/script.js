
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
			
		});
				
			//Функция отображения PopUp
			function PopUpShow(){
				$("#popup1").show();
			}
			//Функция скрытия PopUp
			function PopUpHide(){
				$("#popup1").hide();
			}