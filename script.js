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

const projectLinks = document.querySelectorAll(".project-card");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let isNavigating = false;

projectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const modifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

        if (modifiedClick || event.button !== 0 || isNavigating || reduceMotion.matches) return;

        event.preventDefault();
        isNavigating = true;
        document.body.classList.add("is-leaving");

        window.setTimeout(() => window.location.assign(link.href), 170);
    });
});
