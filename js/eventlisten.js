document.addEventListener('DOMContentLoaded', (event) => {
    const purchaseButton = document.getElementById('purchaseButton');

    if (purchaseButton) {
        purchaseButton.addEventListener('click', () => {
            alert('Thank you for your purchase!');
        });
    }
});