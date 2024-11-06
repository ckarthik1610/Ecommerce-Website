document.addEventListener('DOMContentLoaded', () => {
    const shoes = [
        { name: 'PUMA 917s', price: 3699, image: 'images/PUMA 917s.jpg' },
        { name: 'AIR JORDAN', price: 18399, image: 'images/AIR JORDAN.jpg' },
        { name: 'PUMA x BMW', price: 4799, image: 'images/PUMA x BMW.webp' },
        { name: 'YEEZY 350', price: 6299, image: 'images/Yeezy 350.jpg' }
    ];

    const shoeContainer = document.querySelector('.shoe-container');

    shoes.forEach(shoe => {
        const shoeElement = document.createElement('div');
        shoeElement.classList.add('shoe');
        shoeElement.innerHTML = `
            <img src="${shoe.image}" alt="${shoe.name}">
            <h3>${shoe.name}</h3>
            <p>₹${shoe.price}</p>
        `;
        shoeContainer.appendChild(shoeElement);
    });
});
