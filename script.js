document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700'; // Change color to gold on hover
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white'; // Revert back to white
        });
    });

    console.log('Script loaded successfully!');
});
