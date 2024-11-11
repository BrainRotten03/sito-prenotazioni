const form = document.getElementById('booking-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxAFhJbmGBFIVsMU0k07oUmfb_h8ykOfmv0q4VGOCcTIku-8ywo7uUPzEZ5vy4D1uomPQ/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, date, time })
            mode: 'no-cors';
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
