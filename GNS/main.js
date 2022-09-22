var easeInVar = Power1.easeIn,
    easeInOut2 = Power3.easeOut,
    easeOutVar = Power1.easeOut,
    easeInOut = Power1.easeInOut,
    easeOutBack = Back.easeOut.config(1.2),
    generalTimeline = new TimelineMax(),
    lT = 1,
    mT = 0.6,
    sT = 0.3
    ;


function part1() {
  var tl = new TimelineMax();
  tl
  .set('.dustContainer', {rotation: 180})
  .to(".copyOne ", 0.3, {x: 300, ease:easeInOut2}, 0.6, '-=0.2')
  .to('.copyTwo', 0.3, {x: 140, ease:easeInOut2}, 0.6, '-=0.5')
  return tl;
  }

 function dust() {
   var tl = new TimelineMax();
   tl
  .fromTo('#cloud1',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.2, x:-35, rotation: 91, scale: 1 ,ease: easeInOut2})
  .fromTo('#cloud2',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.4, x:-70, y:30, rotation: 76, scale: 0.8 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud3',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.3, x:-39, rotation: 50, scale: 0.8 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud4',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.3, x:-40, rotation: 79, scale: 0.6 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud5',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.2, x:-15, rotation: 91, scale: 0.9 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud6',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.2, x:-95, rotation: 121, scale: 1 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud7',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.3, x:-24, rotation: 117, scale: 0.4 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud8',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.2, x:-83, rotation: 120, scale: 1 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud9',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.3, x:-40, rotation: 119, scale: 0.6 ,ease: easeInOut2}, '-=0.4')
  .fromTo('#cloud10',0.4,{autoAlpha:0, x: 0}, {autoAlpha:0.3, x:-25, y:-20, rotation: 131, scale: 0.8 ,ease: easeInOut2}, '-=0.4')
  .to('#cloud1', 0.5,{autoAlpha:0, x:-59,ease: easeOutVar}, '-=0.4')
  .to('#cloud2', 0.5,{autoAlpha:0, x:-101, y:50, ease: easeOutVar}, '-=0.4')
  .to('#cloud3', 0.4,{autoAlpha:0, x:-45,ease: easeOutVar}, '-=0.5')
  .to('#cloud4', 0.4,{autoAlpha:0, x:-65,ease: easeOutVar}, '-=0.4')
  .to('#cloud5', 0.4,{autoAlpha:0, x:-48,ease: easeOutVar}, '-=0.4')
  .to('#cloud6', 0.5,{autoAlpha:0, x:-119,ease: easeOutVar}, '-=0.4')
  .to('#cloud7', 0.3,{autoAlpha:0, x:-57,ease: easeOutVar}, '-=0.5')
  .to('#cloud8', 0.5,{autoAlpha:0, x:-112,ease: easeOutVar}, '-=0.3')
  .to('#cloud9', 0.6,{autoAlpha:0, x:-65,ease: easeOutVar}, '-=0.5')
  .to('#cloud10', 0.4,{autoAlpha:0, x:-32, y:-30, ease: easeOutVar}, '-=0.6')
return tl;
}

function holdTime() {
  var tl = new TimelineMax();
  tl
  .set('.jersey', {rotation: 0, transformOrigin:"center top",})
}

function part2() {
var tl = new TimelineMax();
const rotateJersey = gsap.from('.jersey', 20, { rotation: 3, transformOrigin:"center top", ease: 'elastic.out( 5, 0.1)', repeat: -1}, "-=0.2")
tl
.to('.sceneTwo_Cont', 0.5, {x: 300, ease:easeInOut2,delay: 1})
.to('.copyFive', 0.5, {x: 300,ease:easeInOut2}, 0)
.add(rotateJersey, "-=0.2")
.to('.copyFive', 0.5,{x: 600, ease:easeInOut2}, 3.8)
.to('.copySix', 0.5, {x: 300, ease:easeInOut2})
.to('.copySix', 0.5, {delay: 1.75})
.call(() => rotateJersey.pause())
.to('.sceneThree_Cont', 0.5, {x: 300, ease:easeInOut2, delay: 0.4})
.fromTo('.copySeven', 0.5,{x:0}, {x: 224, ease:easeInOut2}, "+=0.2")
.to('.cta', 0.5, {x: 321, ease:easeInOut2})
.to('.cta', 0.2, {scale: 1.05, repeat:1, repeatDelay:0.1, yoyo: true, ease:easeInOut2}, "+=1.5")
return tl;
}

function elem(element) {
  return document.querySelector(element);
}

elem(".cta").onmouseover = function(){
     var tl = new TimelineMax();
     tl
     .to('.cta', sT/2, {scale: 1.02, ease: easeInVar})
     .to('.cta', sT/2, {scale: 0.98, ease: easeInVar})
     .to('.cta', sT/2, {scale: 1, ease: easeInVar})
}

var masterTimeline = new TimelineMax({delay:1.5});
masterTimeline
.add(part1())
.add(dust(), "-=0.2")
.add(part2(), "-=0.1");
