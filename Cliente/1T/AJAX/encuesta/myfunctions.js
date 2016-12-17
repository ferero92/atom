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
          return ajax;
        }
      }
    };
}
