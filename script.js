setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.querySelector('.time').textContent = time;
}, 1000);
async function getWeather() {
    const city = document.getElementById("city").value;

    const geo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    ).then(r => r.json());

    const lat = geo.results[0].latitude;
    const lon = geo.results[0].longitude;

    const weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
    ).then(r => r.json());

    document.querySelector(".temp").textContent =
        weather.current.temperature_2m + "°C";
}

function search(event) {
    if (event.key === "Enter") {
        window.location.href = "https://www.google.com/search?q=" + event.target.value;
    }
}