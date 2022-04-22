//Date and Time
var update = function() {
    $("#currentDay").text(moment().format("ddd, MMMM Do YYYY, h:mm:ss a"))
    pastPresentFuture();
}
setInterval(update, 1000);

//check if past present or future
var whatTime = moment().hour();
function pastPresentFuture () {
    if (moment('whatTime').isBefore() == 'true') {
        
    }
}

//save (for loop maybe)
addEventListener("click", )

//save to local storage

//load items from local storage