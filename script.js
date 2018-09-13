function fade(){
 var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".popUp{visibility:hidden;}";
}

function tempAlert(){
  var pop = document.getElementsByClassName('popUp');
  var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".popUp{visibility:visible}";
	window.setTimeout("fade();", 200);
}

function fadeGo(){
 var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".go{visibility:hidden;}";
}

function goAlert(){
  var alertGo = document.getElementsByClassName('go');
  var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".go{visibility:visible;}";
	window.setTimeout("fadeGo();", 300);
}

