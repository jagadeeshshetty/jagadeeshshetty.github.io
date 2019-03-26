
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    let date = today.getDate();
    let year = today.getFullYear();
    let month = getMonthName(today.getMonth());
    let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = `${month} ${date} ${year}, ${time}`;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function getMonthName(i) {
    switch (i) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 2:
            return 'April';
        case 3:
            return 'May';
        case 4:
            return 'June';
        case 5:
            return 'July';
        case 6:
            return 'August';
        case 7:
            return 'September';
        case 8:
            return 'October';
        case 9:
            return 'November';
        case 10:
            return 'December';
        default:
            return 'ERROR: No valid month';
    }
}