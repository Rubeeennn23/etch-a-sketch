const button = document.createElement('button');
document.body.appendChild(button);button.querySelector('button');
button.classList.toggle('button');
button.textContent = 'Change grid'
button.addEventListener('click',gridChange)

let container = document.createElement('div');
document.body.appendChild(container);
container.querySelector('div')
container.classList.toggle('grid');

let boxNumber=16;
createGrid(boxNumber);

function createGrid(boxNumber) {
    let gridSize= boxNumber*boxNumber;
    let squaresWidth = 480/boxNumber;
    let squaresHeight = 480/boxNumber;  
    for (let i=1; i<=gridSize; i++) {
        function mouseOver() {
            box.style.background = "red"
        };
        
        function mouseOut() {
            box.style.background = "black"
        };        

        let box= document.createElement('div');
        container.appendChild(box);
        box.querySelector('div');
        box.classList.toggle('block');
        box.addEventListener("mouseover", mouseOver);
        box.addEventListener("mouseout", mouseOut);
        box.style.cssText = `width: ${squaresWidth}px; height:${squaresHeight}px;`
    }
};

function gridChange() {
    let squaresNumber = parseInt(prompt('Select a grid number of squares per row and column'))
    if (squaresNumber>0 && squaresNumber<=100) {
        // 1 - Define the new number of squares per row and column
        boxNumber=squaresNumber
        // 1- Remove the existing grid
        document.body.removeChild(container)
        
        // 2- Create a new grid 
        return updateGrid(boxNumber)
    } else {
        return alert('ERROR: The number of squares has to be between 1 and 100')
    }
    
};

function updateGrid(boxNumber) {
    
    // 1- Create a new grid of the same size
    let container = document.createElement('div');
    document.body.appendChild(container);
    container.querySelector('div')
    container.classList.toggle('grid');
    // Create the blocks
    let gridSize= boxNumber*boxNumber;
    let squaresWidth = 480/boxNumber;
    let squaresHeight = 480/boxNumber;  
    for (let i=1; i<=gridSize; i++) {
        function mouseOver() {
            box.style.background = "red"
        };
        
        function mouseOut() {
            box.style.background = "black"
        };        

        let box= document.createElement('div');
        container.appendChild(box);
        box.querySelector('div');
        box.classList.toggle('block');
        box.addEventListener("mouseover", mouseOver);
        box.addEventListener("mouseout", mouseOut);
        box.style.cssText = `width: ${squaresWidth}px; height:${squaresHeight}px;`
    } return container
    
    
    
    
   // document.getElementsByClassName('block').style.cssText = `width: ${480/boxNumber}px; height:${480/boxNumber}px;`;
};