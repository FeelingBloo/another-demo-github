$(document).ready(function(){
    
    $(".dropdown").click(function(){
        $(".dropdown-content").slideToggle("fast");
    });
    
    $(".material-icons").click(function(){
        $(".nav-list").slideToggle("fast");
    });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myslide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

$(document).ready(function(){

	// hide #back-top first
	$("#gohome").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#gohome').fadeIn();
			} else {
				$('#gohome').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#gohome').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
    

});
