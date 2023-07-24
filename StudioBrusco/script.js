var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 25+ "px"
    crsr.style.top = dets.y - 25 + "px"
})


tl = gsap.timeline()

tl.from("#page1 h3, #page1 video",{
    y:-500,
    duration:2,
    delay:0.4,

})

tl.from("#page1 .description1,#page1 h3,#page1 h4",{
    x:-200,
    opacity:0,
    duration:0.4,
    delay:0.2,
})

tl.from("#page2 .P2-sec1 ,.description2 h2",{
    opacity:0,
    x:-100,
    duration:2,
    delay:0.2,
    stagger:0.9,
    scrollTrigger:{
        trigger:".description2",
        scoller:"body",
        start:"top 60%",
        end:"top 30%",
        // markers:true,
        scrub:3
    }
})

tl.from("#page4 video,.text1 h1, .text1 p",{
    opacity:0,
    x:-200,
    stagger:1,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#page4 video,#page4 .text1",
        scroller:"body",
        start:"top 30%",
        end:"top 10%",
        // markers:true,   
        scrub:1
    }
})

tl.from("#page5 video, .text2 h1, .text2 p",{
    opacity:0,
    x:300,
    stagger:1,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#page5 video,.text2 h1,.text2 p",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        // markers:true,   
        scrub:3
    }    
})

tl.from("#page6 .P6-sec1,#page6 .description3",{
    opacity:0,
    z:300,
    // stagger:1,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#page6 .description3 h2",
        scroller:"body",
        stagger:1,
        start:"top 40%",
        end:"top 10%",
        // markers:true,   
        scrub:0.8
    }
})

tl.from("#page7 .inside-box1,#page7 .inside-box2",{
    opacity:0,
    y:300,
    // stagger:1,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#page7 .inside-box1,#page7 .inside-box2",
        scroller:"body",
        stagger:1,
        start:"top 80%",
        end:"top 40%",
        // markers:true,   
        scrub:0.8
    }
})

tl.from("#page8 video,#page8 h1",{
    opacity:0,
    y:-300,
    // stagger:1,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#page7 .inside-box1,#page7 .inside-box2",
        scroller:"body",
        stagger:1,
        start:"top 70%",
        end:"top 20%",
        // markers:true,   
        scrub:2
    }
})