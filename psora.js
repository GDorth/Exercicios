$(document).ready(function () { 
	$(".mn").click(function(){
		$(".submn1").slideDown ("slow");
		$(this).next ("submn1").slideDown("slow");
	})
 });