const form = document.getElementById('booking-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycby_MVl5SEs1Kl8HmER6-VXd8NUmI2SFMbQfqMG3TJ0UYEmV0CSnk7MuRQCsBE3defAAJw/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, date, time })
        });
        const result = await response.json();

        if (result.status === "success") {
            document.getElementById('success-message').style.display = 'block';
            form.reset();
        } else {
            console.error("Errore durante l'invio della prenotazione");
        }
    } catch (error) {
        console.error("Errore:", error);
    }
});
