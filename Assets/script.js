//DOM elements
var currentDayEL = $('#currentDay');
var scheduleEl = $('#schedule')

//displays time
function displayTime() {
    var rightNow = moment().format('dddd, MMM Do');
    currentDayEL.text(rightNow)
}

displayTime()

function printSchedule() {
    for (let i = 9; i < 18; i++) {

    var projectRowEl = $('<tr>');

    var hourEl = $('<td>').addClass('hour' + [i]).text(i);

    var activityEl = $('<td>');
    var activtyinputEl = $('<input>').addClass('form-control');
    activityEl.append(activtyinputEl);

    var saveButtonEl = $('<td>').text('bigchungus')

    projectRowEl.append(
        hourEl,
        activityEl,
        saveButtonEl
    );

    scheduleEl.append(projectRowEl);
    }
}

printSchedule();
