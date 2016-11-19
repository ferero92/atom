function vote() {

  var lan = document.getElementsByName('lan');
  var vote;

  for (var i = 0; i < lan.length; i++) {
    if(lan[i].checked)
      vote = lan[i].value;
  }
  load('http://localhost/encuesta/vote.php?vote=PHP');
}

function load(url) {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  ajax.open('GET', url, true);
  ajax.send(null);

  ajax.onreadystatechange = function (){
    if(ajax.readyState == 4){
      if(ajax.status == 200){
        stadist();
      }
    }
  };
}

function stadist() {

  alert('ok');
  alert(ajax.responseText);
}

// function load() {
//
//   if(window.XMLHttpRequest) {
//     ajax = new XMLHttpRequest();
//   }
//   else if (window.ActiveXObject) {
//     ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
//   }
//
//   var lan = document.getElementsByName('lan');
//   var vote;
//
//   for (var i = 0; i < lan.length; i++) {
//     if(lan[i].checked)
//       vote = lan[i].value;
//   }
//
//   ajax.onreadystatechange = read;
//
//   ajax.open('GET', 'http://localhost/encuesta/vote.php?vote='+vote, true);
//   ajax.send(null);
//
//   document.getElementsByTagName('fieldset')[0].innerHTML = '<img src="load.gif" style="width: 50px; height: 50px;"/>';
// }

// function read(){
//
//   if(ajax.readyState == 4){
//     if(ajax.status == 200){
//       stadist();
//     }
//   }
// }
