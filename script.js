//Select Container div
const container = document.querySelector('#container');
var div;
var divStyle;
const def = 16;
//Create const btn to select the button in the container div
const btn = document.querySelector('#btn');


//Call function create_grid with the default value 16x16
create_grid(def);
//Select all squares created for the grid
var squares = document.querySelectorAll(".grid-container > div");
color();
 //For each click on the button
 btn.addEventListener('click', () => {
    let input = prompt("Enter the number of squares per side for the new grid (<=100):");
    while(input>100 || input <0){
        input = prompt("Invalid number...enter the number of squares per side for the new grid (x<=100 and x>0):");
    }
    //Delete the current grid
    delete_grid();
    //Create the new grid
    create_grid(input);
    squares = document.querySelectorAll(".grid-container > div");
    //Houvering effect to each square
    houver_effect();
  });

//Function random to the colors
  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

//Create the grid by default with each class square called grid-item
function create_grid(val){
    for(let i=0;i<val*val;i++){
        div = document.createElement('div');
        div.classList.add('grid-item'+[i]); 
        container.appendChild(div);
        divStyle = document.querySelector('.grid-item'+[i]).style;
        divStyle.backgroundColor = 'blue';
        divStyle.width = '50px';
        divStyle.height = '50px'; 
        divStyle.transition ='.5s all';
    }
}

//Function to add color to squares from 10% to 100% of color
function color(){   
    //For ecah square
    squares.forEach((div) => {
        let value = 0.1;
        //console.log(div);
        div.addEventListener("mouseover",function(){
            div.style.cssText = "background-color: red; width: 50px; height: 50px; transition: .5s all; opacity:"+value+"";
            value= value + 0.1; 
        });            
    }); 
    
  }

function delete_grid(){
    for(let i=0; i < squares.length; i++){
        container.removeChild(squares[i]);
    }
}

function houver_effect(){
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
}

