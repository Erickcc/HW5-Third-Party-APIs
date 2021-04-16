//Add IDs for buttons
var timeBtn9 = $('#time9');
var timeBtn10 = $('#time10');
var timeBtn11 = $('#time11');
var timeBtn12 = $('#time12');
var timeBtn13 = $('#time13');
var timeBtn14 = $('#time14');
var timeBtn15 = $('#time15');
var timeBtn16 = $('#time16');
var timeBtn17 = $('#time17');
var text9 = $('#text9');
var text10 = $('#text10');
var text11 = $('#text11');
var text12 = $('#text12');
var text13 = $('#text13');
var text14 = $('#text14');
var text15 = $('#text15');
var text16 = $('#text16');
var text17 = $('#text17');
var container = $('.container');

//Get current date and display it with the following format in the header : dayName, month dayNumber
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//Add event listener for the save buttons all the different hours
timeBtn9.on('click', function () {
    localStorage.setItem("storedText9", text9.val());
});
timeBtn10.on('click', function () {
    localStorage.setItem("storedText10", text10.val());
});
timeBtn11.on('click', function () {
    localStorage.setItem("storedText11", text11.val());
});
timeBtn12.on('click', function () {
    localStorage.setItem("storedText12", text12.val());
});
timeBtn13.on('click', function () {
    localStorage.setItem("storedText13", text13.val());
});
timeBtn14.on('click', function () {
    localStorage.setItem("storedText14", text14.val());
});
timeBtn15.on('click', function () {
    localStorage.setItem("storedText15", text15.val());
});
timeBtn16.on('click', function () {
    localStorage.setItem("storedText16", text16.val());
});
timeBtn17.on('click', function () {
    localStorage.setItem("storedText17", text17.val());
});

//Retrieves the local stored information and updates the text area with said information for each hour
function updateScreenText() {
    var currentText;
    if (localStorage.getItem("storedText9") !== null) {
        currentText = localStorage.getItem("storedText9");
        text9.val(currentText);
    }
    if (localStorage.getItem("storedText10") !== null) {
        currentText = localStorage.getItem("storedText10");
        text10.val(currentText);
    }
    if (localStorage.getItem("storedText11") !== null) {
        currentText = localStorage.getItem("storedText11");
        text11.val(currentText);
    }
    if (localStorage.getItem("storedText12") !== null) {
        currentText = localStorage.getItem("storedText12");
        text12.val(currentText);
    }
    if (localStorage.getItem("storedText13") !== null) {
        currentText = localStorage.getItem("storedText13");
        text13.val(currentText);
    }
    if (localStorage.getItem("storedText14") !== null) {
        currentText = localStorage.getItem("storedText14");
        text14.val(currentText);
    }
    if (localStorage.getItem("storedText15") !== null) {
        currentText = localStorage.getItem("storedText15");
        text15.val(currentText);
    }
    if (localStorage.getItem("storedText16") !== null) {
        currentText = localStorage.getItem("storedText16");
        text16.val(currentText);
    }
    if (localStorage.getItem("storedText17") !== null) {
        currentText = localStorage.getItem("storedText17");
        text17.val(currentText);
    }
}

//Adds color to each text area
function updateScreenColors() {
    //We handle the hours of the day in a 24hrs format
    var currentHour = today.format('H');
    //Daily work hours go from 9hrs to 17hrs
    currentText = 9;
    var textIDs = [text9, text10, text11, text12, text13, text14, text15, text16, text17];
    for (var i = 9; i < 18; i++) {
        //If the stored text area belongs to a future hour, then the text area turns green
        if (currentHour < currentText) {
            textIDs[i - 9].addClass("future");
            //If the stored text area belongs to the present hour, then turn the area red
        } else if (currentHour == currentText) {
            textIDs[i - 9].addClass("present");
        } else {
            //If the stored text area  belongs to an hour that already passed, then turn the area grayish
            textIDs[i - 9].addClass("past");

        }
        //Variable that we use to move to different text boxes
        currentText++;
    }
}

//On load, the screen updates the text areas for each area with the stored information
updateScreenText();
// On load, the screen updates the color for each text area depending on what time it is
updateScreenColors();