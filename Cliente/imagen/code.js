var image = document.getElementById('image');
var height = image.height;
var width = image.width;

var footer = document.createElement('footer');
var content = document.createTextNode('copyrigth Fernando');
footer.appendChild(content);
document.body.appendChild(footer);

function restore(){
  image.height = height;
  image.width = width;

  document.getElementById('big').disabled = false;
  document.getElementById('small').disabled = false;
}

function big(){
  image.height += 10;
  image.width += 10;

  if (image.height > height * 2 && image.width > width * 2) {
    document.getElementById('big').disabled = true;
  }
  else {
    document.getElementById('small').disabled = false;
  }
}

function small(){
  image.height -= 10;
  image.width -= 10;

  if(image.height < height / 2 && image.width < width / 2) {
    document.getElementById('small').disabled = true;
  }
  else {
    document.getElementById('big').disabled = false;
  }
}

function remove(){
  footer.parentNode.removeChild(footer);
}
