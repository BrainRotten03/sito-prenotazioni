const form = document.getElementById('booking-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbw3bs5iPkTIeAr8w-sE_eh67wc6IujBHHk1y5-Epckre86N6PKGZxjaGYCEULEMgJ1BRw/exec", {
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
