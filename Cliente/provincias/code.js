function select() {

  replace();

  var prov = document.getElementById('provincia');
  
  if(prov.value != 0){
    var pueblos = document.getElementById(prov.options[prov.value].innerHTML).innerHTML.split(",");

    var select = document.getElementById('pueblos');

    for (var i = 0; i < pueblos.length; i++) {

      var option = document.createElement('option');

      option.appendChild(document.createTextNode(pueblos[i]));
      select.appendChild(option);
    }
  }
}

function replace() {

  var list = document.getElementById('pueblos');
  list.parentNode.removeChild(list);

  var pueblos = document.createElement('select');
  pueblos.setAttribute('id', 'pueblos');

  var form = document.getElementById('form');
  form.appendChild(pueblos);
}
