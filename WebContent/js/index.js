/**
 * 
 */
function onClickButton(){
	document.getElementById("desc").innerHTML = "Non-Boring Text here";
}

//$('#form1').on('submit', function () {
//	
//	
//    alert('Form submitted!');
//    return false;
//});

function validateInputs(){
	var reg = new RegExp("([A-Z]|[a-z])");
	var firstName = document.getElementById("txt1");
	var lastName = document.getElementById("txt2");
	
}

function test(){
	validateInputs();
	return false;
}