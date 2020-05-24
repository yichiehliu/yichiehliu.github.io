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


new IntersectionObserver(callback, InternTitleToCom) {

}


console.log(projectTBB.position().left)