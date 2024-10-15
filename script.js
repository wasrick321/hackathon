document.addEventListener('DOMContentLoaded', () => {

    const animals = [
        { name: 'Blaze', type: 'Pet Dog', description: 'A loyal and loving dog seeking a new home. This friendly pup is full of energy and affection, ready to be your best friend and bring joy to your life.', image: 'https://th.bing.com/th/id/OIP.8ZWvDur3U7nDcEfWlYq-NgHaFj?w=267&h=200&c=7&r=0&o=5&pid=1.7' },
        { name: 'kokie', type: 'Street Cat', description: 'A playful cat that loves attention.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrg5Nfc7R4bNewsu18quv8HBTrkT5kqucrTg&s' },
        { name: 'Tommy', type: 'Street Puppy', description: 'Friendly street puppy looking for a loving home. This sweet pup is full of curiosity and affection, ready to bring joy to a caring family.', image: 'https://th.bing.com/th/id/OIP.SOZ4PQWOi6dia0Ov09fJ8wAAAA?w=274&h=196&c=7&r=0&o=5&pid=1.7' },
        { name: 'Shelby', type: 'Pet Turtle', description: 'A gentle pet turtle looking for a new home. This calm companion loves basking and exploring, perfect for adding a peaceful touch to your space.', image: 'https://th.bing.com/th/id/OIP.2y3OK9WuFlh9BPffc9oNVAHaEK?w=306&h=180&c=7&r=0&o=5&pid=1.7' },
        { name: 'Daisy', type: 'Rescued Dog', description: 'Mumbai Adoption center, Daisy a 2.5 months old baby girl, vaccinated. Location Mudh Island. Contact: +9189760', image: 'https://th.bing.com/th/id/OIP.gRh_3UjYLtd6ke3dgPuDYQHaFj?w=166&h=185&c=7&r=0&o=5&pid=1.7' },
        { name: 'Community Animal', image: 'https://th.bing.com/th/id/OIP.UKZ0CHwOKft5l-KtM9u7JAAAAA?w=165&h=180&c=7&r=0&o=5&pid=1.7' },
    ];

    const animalList = document.getElementById('animal-list');

    animals.forEach((animal, index) => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');

        // Conditional content for the last animal
        if (index === animals.length - 1) {
            // Last card: only show the image
            animalCard.innerHTML = `
                <img src="${animal.image}" alt="${animal.name}" onerror="this.onerror=null; this.src='path/to/placeholder-image.jpg';">
            `;
        } else {
            // Other cards: show all details
            const name = animal.name || 'Unknown';
            const description = animal.description || 'No description available';
            const image = animal.image || 'path/to/placeholder-image.jpg'; // Provide a default placeholder image if needed

            animalCard.innerHTML = `
                <img src="${image}" alt="${name}" onerror="this.onerror=null; this.src='path/to/placeholder-image.jpg';">
                <h3>${name}</h3>
                <p><strong>Type:</strong> ${animal.type || 'Unknown'}</p>
                <p>${description}</p>
            `;
        }

        animalList.appendChild(animalCard);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
});
