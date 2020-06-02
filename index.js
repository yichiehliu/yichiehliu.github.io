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


// new IntersectionObserver(callback, InternTitleToCom) 







// Header 跳出
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".header").addClass("show_header");
    } else {
        $(".header").removeClass("show_header");
    }
});

// 


var swiper = new Swiper('.swiper-container', {
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
});


// STICKY 動畫

let el = document.querySelector('.intern-sticky');


function handleStepEnter({ element, direction }) {

    if (direction == 'down') {
        element.classList.add('animate');
    }
    // console.log(element.dataset.step);

    // console.log(element, direction);
}


function handleStepExit({ element, direction }) {

    if (direction == 'up') {
        element.classList.remove('animate');
    }
    // console.log(element, direction);
}

function internPicStepEnter({ element, direction }) {

    if (element.dataset.step == "1") {
        el.classList.add('animate-1');
    }
    if (element.dataset.step == "2") {
        el.classList.add('animate-2');
    }
    if (element.dataset.step == "3") {
        el.classList.add('animate-3');
    }
    if (element.dataset.step == "4") {
        el.classList.add('animate-4');
    }

}


function internPicStepExit({ element, direction }) {

    if (element.dataset.step == "1") {
        el.classList.remove('animate-1');
    }
    if (element.dataset.step == "2") {
        el.classList.remove('animate-2');
    }
    if (element.dataset.step == "3") {
        el.classList.remove('animate-3');
    }
    if (element.dataset.step == "4") {
        el.classList.remove('animate-4');
    }
}


var scroller_contact = scrollama();
scroller_contact.setup({
        step: ".contact",
        offset: .8,
        debug: false
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


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



var scroller_project_intro = scrollama();
scroller_project_intro.setup({
        step: ".project-intro",
        offset: .2,
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


var scroller_intern = scrollama();
scroller_intern.setup({
        step: ".internships",
        offset: .8,
        debug: false
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_intern_pic = scrollama();
scroller_intern_pic.setup({
        step: ".intern-pic",
        offset: .8,
        debug: false
    })
    .onStepEnter(internPicStepEnter)
    .onStepExit(internPicStepExit);

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