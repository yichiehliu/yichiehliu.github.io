

$('.front-page').parallax({ imageSrc: 'resized_image/home-header.svg' });

var submit = document.querySelector('.btn');

function emailtome() {

    var user_value = document.getElementById("name").value;
    var message_value = document.getElementById("message").value;
    var user_email_value = document.getElementById("email").value;
    console.log(user_value, user_email_value, message_value);



    var template_params = {
        "user": String(user_value),
        "user_email": String(user_email_value),
        "message": String(message_value)
    }

    var service_id = "default_service";
    var template_id = "ej_contact";
    emailjs.send(service_id, template_id, template_params, "user_IAM8HfFeS86yKxQnF3ySF")
        .then(function (response) {
            alert("Message successfully sent!");
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    alert("Message successfully sent!");

}
submit.addEventListener("click", emailtome);


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
    offset: .5,
    debug: false
})
    .onStepEnter(internPicStepEnter)
    .onStepExit(internPicStepExit);


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
    offset: .6,
    debug: false
})
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);




// var intern_container = $('.intern-infos')
// var intern_text = $('.intern-info')
