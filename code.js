const container = document.createElement('div');
document.body.appendChild(container);
container.querySelector('div')
container.classList.toggle('grid');

for (let i=1; i<=256; i++) {
    let box= document.createElement('div');
    container.appendChild(box);
    box.querySelector('div');
    box.classList.toggle('block')
   

}
const box = document.querySelector('.block')
const boxes = document.querySelectorAll('.block')
boxes.forEach(div => {div.addEventListener("mouseover", mouseOver)});
boxes.forEach(div => {div.addEventListener("mouseout", mouseOut)});

function mouseOver() {
    box.style.background = "red";
}

function mouseOut() {
    box.style.background = "black";
}

for (let x=1;x<=256;x++) {
    
}