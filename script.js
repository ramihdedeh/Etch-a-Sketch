const container = document.getElementById("container");
const resizeButton = document.getElementById("resizeButton");

// Function to create grid based on specified size
function createGrid(size) {
    container.innerHTML = ""; // Clear existing squares
    const squareSize = 960 / size;
    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseenter", changeColor);
        container.appendChild(square);
    }
}

// Function to handle hover effect with random colors and opacity increment
function changeColor(e) {
    let currentOpacity = parseFloat(e.target.style.opacity) || 0;
    e.target.style.opacity = currentOpacity + 0.1;
    e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

// Helper function to generate a random color
function randomColor() {
    return Math.floor(Math.random() * 256);
}

// Function to prompt user for grid size, validate input, and create a new grid
function resizeGrid() {
    let size = parseInt(prompt("Enter new grid size (1-100):", 16));
    if (size < 1 || size > 100 || isNaN(size)) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(size);
}

// Initialize the grid on load
createGrid(16);

// Event listener for resizing the grid
resizeButton.addEventListener("click", resizeGrid);
