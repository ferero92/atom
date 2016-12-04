function load(url, fun) {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }
  ajax.onreadystatechange = function () {
    if(ajax.readyState == 4)
      if(ajax.status == 200)
        fun(ajax);
  };
  ajax.open('GET', url, true);
  ajax.send(null);
}

function loadPost(url, par, fun) {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }
  ajax.onreadystatechange = function () {
    if(ajax.readyState == 4)
      if(ajax.status == 200)
        fun(ajax);
  };
  ajax.open('POST', url, true);
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ajax.send(par);
}
