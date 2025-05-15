import './styles.css';
import { createHomeContent, createMenuContent, createAboutContent } from './content';

// Get the content container
const contentContainer = document.getElementById('content');

// Get navigation buttons
const homeButton = document.querySelector('button:nth-child(1)');
const menuButton = document.querySelector('button:nth-child(2)');
const aboutButton = document.querySelector('button:nth-child(3)');

// Function to clear and update content
function updateContent(content) {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(content);
}

// Set initial content to home
updateContent(createHomeContent());

// Add click event listeners to navigation buttons
homeButton.addEventListener('click', () => {
    updateContent(createHomeContent());
});

menuButton.addEventListener('click', () => {
    updateContent(createMenuContent());
});

aboutButton.addEventListener('click', () => {
    updateContent(createAboutContent());
});

// Your JavaScript code goes here
console.log('hello');