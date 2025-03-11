function loadingAnimation( ){
  var tl = gsap.timeline();

tl.from(".line h1",{
  y:150,
  stagger:0.2,
  duration:0.6,
  delay:0.5,
});
tl.from("#line1-part1, h2", {
  opacity:0,
  onStart: function() {
 var h5 = document.querySelector("#line1-part1 h5");
 var grow = 0;
 var int = setInterval(function() {
 if(grow === 99){
clearInterval(int);
 }
 grow++;
h5.innerHTML = grow;
},30);
  }
});
tl.to('.line h2',{
  animationName:"anime",
  opacity:1
})
tl.to("#loader",{
  opacity:0,
  duration:0.2,
  delay:0,
});
tl.from("#page1",{
  y:1600,
  delay:0.2,
  opacity:0,
  duration:0.5,
  ease:Power4,
})
tl.to("#loader",{
  display:"none",
})
tl.from("#nav",{
  opacity:0,
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1 ",{
  y:120,
  stagger:0.2
})

}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove",function(dets){
gsap.to("#crsr",{
  top:dets.y,
  left:dets.x,
})
})
Shery.makeMagnet("#nav-part2 h4", {
});
}
cursorAnimation();