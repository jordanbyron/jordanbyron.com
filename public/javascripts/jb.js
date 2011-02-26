JB = {};
JB.Slideshow = {};

JB.Slideshow.start = function(){
  JB.Slideshow.timer = setInterval("JB.Slideshow.next();", 7000);
};

JB.Slideshow.stop = function(){
  clearInterval(JB.Slideshow.timer);
};

JB.Slideshow.next = function(){
  current = $('#photos img.top');
  next    = current.next();
  
  if(next.length == 0) next = $('#photos img:first');
  
  current.toggleClass('top');
  next.toggleClass('top');
};