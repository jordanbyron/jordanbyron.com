JB = {
  Slideshow: {}
};

JB.Slideshow.init = function(){
  $('#play-pause').click(function(){ JB.Slideshow.toggle(); });
  $('#next').click(function(){ JB.Slideshow.next(true); });
  $('#previous').click(function(){ JB.Slideshow.previous(true); });
  
  JB.Slideshow.start();
}

JB.Slideshow.toggle = function(){
  if(JB.Slideshow.running())
    JB.Slideshow.stop();
  else
    JB.Slideshow.start();
}

JB.Slideshow.running = function(){
  return JB.Slideshow.timer != null;
}

JB.Slideshow.start = function(){
  JB.Slideshow.timer = setInterval("JB.Slideshow.next();", 7000);
  $('#play-pause').removeClass('play').addClass('pause');
  return "Slideshow started";
};

JB.Slideshow.stop = function(){
  clearInterval(JB.Slideshow.timer);
  JB.Slideshow.timer = null;
  $('#play-pause').removeClass('pause').addClass('play');
  return "Slideshow stopped"
};

JB.Slideshow.reset = function(){
  if(JB.Slideshow.running()){
    clearInterval(JB.Slideshow.timer);
    JB.Slideshow.timer = setInterval("JB.Slideshow.next();", 7000);
  }
}

JB.Slideshow.next = function(resetTimer){
  if(resetTimer) JB.Slideshow.reset();
  
  current = JB.Slideshow.current();
  next    = current.next('img.photo');
  
  if(next.length == 0) next = $('#photos img.photo:first');
  
  JB.Slideshow.show(next);
};

JB.Slideshow.previous = function(resetTimer){
  if(resetTimer) JB.Slideshow.reset();
  
  current  = JB.Slideshow.current();
  previous = current.prev('img.photo');
  
  if(previous.length == 0) previous = $('#photos img.photo:last');
  
  JB.Slideshow.show(previous);
};

JB.Slideshow.show = function(picture){
  JB.Slideshow.current().toggleClass('top');
  picture.toggleClass('top');
}

JB.Slideshow.current = function(){
  return $('#photos img.photo.top');
}