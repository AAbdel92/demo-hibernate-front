$(document).ready(function() {
	
	$('#logForm').submit(function () {
		$.ajax({
			method : "POST",
			url: "/login?username=" + $('#username').val() + "&password=" + $('#password').val();,
			success: function(data) {
				$('')
			}
		});
	});
	
});