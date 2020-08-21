$(document).ready(function(){
/*function goLogin(){
	$('#signup').hide()
	$('#signin').show()
}
function goRegister(){
	$('#signup').show()
	$('#signin').hide()
}
*/

$('btn').click(function(){
	if($("#password").val()==="12345"&& $("#account").val()==="admin"){
		console.log("access accepted")
		window.location.replace("website bank.html");	
	}else{
		$("#msgerr").show();
	}
});
});  

