function getName(name) {
  var titleName = document.getElementById(name).getAttribute("id");
  document.getElementById("exampleModalLabel").innerHTML = titleName;

  var imgSrc = document.getElementById(name).getAttribute("src");
  var img = document.createElement("IMG");
  img.setAttribute("src",imgSrc);
  img.setAttribute("class","modalArt img-fluid")
  
  imageBody.append(img);  
}


function emptyModal() {
  $('.modalArt').remove();
}