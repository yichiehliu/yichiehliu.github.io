var startBB = $(".balls > .ball-blue")
var projectTBB = $(".project-title-bb")
var projectCBB = $(".project-content-bb")
var InternTBB = $(".Intern-title-bb")
var InternCBB = $(".Intern-content-bb")
var ActTBB = $(".act-title-bb")
var ActCBB = $(".act-content-bb")
var ContactTBB = $(".contact-title-bb")
var ContactCBB = $(".contact-content-bb")


function projectRoute() {
    startBB.css("left", `${projectTBB.position().left}px`)
    startBB.css("top", `${projectTBB.position().top}px`)
}

function InternTitleToCom() {
    startBB.css("left", `${projectTBB.position().left}px`)
    startBB.css("top", `${projectTBB.position().top}px`)
}


// new IntersectionObserver(callback, InternTitleToCom) {

// }


// console.log(projectTBB.position().left)


var scroller_intern = scrollama();
scroller_intern.setup({
    step: ".intern-intro",
    offset: .16,
    debug: true
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


var scroller_project = scrollama();
scroller_project.setup({
    step: ".projects",
    offset: .5,
    debug: true
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


function handleStepEnter({ element, direction }) {
    if (direction == 'down') {
        element.classList.add('animate');
    }
    console.log(element, direction);
}


function handleStepExit({ element, direction }) {
    if (direction == 'up') {
        element.classList.remove('animate');
    }
    console.log(element, direction);
}


// var scroller_2 = scrollama();
// scroller_2.setup({
//     step: ".intern-intro",
//     offset: .21,
//     debug: true
// })
//     .onStepExit(handleStepExit);

// function handleStepExit({ element, direction }) {
//     // if (direction == 'up') {
//     element.classList.remove('animate');
//     console.log(element, direction);
// }
