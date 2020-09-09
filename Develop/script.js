$(document).ready(function() {
    // Sets text content of HTML element with id of currentDay to today's date using moment.js
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Array for time - used to dynamically create time blocks on the page
    const timeArr = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

    let mainDisplay = $("#displayContent");

    // Loops through timeArr to dynamically create display
    timeArr.forEach(element => {
        // div row containing each time block
        var newRow = $("<div>").addClass("row");

        // div for column with time
        var col1 = $("<div>").addClass("col-sm-2 time-block");
        col1.text(element);



        // var col2 = $("<textarea>").addClass("col-sm-9 time-block");
        // var col3 = $("<div>").addClass("col-sm-1 time-block");


        newRow.append(col1);
        mainDisplay.append(newRow);





    });

});

