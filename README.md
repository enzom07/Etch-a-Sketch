# Etch-a-Sketch

function rainbow(){
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