var update = function() {
    $("#currentDay").text(moment().format("ddd, MMMM Do YYYY, h:mm:ss a"))
    console.log("hello");
}
setInterval(update, 1000);
