$(document).ready(main);

var i = 1;

function main() {
	$('.menu_bar').click(function(){
		//$('nav').toggle();

		if(i == 1){
			$('nav').animate({
				left: '0'
			});
			i = 0;
		} else {
			i = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
    
    
}

$(document).on('click', '#scroll', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});