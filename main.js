var users = [];




$('#gologin').on('click',function(){
	$('#loginpage').show()
	$('#registerpage').hide()
})

$('#goregister').on('click',function(){
	$('#loginpage').hide()
	$('#registerpage').show()
	
})


$("#signUp").on('click', function(){
	var name = $('#user').val();
	var email = $('#em').val();
	var password = $('#pass').val();
    users.push()
    });



// $('#user').val()===user['Basma Ben Nasr'];
// $('#em').val()===user['basmaben.97@gmail.com'];
// $('#pass').val()===user['basma123'];

//$('.btn')on('click',function(){


//})

/*

var user = {
	username : '',
	email : '',
	password : ''
}

*/