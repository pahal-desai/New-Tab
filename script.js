setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.querySelector('.time').textContent = time;
}, 1000);
