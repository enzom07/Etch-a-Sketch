//Select Container
const container = document.querySelector('#container');

//Create the grid by default with each class square called grid-item
for(let i=0;i<16*16;i++){
    var div = document.createElement('div');
    div.classList.add('grid-item');  
    container.appendChild(div);
}

//Select all squares created for the grid
var squares = document.querySelectorAll(".grid-item");

//Houvering effect to each square
 for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseout", function() {
        squares[i].classList.remove("red");
     }); 
     squares[i].addEventListener("mouseover", function() {
        squares[i].classList.add("red");
      });
     
 }

 //Create const btn to select the button in the container div
 const btn = document.querySelector('#btn');
  
 //For each click on the button
 btn.addEventListener('click', () => {
    //Enter a valid number for the new grid
    let input = prompt("Enter the number of squares per side for the new grid (<=100):");
    while(input>100 || input <0){
        input = prompt("Invalid number...enter the number of squares per side for the new grid (x<=100 and x>0):");
    }
    //Delete the current grid
    for(let i=0; i < squares.length; i++){
        container.removeChild(squares[i]);
    }
    for(let i=0;i<input*input;i++){
        div = document.createElement('div');
        div.classList.add('grid-item');  
        container.appendChild(div);
    } 
    //Select all squares created for the grid
    squares = document.querySelectorAll(".grid-item");

    //Houvering effect to each square
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("mouseout", function() {
        squares[i].classList.remove("red");
     }); 
      squares[i].addEventListener("mouseover", function() {
        squares[i].classList.add("red");
      });  
 }

  });