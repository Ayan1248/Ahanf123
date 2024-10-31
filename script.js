var x=gsap.timeline()

x.from("#nav-4",{
    y:60,
    opacity:0,
    duration:1,
    delay:0.1
})
x.from("#nav-2",{
    y:-60,
    opacity:0,
    duration:1,
    delay:0.1
    
})
x.from("#nav-3 a",{
    y:-60,
    opacity:0,
    duration:1,
    stagger:0.3
    
})

gsap.to("#pg-2 h3",{
    transform:"translateX(-70%)",
    scrollTrigger:{
        trigger:"#pg-2",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})
