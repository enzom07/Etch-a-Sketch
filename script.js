const def = 16;
const size = 600;
const btn = document.querySelector('#btn');
const btn_clear = document.querySelector('#clear');
const btn_eraser = document.querySelector('#eraser');
const btn_scale = document.querySelector('#opacity');
const btn_rainbow = document.querySelector('#rainbow');
const cred = "#ff0000";
const cwhite = "#ffffff";

var square_size;
var container = document.querySelector('#container');
var div;
var divStyle;
var input = def;
var opa = 1; //Opacity
var squares; 


//For each click on the button
btn.addEventListener('click', () => {
    input = prompt("Enter the number of squares per side for the new grid (<=100):");
    while(input>100 || input <0){
        input = prompt("Invalid number...enter the number of squares per side for the new grid (x<=100 and x>0):");
    }
    //Create the new grid
    create_grid(input);
    color(cred,1)
});

//Clear ALl
  btn_clear.addEventListener('click', () => {
    create_grid(input);
    color(cred,opa);
  });

//Eraser
btn_eraser.addEventListener('click', () => {
    color(cwhite);
  });

  //Color Scale
btn_scale.addEventListener('click', () => {
    color(cred,0.1);
  });

    //Rainbow
btn_rainbow.addEventListener('click', () => {
    color("rainbow",1);
  });
//Function random to the colors
  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

//Create the grid by default with each class square called grid-item
function create_grid(val){

    for(let i=0;i<val*val;i++){
        square_size = size / val;
        div = document.createElement('div');
        div.classList.add('grid-item'+[i]); 
        container.appendChild(div);
        divStyle = document.querySelector('.grid-item'+[i]).style;
        divStyle.backgroundColor = 'white';
        divStyle.width = square_size+'px';
        divStyle.height = square_size+'px';
        //divStyle.border = 'solid'; 
        divStyle.transition ='.5s all';
    }
}

//Function to add color to squares from 10% to 100% of color
function color(color,opa){   
    squares = document.querySelectorAll(".grid-container > div");
    squares.forEach((div) => {
        let value = 1;
        if(opa<1){
            value = 0.1;
        }
        div.addEventListener("mouseover",function(){
            if(color === "rainbow"){
                div.style.cssText = "background-color:"+random_rgba()+"; width:"+square_size+"px; height:"+square_size+"px; transition: .5s all; opacity:"+value+"";
            }
            else{
                div.style.cssText = "background-color:"+color+"; width:"+square_size+"px; height:"+square_size+"px; transition: .5s all; opacity:"+value+"";
                if(value<1){
                    value = value + 0.1; 
                }
             }
        });            
    }); 
  }

window.onload = () => {
    //Grid default value 16x16 red color
create_grid(input);
color(cred,opa);
}



