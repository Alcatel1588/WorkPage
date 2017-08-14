
$(document).ready(function(){
			// hide #back-top first
			$("#back-top").hide();
			$("#back-hadoop").hide();
			new Clipboard('.btn-clipboard');
			
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
				
