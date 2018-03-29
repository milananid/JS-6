$(function() {

  var elems = $('.hide-scroll');

  var threshold = [];
  var increment = 0.01;
  for (let i=0; i<1; i+=increment) {
		threshold.push(i);
	}

  TweenMax.set('.hide-scroll h1, .hide-scroll p, .hide-scroll img', {
    opacity: 0,
    y: 100,
  });

  var config = {
  	root: null,
    rootMargin: '0px', // top right bottom left
    threshold: threshold
  };
  //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#The_root_element_and_root_margin


function showBox(t, r, b, l){
	$('body').append('<div id="box" style="width:'+($(window).width()-r-l)+'px;height:'+($(window).height()-t-b)+'px;left:'+l+'px;top:'+t+'px;background:rgba(0,0,0,.5);position:fixed;z-index:10000;"></div>');
}

  function onIntersection(els) {
    els.forEach(function(el){
      if (el.intersectionRatio > 0) {
        observer.unobserve(el.target);
        //fai qualche cosa su el.target
        ratio = Math.round(el.intersectionRatio * 100);
        $(el.target).find('span').html(ratio)
        //console.log(el);
        if(ratio >= 20){
        	 //l'elemento è entrato
        	 $(el.target).addClass('show');
           var myObjs =  $(el.target).children();
           TweenMax.staggerTo(myObjs, 1, {opacity:1, y:0, ease:Expo.easeInOut}, 0.5);
        }else{
        	 //l'elemento è uscito
        }
      }
    });
  }

  if (!('IntersectionObserver' in window)) {
    //FALLBACK
    elems.css({opacity : 1});
  } else {

   	//showBox(400, 100, 100, 100);
    var observer = new IntersectionObserver(onIntersection, config);
    elems.each(function(index, elem){
      observer.observe(elem);
    });
    $(window).on({
      scroll:function(){
        console.log($(window).scrollTop())
        elems.each(function(index, elem){
          observer.observe(elem);
        });

        //scroldirectiondetect
        var scrlA =
      }
    });
  }






});



//https://jsfiddle.net/MUvsG/487/
/*
dato lo script modificarlo in modo che allow scroll di pagina gli elementi interessati
entrino nella viewport con un'animazione realizzata sfruttando lo stagger di gsap.
Allo stesso modo gli elementi devono poter uscire dalla viewport in maniera consona
alla direzione dello scroll di pagina.
*/
