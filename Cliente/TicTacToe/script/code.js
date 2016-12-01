var user = 0;

function turn(cell) {

  if(user < 6){

    var img = cell.getElementsByTagName('img')[0];
    var src;

    if(user % 2 == 0)
      src = 'img/o.png';
    else
      src = 'img/x.png';

    img.setAttribute('src', src);
  }
  else {


  }


  user++;

}

function win(cell, src) {

  var cells = document.getElementsByTagName('td');
  var row = cell.parentNode;



}

function move(cell, src) {


}
