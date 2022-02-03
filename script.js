
const container = document.querySelector('#container');

for(i=0;i<16*16;i++){
    var div = document.createElement('div');
    div.classList.add('grid-item');  
    container.appendChild(div);
   
   
}
//Select all squares created for the grid
const squares = document.querySelectorAll(".grid-item");

 for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseout", function() {
        squares[i].classList.remove("red");
     }); 
     squares[i].addEventListener("mouseover", function() {
        squares[i].classList.add("red");
      });
     
 }
   
    