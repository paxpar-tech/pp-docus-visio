/*
cf https://www.youtube.com/watch?v=VgS5CP7zlXE&t=1s
cf https://www.youtube.com/watch?v=-pDPASqX97w
cf https://www.youtube.com/watch?v=iEPK5fppX8w
cf https://css-tricks.com/scale-svg/
*/


import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker')
const scrollSections = document.querySelectorAll('.scroll-section')


function setScrollVar() {
    //const htmlElement = document.documentElement
    const htmlElement = document.querySelector('body')
    // percentOfScreenHeightScrolled between 0 and the number of pages
    // 0.5 means half of 1st page
    // 2.75 means 75% of third page
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    // percentOfPage1 between 0 and 100
    // 0 means we are at the top
    // 25 means 25% of the first page scrolled
    // 100 means 100% of the first page scrolled
    const percentOfPage1 = Math.min(percentOfScreenHeightScrolled * 100, 100)

    // set css var
    htmlElement.style.setProperty("--scroll", percentOfPage1)
    console.log({percentOfScreenHeightScrolled, percentOfPage1})
}
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)
setScrollVar() // call on refresh


scrollSections.forEach(section => {
    const sectionOffsetTop = section.offsetTop
    const sectionOffsetHeight = section.offsetHeight
    console.log(sectionOffsetTop, sectionOffsetHeight)

    section.animate(
        {
            //transform: [
            //    'translateX(100px)',
            //    'translateX(0)',
            //],
            //opacity: ["0", "1"],
        },
        {
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    { target: section, edge: "end", threshold: 0 },
                    { target: section, edge: "start", threshold: 0 },
                ]
                //scrollOffsets: [
                //    CSS.px(sectionOffsetTop + sectionOffsetHeight - window.innerHeight),
                //    CSS.px(sectionOffsetTop + sectionOffsetHeight - window.innerHeight + 100),
                //]
            }),
        },
    )

})

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        duration: 1,
        timeline: new ScrollTimeline({
            //source: document.scrollingElement,
            //orientation: "block",
            scrollOffsets: [
                CSS.percent(0),
                CSS.percent(100),
            ]
        }),
    },
)


