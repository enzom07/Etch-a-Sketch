//Select Container
const container = document.querySelector('#container');
var div;
var divStyle;
var value;
//Create the grid by default with each class square called grid-item
for(let i=0;i<16*16;i++){
    div = document.createElement('div');
    div.classList.add('grid-item'+[i]); 
    container.appendChild(div);
    divStyle = document.querySelector('.grid-item'+[i]).style;
    divStyle.backgroundColor = 'blue';
    divStyle.width = '50px';
    divStyle.height = '50px'; 
    divStyle.transition ='.5s all';
}

//Select all squares created for the grid
var squares = document.querySelectorAll(".grid-container > div");

//Houvering effect to each square
 for (let i = 0; i < squares.length; i++) {
    value = 0.1;
    squares[i].addEventListener("mouseout", function() {
        //squares[i].classList.remove("red");
        divStyle = document.querySelector('.grid-item'+[i]).style;
        divStyle.opacity = value;
        divStyle.backgroundColor = 'red';
        value = value + 0.1;
        //divStyle.backgroundColor = random_rgba();
        
     }); 
     value = 0.1;
     squares[i].addEventListener("mouseover", function() {
        //squares[i].classList.add("red");
        divStyle = document.querySelector('.grid-item'+[i]).style;
        divStyle.opacity = value;
        divStyle.backgroundColor = 'red';
        value = value + 0.1;
        //divStyle.backgroundColor = random_rgba();
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
    //Create the new grid
    for(let i=0;i<input*input;i++){
        div = document.createElement('div');
        div.classList.add('grid-item'+[i]); 
        container.appendChild(div);
        divStyle = document.querySelector('.grid-item'+[i]).style;
        divStyle.backgroundColor = 'blue';
        divStyle.width = '50px';
        divStyle.height = '50px'; 
        divStyle.transition ='.5s all';
    } 
    //Select all squares created for the grid
    squares = document.querySelectorAll(".grid-container > div");

    //Houvering effect to each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseout", function() {
            //squares[i].classList.remove("red");
            divStyle = document.querySelector('.grid-item'+[i]).style;
            divStyle.backgroundColor = random_rgba();
         }); 
         squares[i].addEventListener("mouseover", function() {
            //squares[i].classList.add("red");
            divStyle = document.querySelector('.grid-item'+[i]).style;
            divStyle.backgroundColor = random_rgba();
          });
         
     }

  });


  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function create_grid(){



}