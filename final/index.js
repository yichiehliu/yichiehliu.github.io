

$(".width-input").on('change', function () {
    if ($(".Difficulty").val() == "easy" || $(".Difficulty").val() == "easy")
        if ($(".width-input").val()) {

        }
}
    
$(".width-input").on('change', function () {
    if () {

    }
}
    
$(".Difficulty").on('change', function () {
    var value = $(this).val();
    // console.log(value)
    if (value == "easy") {
        $(".width-input").val(8);
        $(".height-input").val(8);
        $(".bomb-input").val(10);
    }
    else if (value == "medium") {
        $(".width-input").val(16);
        $(".height-input").val(16);
        $(".bomb-input").val(40);
    }
    else if (value == "hard") {
        $(".width-input").val(24);
        $(".height-input").val(24);
        $(".bomb-input").val(99);
    }

})
