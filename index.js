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


function handleStepEnter({ element, direction }) {
    if (direction == 'down') {
        element.classList.add('animate');
    }
    // console.log(element, direction);
}


function handleStepExit({ element, direction }) {
    if (direction == 'up') {
        element.classList.remove('animate');
    }
    // console.log(element, direction);
}

var scroller_myimage = scrollama();
scroller_myimage.setup({
    step: ".myimage-container",
    offset: .8,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_selfintro = scrollama();
scroller_selfintro.setup({
    step: ".self-intro",
    offset: .8,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_title = scrollama();
scroller_title.setup({
    step: ".title",
    offset: .8,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_intern = scrollama();
scroller_intern.setup({
    step: ".internships",
    offset: .8,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);
var scroller_act_title = scrollama();
scroller_act_title.setup({
    step: ".act-title",
    offset: .8,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_activity_1 = scrollama();
scroller_activity_1.setup({
    step: ".activity-tokyo",
    offset: .7,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_activity_2 = scrollama();
scroller_activity_2.setup({
    step: ".activity-taipei",
    offset: .7,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_activity_3 = scrollama();
scroller_activity_3.setup({
    step: ".activity-china",
    offset: .7,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);



var scroller_intern_intro = scrollama();
scroller_intern_intro.setup({
    step: ".intern-intro",
    offset: .16,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


var scroller_project = scrollama();
scroller_project.setup({
    step: ".projects",
    offset: .6,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


var scroller_contact = scrollama();
scroller_contact.setup({
    step: ".contact",
    offset: .8,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


// var scroller_2 = scrollama();
// scroller_2.setup({
//     step: ".intern-intro",
//     offset: .21,
//     debug: false
// })
//     .onStepExit(handleStepExit);

// function handleStepExit({ element, direction }) {
//     // if (direction == 'up') {
//     element.classList.remove('animate');
//     console.log(element, direction);
// }
