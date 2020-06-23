
$(".width-input").on('change', function () {
    if ($(".Difficulty").val() == "easy" || $(".Difficulty").val() == "easy")
        if ($(".width-input").val()) {

        }
})

$(".width-input").on('change', function () {
    $(".bomb-input").attr("max", $(".width-input").val() * $(".height-input").val())
})

$(".height-input").on('change', function () {
    $(".bomb-input").attr("max", $(".width-input").val() * $(".height-input").val())
})


$(".Difficulty").on('change', function () {
    var value = $(this).val();
    // console.log(value)
    if (value == "easy") {
        $(".width-input").val(8);
        $(".height-input").val(8);
        $(".bomb-input").val(10);
        $(".bomb-input").attr("max", 10)
    }
    else if (value == "medium") {
        $(".width-input").val(16);
        $(".height-input").val(16);
        $(".bomb-input").val(40);
        $(".bomb-input").attr("max", 40)

    }
    else if (value == "hard") {
        $(".width-input").val(24);
        $(".height-input").val(24);
        $(".bomb-input").val(99);
        $(".bomb-input").attr("max", 99)


    }
    else {
        $('.width-input').removeAttr('readonly');
        $('.height-input').removeAttr('readonly');
        $('.bomb-input').removeAttr('readonly');
    }

})


function getCookie() { //獲取cookie
    var diff = $.cookie("diff");
    var h = $.cookie("height");
    var w = $.cookie("width");
    var bomb = $.cookie("bomb");

    if (diff) {
        $(".Difficulty").val(diff);
    }
    if (h) {
        $(".height-input").val(h);
    }
    if (w) {
        $(".width-input").val(w);
    }
    if (bomb) {
        $(".bomb-input").val(bomb);
    }
}
$.cookie('the_cookie', 'the_value', { expires: 7, path: '/' });


$(".start").click(function (event) {
    event.preventDefault();

    var diff = $(".Difficulty").val()
    var h = $(".height-input").val()
    var w = $(".width-input").val()
    var bomb = $(".bomb-input").val()

    $.cookie("diff", diff);
    $.cookie("height", h);
    $.cookie("width", w);
    $.cookie("bomb", bomb);
    window.location.href = "./game.html"
})




// console.log($.cookie("diff", diff),
//     $.cookie("height", h),
//     $.cookie("width", w),
//     $.cookie("bomb", bomb))

$(document).ready(function () {
    getCookie();
});