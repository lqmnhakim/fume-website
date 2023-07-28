// Get the night mode button element
const nightModeButton = document.getElementById('nightModeButton');

// Add a click event listener to the button
nightModeButton.addEventListener('click', () => {
    // Toggle the night-mode class on the body element
    document.body.classList.toggle('night-mode');
});
