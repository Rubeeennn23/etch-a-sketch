const button = document.createElement('button');
document.body.appendChild(button);button.querySelector('button');
button.classList.toggle('button');
button.textContent = 'Change grid'
button.addEventListener('click',gridChange)

const container = document.createElement('div');
document.body.appendChild(container);
container.querySelector('div')
container.classList.toggle('grid');

let boxNumber=16;
let squaresWidth = 480/boxNumber;
let squaresHeight = 480/boxNumber;  


for (let i=1; i<=256; i++) {
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
};

function gridChange() {
    let squaresNumber = parseInt(prompt('Select a grid number of squares per row and column'))
    if (squaresNumber>0 && squaresNumber<=100) {
        boxNumber=squaresNumber
    } else {
        return alert('ERROR: The number of squares has to be between 1 and 100')
    } return boxNumber;
};