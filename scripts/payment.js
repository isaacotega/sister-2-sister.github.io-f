$(document).ready(function() {
	
	$("#paymentForm").submit(function() {
	
		event.preventDefault();
		
		$(this).find("#submitButton").html("<div class='loader'></div>");
		
		setTimeout(function() {
	
			alert("Validated");
		
			$("#paymentForm #submitButton").css({border: "5px solid green"}).html("Checkout").attr("disabled", "true");
			
		}, 500);
	
	})

});