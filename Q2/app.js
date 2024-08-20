document.getElementById('toggleButton').addEventListener('click', function() {
    const fullText = document.getElementById('fullText');
    const button = document.getElementById('toggleButton');

    if (fullText.classList.contains('hidden')) {
        // Show full text and change button text to "Read Less"
        fullText.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        // Hide full text and change button text to "Read More"
        fullText.classList.add('hidden');
        button.textContent = 'Read More';
    }
});