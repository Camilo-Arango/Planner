//Date and Time
var update = function() {
    $("#currentDay").text(moment().format("ddd, MMMM Do YYYY, h:mm:ss a"))
}
setInterval(update, 1000);

//check if past present or future
$("#placeholder > .row > .timelabel").each(function() {
    var currentTime = moment().hour();
    if (currentTime > (this.id)){
        //assign new class (append)
        console.log(currentTime);
        $(this).siblings("textarea").addClass("past");
    } else if (currentTime < (this.id)){
        //assign new class (append)
        console.log(currentTime);
        $(this).siblings("textarea").addClass("future");
    } else {
        //assign new class (append)
        console.log(currentTime);
        $(this).siblings("textarea").addClass("present");
    }
});

//save button for saving to local storage
var toDoList = [];
document.addEventListener("click", function() {
    localStorage.setItem("toDoList");
});
// $(document).ready(function(){
//     $(".toDo").on("click", function(){
//         localStorage.setItem("myContent");
//         console.log(localStorage.getItem("myContent"));
//     });
// });

//load items from local storage