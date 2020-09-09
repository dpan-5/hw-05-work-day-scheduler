$(document).ready(function() {
    // Sets text content of HTML element with id of currentDay to today's date using moment.js
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Array for time - used to dynamically create time blocks on the page
    const timeArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

    // Assigning container div to variable, to grab and append to at the end of loop below
    let mainDisplay = $("#displayContent");

    var newBreakPoint;

    // Loops through timeArr to dynamically create display
    timeArr.forEach((element, index) => {
        // ROW: create div row containing each time block
        var newRow = $("<div>").addClass("row");

        // COLUMN 1: create column div for first column with time (2 blocks)
        var col1 = $("<div>").addClass("col-sm-2 time-block hour");
            // sets text to AM or PM based on array element/time
            if(element <= 11) {
                col1.text(`${element}AM`);
            }
            else if (element == 12){
                col1.text(`${element}PM`);
            }
            else {
                col1.text(`${element-12}PM`);
            }

        // COLUMN 2: create column div for second column with text area (9 blocks)
        var col2 = $("<textarea>").addClass("col-sm-9 row");

            // sets div class to display present and captures index at which the element is present, to be used in a later loop
            if(element == moment().hour()) {
                col2.addClass("present");
            }
            else if(element < moment().hour()) {
                col2.addClass("past");
            }
            else {
                col2.addClass("future");
            }

        // COLUMN 3: create column div for third column with save button (1 block)
        var col3 = $("<button type='submit'>").addClass("col-sm-1 saveBtn");
        col3.append($("<i class='fas fa-save'>"));

        // appending newly created columns to newly created row, and then appending row to container div
        newRow.append(col1);
        newRow.append(col2);
        newRow.append(col3);
        mainDisplay.append(newRow);
    });
});

