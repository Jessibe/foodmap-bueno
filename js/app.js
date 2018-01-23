//función vista-splash
$(function(){
 setTimeout(function() {
    $('#view-splash').fadeOut(500);
 }, 2000);
});
//selector
function tipoComida(){
}
function loadPage(){
  $('.modal').modal();
  $("#selec-tipo").change(tipoComida)
}
var $tipo=$("#selec-tipo");

function tipoComida(){
  var valor=document.getElementById('selec-tipo').value
  for(var i in data){
    if(data[i].food === valor){
    var hrefImage=document.createElement('a');
    hrefImage.href=$('.modal');
    var image=document.createElement('img');
    image.src=data[i].imagen;
    hrefImage.appendChild(image);
    document.getElementById('text-list').appendChild(hrefImage);
  }
  }
}


$(document).ready(loadPage);
