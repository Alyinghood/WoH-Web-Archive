$(document).ready(function(){
	viewStatus = 0;
	var Images = new Array();
	$('body').append('<div id="view">loading...</div>');

	$('#thumb a').each(function(){
		var photo = $(this).attr('href');
		Images.push(photo);
	});
	$.preloadImages(Images);

	$('#thumb a').bind('tap',function(e){
		if(viewStatus == 0){
			var url = $(this).attr('href');
			var photoView = $('#view');
			photoView.html('<img src="' + url + '" />');
			photoView.children('img').bind("load", function(){
			var top =
			    (document.documentElement.scrollTop > 0)
			        ? document.documentElement.scrollTop
			        : document.body.scrollTop;
				photoView.css('top',top).addClass('load');
				photoView.fadeIn();
			});
		  setTimeout(function(){viewStatus = 1;}, 100);
		};
		return false;
	});

	$(window).bind('tap',function(){
		if(viewStatus == 1){
			$('#view').fadeOut('slow',function(){
				$(this).removeClass('load');
				$('#view img').remove();
			});
		  setTimeout(function(){viewStatus = 0;}, 100);
			return false;
		};
	});
});