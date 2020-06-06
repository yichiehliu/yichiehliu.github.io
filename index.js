
var prevScrollpos = window.pageYOffset;
var w = window.innerWidth;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (w >= 980) {
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header").style.top = "0";
        } else {
            document.querySelector(".header").style.top = "-8vw";
        }
        prevScrollpos = currentScrollPos;
    }
    else {
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header").style.top = "0";
        } else {
            document.querySelector(".header").style.top = "-16vw";
        }
        prevScrollpos = currentScrollPos;
    }

}
// $('.front-page').parallax({ imageSrc: 'resized_image/home-header.svg' });


var myform = $(".contact-form");
myform.submit(function (event) {
    event.preventDefault();

    var service_id = "default_service";
    var template_id = "ej_contact";

    myform.find("button").text("Sending...");
    emailjs.sendForm(service_id, template_id, myform[0], "user_IAM8HfFeS86yKxQnF3ySF")
        .then(function () {
            alert("Message successfully sent!");
            myform.find("button").text("Message sent");
            location.reload();
        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Message failed to sent");
            location.reload();

        });
    return false;
});



// menu
$(".menu").click(function () {
    // $(".menu").toggleClass(".unfold_menu");
    $(this).toggleClass("on");
    $(".menu-close").toggleClass("on");
    $(".menu-overlay").toggleClass("on");
    $(".unfold_menu").slideToggle(200);
});

$(".menu-close").click(function () {
    // $(".menu").toggleClass(".unfold_menu");
    $(this).toggleClass("on");
    $(".menu-overlay").toggleClass("on");
    $(".unfold_menu").slideToggle(200);
});


$(".unfold_menu li").click(function () {
    $(".menu-close").toggleClass("on");
    $(".menu-overlay").toggleClass("on");
    $(".unfold_menu").slideToggle(200);
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
    if (w >= 980) {
        el.className = 'intern-sticky';
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

}


function internPicStepExit({ element, direction }) {
    if (w >= 980) {
        if (element.dataset.step == "1" && direction == 'down') {
            el.classList.remove('animate-1');
        }
        if (element.dataset.step == "2") {
            el.classList.remove('animate-2');
        }
        if (element.dataset.step == "3") {
            el.classList.remove('animate-3');
        }
        if (element.dataset.step == "4" && direction == 'up') {
            el.classList.remove('animate-4');
        }
    }
}


var scroller_contact = scrollama();
scroller_contact.setup({
    step: ".contact",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


var scroller_myimage = scrollama();
scroller_myimage.setup({
    step: ".myimage-container",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_selfintro_h4 = scrollama();
scroller_selfintro_h4.setup({
    step: ".self-intro-h4",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_selfintro_h2_1 = scrollama();
scroller_selfintro_h2_1.setup({
    step: ".self-intro-h2-1",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

var scroller_selfintro_h2_2 = scrollama();
scroller_selfintro_h2_2.setup({
    step: ".self-intro-h2-2",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


var scroller_pt = scrollama();
scroller_pt.setup({
    step: ".project-title",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter)
// .onStepExit(handleStepExit);


var scroller_at = scrollama();
scroller_at.setup({
    step: ".act-title",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter)
// .onStepExit(handleStepExit);


// var scroller_p = scrollama();
// scroller_p.setup({
//     step: ".project",
//     offset: .9,
//     debug: false
// })
//     .onStepEnter(handleStepEnter);


var scroller_p1 = scrollama();
scroller_p1.setup({
    step: ".project-1",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);

var scroller_p2 = scrollama();
scroller_p2.setup({
    step: ".project-2",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);
var scroller_p3 = scrollama();
scroller_p3.setup({
    step: ".project-3",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);
var scroller_p4 = scrollama();
scroller_p4.setup({
    step: ".project-4",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);



var scroller_a1 = scrollama();
scroller_a1.setup({
    step: ".act-set-1",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);

var scroller_a2 = scrollama();
scroller_a2.setup({
    step: ".act-set-2",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);
var scroller_a3 = scrollama();
scroller_a3.setup({
    step: ".act-set-3",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);
var scroller_a4 = scrollama();
scroller_a4.setup({
    step: ".act-set-4",
    offset: .9,
    debug: false
})
    .onStepEnter(handleStepEnter);
// .onStepExit(handleStepExit);


var scroller_intern_pic = scrollama();
scroller_intern_pic.setup({
    step: ".intern-pic",
    offset: .5,
    debug: false
})
    .onStepEnter(internPicStepEnter)
// .onStepExit(internPicStepExit);


// var scroller_intern_pic_ani = scrollama();
// scroller_intern_pic_ani.setup({
//     step: ".intern-pic-ani",
//     offset: .7,
//     debug: false
// })
//     .onStepEnter(handleStepEnter)
// // .onStepExit(internPicStepExit);

// var scroller_intern_pic_e = scrollama();
// scroller_intern_pic_e.setup({
//     step: ".intern-pic",
//     offset: .7,
//     debug: true
// })
//     .onStepEnter(internPicStepEnter)
//     .onStepExit(internPicStepExit);

var scroller_contact = scrollama();
scroller_contact.setup({
    step: ".contact",
    offset: 1,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

// var item = scrollama();
// item.setup({
//     step: ".act-sets",
//     offset: .2,
//     debug: true
// })
//     .onStepEnter(handleStepEnter)
//     .onStepExit(handleStepExit);




// var intern_container = $('.intern-infos')
// var intern_text = $('.intern-info')
