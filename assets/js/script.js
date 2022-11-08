$(document).ready(function () {

    // display current day and date with moment()
    var currentDay = moment().format("dddd, MMMM Do, h:mm a")
    $("#currentDay").text(currentDay);


    // local storage saving custom description of day's plans
    function planDay() {
        $(".hour").each(function() {
            var blockHour = $(this).text();
            var schedule = localStorage.getItem(blockHour);

            if(schedule !== null) {
                $(this).siblings(".description").val(schedule);
            }
        })
    }


    // color coding time-blocks based on past, present, or future
    function currentHour() {
        var momentHour = moment().hour();

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id"));
            console.log(blockHour, momentHour)

            if (blockHour < momentHour){
                $(this).addClass("past");
            } else if (blockHour === momentHour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        })
    }

    
    // save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();

        localStorage.setItem(time, text);
    })

    currentHour();
    planDay();
})