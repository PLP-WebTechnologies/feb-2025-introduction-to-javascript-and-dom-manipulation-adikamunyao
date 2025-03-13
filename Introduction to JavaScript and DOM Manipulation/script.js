// 1. Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.textContent = "The text content has been changed!";
    textElement.style.color = 'green';  // Changing the color of the text
});

// 2. Add a new element when the button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new paragraph added dynamically.";
    document.querySelector('main').appendChild(newElement); // Adding the new paragraph to the main section
});

// 3. Remove an element when the button is clicked
document.getElementById('removeElementBtn').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.remove();  // Removing the text element from the DOM
});
