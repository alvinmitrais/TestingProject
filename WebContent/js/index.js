/**
 * 
 */
function onClickButton(){
	document.getElementById("desc").innerHTML = "Non-Boring Text here";
}

$('#form1').on('submit', function () {
    alert('Form submitted!');
    return false;
});