const def = 16;
const size = 600;
const btn = document.querySelector('#btn');
const btn_clear = document.querySelector('#clear');
const btn_eraser = document.querySelector('#eraser');
const btn_scale = document.querySelector('#opacity');
const btn_rainbow = document.querySelector('#rainbow');
const cred = "#ff0000";
const cwhite = "#ffffff";
const defcolor = "#333333";


var container = document.querySelector('#container');
var slider = document.querySelector('#myrange');
var slidervalue = document.querySelector('#slidervalue');
var sel_color = document.querySelector('#colorpicker');
var square_size;
var div;
var divStyle;
var input = def;
var opa = 1; //Opacity
var squares; 


//Clear ALl
btn_clear.addEventListener('click', () => {
    delete_grid();
    create_grid(input);
    color(sel_color.value,opa);
});

//Eraser
btn_eraser.addEventListener('click', () => {
    color(cwhite);
  });

//Color Scale
btn_scale.addEventListener('click', () => {
    color(sel_color.value,0.1);
  });

//Rainbow
btn_rainbow.addEventListener('click', () => {
    color("rainbow",1);
  });

//Slider Change
slider.onchange = function() {
    slidervalue.textContent = this.value+'x'+this.value;
    delete_grid();
    input = this.value;
    create_grid(this.value);
    color(sel_color.value,opa);
} 

//Select Color
sel_color.onchange = function() {
  color(sel_color.value,opa);
} 


//Function random to the colors
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

//Create the grid 
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

//Delete current grid
function delete_grid(){
  squares.forEach((div) => {
    div.remove();
  });
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
  create_grid(input);   //Grid default value 16x16 red color
  slidervalue.textContent = input+'x'+input; // Display the default slider value
  slider.value = input;
  sel_color.value = defcolor; //Default color
  color(sel_color.value ,opa);
}


