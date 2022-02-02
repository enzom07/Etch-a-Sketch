
const container = document.querySelector('#container');

for(i=0;i<16*16;i++){
    var div = document.createElement('div');
    div.style.cssText = 'background: blue; height: 50px; width: 50px; margin:10px'; 
    //content.classList.add('content');
    //content.textContent = 'This is the glorious text-content!';

container.appendChild(div);

}
