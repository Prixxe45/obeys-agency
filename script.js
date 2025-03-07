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
tl.to(".line h2",{
  animationName:"anime",
  opacity:1,
})
tl.to("#loader",{
  opacity:0,
  duration:0.2,
  delay:3.3,
});
tl.to("#page1",{
  delay:0.2,
  y:1200,
  duration:0.5,
  opacity:0,
  ease:Power4,
})
tl.to("#loader",{
  display:"none",
})