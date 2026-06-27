const dateTime = document.querySelector("#date-time");

const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "long",
    timeStyle: "medium"
});

function updateDateTime() {
    const now = new Date();
    dateTime.dateTime = now.toISOString();
    dateTime.textContent = formatter.format(now);
}

updateDateTime();
window.setInterval(updateDateTime, 1000);
