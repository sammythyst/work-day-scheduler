$(document).ready(function () {

    // display current day and date with moment()
    var currentDay = moment().format("dddd, MMMM Do, h:mm a")
    $("#currentDay").text(currentDay);


    // using localStorage to create and save tasks throughout the day
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // color coding time-blocks based on past, present, or future
    function currentHour() {
        var momentHour = moment().hour();

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, momentHour)

            if (blockHour < momentHour){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (blockHour === momentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
        currentHour();

})