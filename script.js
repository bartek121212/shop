document.addEventListener('DOMContentLoaded', function() {
    fetch('script.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayProducts(data))
        .catch(error => console.error('Błąd podczas wczytywania pliku JSON:', error));
});

function displayProducts(products) {
    const container = document.getElementById('products-container');

    container.innerHTML = ''; // Wyczyść zawartość kontenera

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'flex-wrap');

        productElement.innerHTML = `
            <div class="product">
                <img src="img/logo.png" alt="${product.name}">
                <button class="buy-button">Zakup</button>
            </div>
            <div class="product-info">
                <h2 class="font-bold">${product.name}</h2>
                <p>${product.description}</p>
                <strong>Cena: ${product.price} PLN</strong>
            </div>
        `;

        container.appendChild(productElement);
    });
}
