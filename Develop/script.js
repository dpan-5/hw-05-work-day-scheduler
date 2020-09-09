$(document).ready(function() {
    // Sets text content of HTML element with id of currentDay to today's date using moment.js
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Array for time - used to dynamically create time blocks on the page
    const timeArr = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

    let mainDisplay = $("#displayContent");

    // Loops through timeArr to dynamically create display
    timeArr.forEach(element => {
        // create div row containing each time block
        var newRow = $("<div>").addClass("row");

        // create column div for first column with time (2 blocks)
        var col1 = $("<div>").addClass("col-sm-2 time-block hour");
        col1.text(element);

        // create column div for second column with text area (9 blocks)
        var col2 = $("<textarea>").addClass("col-sm-9 past row");

        // create column div for third column with save button (1 block)
        var col3 = $("<button>").addClass("col-sm-1 saveBtn");
        col3.attr("type", "submit");


        newRow.append(col1);
        newRow.append(col2);
        newRow.append(col3);
        mainDisplay.append(newRow);





    });

});

