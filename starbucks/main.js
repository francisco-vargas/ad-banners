var easeInVar = Power1.easeIn,
    easeInOut2 = Power3.easeOut,
    easeOutVar = Power1.easeOut,
    easeInOut = Power1.easeInOut,
    easeOutBack = Back.easeOut.config(1.2),
    lT = 1,
    mT = 0.6,
    sT = 0.3
    ;

function init() {

     var tl = new TimelineMax();
     tl
     .from('#text1', sT, {scale:0, rotation:0, easing:easeOutBack})
     .staggerFrom('.starAbove',sT, {top:150, left:-20, scale:0.2, rotation:-30, easing:easeInOut2}, sT/2)
     .from('.starBelow', lT, {top:120, left:100, scale:0.2, rotation:90, easing:easeInOut2}, "-="+lT)
     .from('#cell2', lT, {top:110, left:-44, scale:0.6, rotation:0, easing:easeInOut2}, "-="+lT)
     .from('#bill', lT, {top:120, left:-64, scale:0.5, rotation:0, easing:easeInOut2}, "-="+lT)
     .from('#text2', sT, {scale:0, rotation:0, easing:easeOutBack})
     .from('#cta', sT, {scale:0, rotation:0, easing:easeOutBack})


     return tl;
     }

     elem("#cta").onmouseover = function(){
          var tl = new TimelineMax();
          tl
          .to('#cta', sT/2, {scale: 1.02, ease: easeInVar})
          .to('#cta', sT/2, {scale: 0.98, ease: easeInVar})
          .to('#cta', sT/2, {scale: 1, ease: easeInVar})
     }

init();

function elem(element) {
  return document.querySelector(element);
}
