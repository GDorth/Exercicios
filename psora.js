$(document).ready(function () { 
	$(".mn").click(function(){
		$(".submn1").slideUp ("slow");
		$(this).next ("submn1").slideDown("slow");
	})
 });