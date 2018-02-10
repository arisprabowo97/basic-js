$(function() {

	//global variables
	var $window		= $(window), //window
		$document	= $(document), //document
		$body		= $('body'); //body

	function preloader(){

		$body.addClass('overHidden');

		//preloader variables
		var preLoader	= $('div.preLoader'), //selector
			text 		= 'a', //text loader
			textSplit	= text.split(''),
			textLength	= textSplit.length;
			wHeight		= $window.height();

		//make textloader
		preLoader.append("<div class ='textLoader'></div>");

		//find span in textloader
		var textLoader 		= preLoader.find('.textLoader'),
			fTextLoader		= textLoader.find('span');

		//add span in text loader
		if(textLength > fTextLoader.length){
			$.each(new Array(textLength), function(i){

				textLoader.append("<span>"+textSplit[i]+"</span>");
				$('.textLoader>span:nth-child('+(i+1)+')').css({
					'left': Math.floor(Math.random()*100)+'%',
					'top' : Math.floor(Math.random()*100)+'%'
				});

			});
		};

		$window.on('load', function(){
			preLoader.delay(2500).fadeOut();
			setTimeout(function(){
				$body.removeClass('overHidden');
			}, 3000);
		});

	}

	preloader();

});