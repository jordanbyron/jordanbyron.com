JB.Navigation.init = function(){
  $('#nav a').click(function(e){
    JB.Navigation.select($(this).attr('data-section'));
    
    e.preventDefault();
  });
  
  $('.section a').attr('target', '_blank');
  
  
  var url     = document.location.toString();
  var section = $('#nav a:first').attr('data-section');
  
  if(url.match('#')) section = url.split('#')[1];
  
  JB.Navigation.select(section);
}

JB.Navigation.select = function(section){
  if(JB.Navigation.current() == section) 
    return;
  
  if(JB.Navigation.current() == undefined){
    $('#' + section).show();
  }
  else {
    $('.section:visible').fadeOut(function(){
      $('#' + section).fadeIn();
    });
  }
  
  $('#nav a').removeClass('current');
  
  $('#nav a[data-section=' + section + ']').addClass('current');
}

JB.Navigation.current = function(){
  return $('#nav a.current').attr('data-section');
}