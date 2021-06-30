//DOM elements
var currentDayEL = $('#currentDay');
var scheduleEl = $('#container');
var newEventInput = $('#form-control');
var issaEvent = $('#form-control');
var saveButton = $('#saveBtn');

//displays time
function displayTime() {
    var rightNow = moment().format('dddd, MMM Do');
    currentDayEL.text(rightNow)
}

displayTime()

scheduleEl.on('click', '.saveBtn', handleSaveEvent);

function handleSaveEvent(event) {
    console.log(event.target);
    console.log('for why');
}