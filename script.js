function homePageAnimation(){
  // alert("hey")

gsap.set('.slidem',{
    scale: 5,
})

let tl = gsap.timeline({

    scrollTrigger:{
        trigger: '.home',
        scrub: .5,
        start: 'top top',
        end: 'bottom bottom',
        // markers: true,
        
        // pin:true
    }
})

tl.to(".vdodiv",{

    '--clip': '0%',
    ease: Power2,
},'a')

.to('.slidem',{
    scale: 1.1,
    ease: Power2,
},'a')

.to('.row.lft',{
    xPercent: -10,
    ease: Power4,
    stagger: 0.03,
},'b')

.to('.row.rgt',{
    xPercent: 10,
    ease: Power4,
    stagger: 0.04,
},'b')

let t2 = gsap.timeline()

// t2.to('.box', {
//   scaleX: 1.3,   // visually wider
//   transformOrigin: "left center",
//   ease: "power2.out",
// });

// t2.to("body", {
//   scrollTrigger: {
//     trigger: ".craft",
//     start: "top top",
//     scrub: .5,
//     end: "bottom top",
//     // markers: true,
//     onEnter: () => document.body.setAttribute("theme", "cyan"),
//     onLeaveBack: () => document.body.setAttribute("theme", "black"),
//   }
// });




t2.to('.box', {

    scrollTrigger:{
        trigger: '.cards',
        scrub: .5,
        start: 'top top',
        end: 'bottom center',
        markers: true,
        
        // pin:true
    },
    // borderWidth: "5px",
    width: "78%",   // or "90%" or "100%"
  ease: "power4.out",
  stagger: 0.3,
  backgroundColor: "black",
  color: "var(--cyan)"
});
}

function realPageAnimation(){
// gsap.to("body", {
//   scrollTrigger: {
//     trigger: ".real",
//     start: "top top",
//     end: "bottom top",  // <--- VERY IMPORTANT
//     markers: true,
//     onEnter: () => document.body.setAttribute("theme", "salmon"),
//     onLeaveBack: () => document.body.setAttribute("theme", "black"),
//   }
// });

gsap.to('.slide',{
  scrollTrigger:{
    trigger: ".real",
    start: "top top",
    end: "bottom bottom",
    // markers: true,
    scrub: 0.8,
  },
  xPercent: -200,
  ease: Power4
})



}

function teamAnimation(){
  document.querySelectorAll(".listelem").forEach((el) => {
  const img = el.querySelector(".imgdiv");

  // Initial state
  gsap.set(img, {
    xPercent: -50,
    yPercent: -50,
    scaleY: 0,
    opacity: 0,
    transformOrigin: "center center",
  });

  // 🔥 Elastic bounce timeline (CSS keyframes → GSAP)
  const bounceTl = gsap.timeline({ paused: true });

  bounceTl
    .to(img, { scaleY: 0.8, duration: 0.05 })          // 0%
    .to(img, { scaleY: 1.2, duration: 0.12 })       // 20%
    .to(img, { scaleY: 0.9, duration: 0.12 })       // 40%
    .to(img, { scaleY: 1.05, duration: 0.12 })      // 60%
    .to(img, { scaleY: 0.98, duration: 0.12 })      // 80%
    .to(img, { scaleY: 1, duration: 0.12 });        // 100%

  // Hover in → play bounce
  el.addEventListener("mouseenter", () => {
    gsap.to(img, { opacity: 1, duration: 0.1 });
    bounceTl.restart();
  });

  // Mouse move → ONLY X follows cursor
  el.addEventListener("mousemove", (e) => {
    const bounds = el.getBoundingClientRect();

    const x = gsap.utils.mapRange(
      bounds.left,
      bounds.right,
      -120,
      120,
      e.clientX
    );

    gsap.to(img, {
      x,
      duration: 0.2,
      ease: "power3.out",
    });
  });

  // Hover out → collapse
  el.addEventListener("mouseleave", () => {
    bounceTl.pause(0);
    gsap.to(img, {
      scaleY: 0,
      opacity: 0,
      x: 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  });
});
}

function paraAnimation(){
  let clutter = " "

document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){

  if(e === " ") clutter += `<span>&nbsp</span>`
  clutter += `<span>${e}</span>`
})

document.querySelector(".textpara").innerHTML = clutter

gsap.set(".textpara span", {opacity: .1})
gsap.to(".textpara span",{
  scrollTrigger:{
    trigger: ".para",
    // markers: true,
    start: "top 70%",
    end: "bottom 90%",
    scrub: 1,
  },
  opacity:1,
  stagger: .03,
  ease: "Power4.out"
})
}

function locomotiveScroll(){
  const locomotiveScroll = new LocomotiveScroll()
}

function capsuleAnimation(){
  gsap.to(".capsule:nth-child(2)",{
  scrollTrigger:{
    trigger: ".capsules",
    start: "top 70%",
    end: "bottom bottom",
    // markers: true,
    scrub:1
  },
  marginTop: 0,
  ease : "Power4.out"
})
}

function bodyColorChanged(){
  document.querySelectorAll(".section")
.forEach(function(e){
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,
    onEnter : function(){
      document.body.setAttribute("theme", e.dataset.color)
    },
    onEnterBack: function(){
      document.body.setAttribute("theme", e.dataset.color)
    }
  })
})
}

locomotiveScroll()

bodyColorChanged()
homePageAnimation()
realPageAnimation()
teamAnimation()
paraAnimation()
capsuleAnimation()