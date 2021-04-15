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


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


timeBtn9.on('click', function(){
    localStorage.setItem("storedText9", text9.val());
});
timeBtn10.on('click', function(){
    localStorage.setItem("storedText10", text10.val());
});
timeBtn11.on('click', function(){
    localStorage.setItem("storedText11", text11.val());
});
timeBtn12.on('click', function(){
    localStorage.setItem("storedText12", text12.val());
});
timeBtn13.on('click', function(){
    localStorage.setItem("storedText13", text13.val());
});
timeBtn14.on('click', function(){
    localStorage.setItem("storedText14", text14.val());
});
timeBtn15.on('click', function(){
    localStorage.setItem("storedText15", text15.val());
});
timeBtn16.on('click', function(){
    localStorage.setItem("storedText16", text16.val());
});
timeBtn17.on('click', function(){
    localStorage.setItem("storedText17", text17.val());
});


function updateScreenText(){
    var currentText;
    if(localStorage.getItem("storedText9") !== null){
        currentText = localStorage.getItem("storedText9");
        text9.val(currentText);
    }
    if(localStorage.getItem("storedText10") !== null){
        currentText = localStorage.getItem("storedText10");
        text10.val(currentText);
    }
    if(localStorage.getItem("storedText11") !== null){
        currentText = localStorage.getItem("storedText11");
        text11.val(currentText);
    }
    if(localStorage.getItem("storedText12") !== null){
        currentText = localStorage.getItem("storedText12");
        text12.val(currentText);
    }
    if(localStorage.getItem("storedText13") !== null){
        currentText = localStorage.getItem("storedText13");
        text13.val(currentText);
    }
    if(localStorage.getItem("storedText14") !== null){
        currentText = localStorage.getItem("storedText14");
        text14.val(currentText);
    }
    if(localStorage.getItem("storedText15") !== null){
        currentText = localStorage.getItem("storedText15");
        text15.val(currentText);
    }
    if(localStorage.getItem("storedText16") !== null){
        currentText = localStorage.getItem("storedText16");
        text16.val(currentText);
    }
    if(localStorage.getItem("storedText17") !== null){
        currentText = localStorage.getItem("storedText17");
        text17.val(currentText);
    }
}


function updateScreenColors() {
    var currentHour = today.format('h');
    currentText = 9;
    var textIDs = [text9, text10, text11, text12, text13, text14, text15, text16, text17];
    
    // asd[0].addClass("future");

    //Evaluate for 9,10,11,12 hours
    for (var i = 9; i < 18; i++){
        if (currentHour < currentText){
            textIDs[i-9].addClass("future");
        }else if(currentHour == currentText){
            textIDs[i-9].addClass("present");
        }else{
            textIDs[i-9].addClass("past");
        }
    }
}

updateScreenText();
updateScreenColors();