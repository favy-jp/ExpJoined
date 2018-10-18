$(function(){
  if(document.getElementById('js-bxSlider') != null){
    $('#js-bxSlider').bxSlider({
      mode: 'fade',
      speed: 2000,
      auto: true
    });
  }
  if(document.getElementById('js-flexElementCompletion') != null){
    var column = 5;
    var addElement = column - $('.brandList__brand').length % column;
    if(addElement < column){
      var elementDOM = '';
      for(var i = 1; i <= addElement; i++){
        elementDOM = elementDOM + "<div class='brandList__brand'></div>";
      }
      $('#js-flexElementCompletion').append(elementDOM);
    }
  }
});
  

