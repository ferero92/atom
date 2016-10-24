var result = [0, 0, 0, 0];
var total = 0;
var vote = document.getElementsByName('choose');
var list = document.getElementById('list');
var string = "";

function voto() {

  for (var i = 0; i < vote.length; i++) {
    if(vote[i].checked || list.selectedIndex == i +1){
      result[i]++;
      vote[i].checked = false;
    }
  }
  total++;
  print();
  list.options[0].selected = true;
}

function print() {

  string = "";

  for (var i = 0; i < vote.length; i++) {
      string += "<p>" + vote[i].value + " " + result[i] + " votos " + porcentage(result[i]).toFixed(2) + "%</p>";
  }
  document.getElementById('result').innerHTML = string;
}

function porcentage(n) {

  if (total != 0) {
    return 100 * n / total;
  }
  else {
    return total;
  }
}

function add() {

  var form = document.getElementsByName('vote');
  var select = document.getElementById('list');
  var add = document.getElementById('add').value;

  var radio = document.createElement('input');
  radio.setAttribute("type", "radio");
  radio.setAttribute('name', "choose");
  radio.setAttribute('value', add);

  var option = document.createElement('option');
  option.setAttribute('value', add);

  var text = document.createTextNode(add);
  var conteint = document.createTextNode(add);
  result.push(0);

  form[0].appendChild(radio);
  form[0].appendChild(text);

  option.appendChild(conteint);
  list.appendChild(option);

  print();
}
