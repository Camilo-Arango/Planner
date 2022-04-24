//Date and Time
var update = function() {
    $("#currentDay").text(moment().format("ddd, MMMM Do YYYY, h:mm:ss a"))
}
setInterval(update, 1000);

//check if past present or future
$("#placeholder > .row > .timelabel").each(function() {
    var currentTime = moment().hour();
    if (currentTime > (this.id)){
        $(this).siblings("textarea").addClass("past");
    } else if (currentTime < (this.id)){
        $(this).siblings("textarea").addClass("future");
    } else {
        $(this).siblings("textarea").addClass("present");
    }
});

//load local storage 
$(".textarea").each(function() {
    var inputID = $(this).attr("id");
    var inputEl = localStorage.getItem(inputID);
    $(this).val(inputEl);
});
//save button for saving to local storage
$(".saveBtn").on("click", function () {
    inputID = $(this).attr("id");
    inputEl = $(this).parent().children()[1].value;
    localStorage.setItem(inputID, inputEl);
});