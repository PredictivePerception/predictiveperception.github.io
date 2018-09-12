function fade(){
 var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".popUp{visibility:hidden}";
}

function tempAlert(){
 var pop = document.getElementsByClassName('popUp');
  var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".popUp{visibility:visible}";

	window.setTimeout("fade();", 500);
}


function tempAlertFast()
{
 var pop = document.getElementsByClassName('popUp');
  var newStyles = document.createElement('style')
       document.head.append(newStyles);
       newStyles.innerHTML = ".popUp{visibility:visible}";

	window.setTimeout("fade();", 50);
}

function findPosition(){
	var offsets = document.getElementsByClassName('slider').getBoundingClientRect();
	var left = offsets.left;
	console.log(left);
	return left;
	}