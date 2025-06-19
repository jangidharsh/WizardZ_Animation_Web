let tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.6,
    stagger:0.2
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.8,
    delay:0.5
})

tl.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:0.5,
    delay:0.3
})
tl.from(".center-part1 button",{
    opacity:0,
    delay:0.6
})

tl.from(".center-part2 img",{
    opacity:0
},"-=1")