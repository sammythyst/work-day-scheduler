// display current day and date with moment()
var currentDay = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDay);

// color coding time-blocks based on past, present, or future


// using localStorage to create and save tasks throughout the day
$("#9a .description").val(localStorage.getItem("9a"));
$("#10a .description").val(localStorage.getItem("10a"));
$("#11a .description").val(localStorage.getItem("11a"));
$("#12p .description").val(localStorage.getItem("12p"));
$("#1p .description").val(localStorage.getItem("1p"));
$("#2p .description").val(localStorage.getItem("2p"));
$("#3p .description").val(localStorage.getItem("3p"));
$("#4p .description").val(localStorage.getItem("4p"));
$("#5p .description").val(localStorage.getItem("5p"));

// save button
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})