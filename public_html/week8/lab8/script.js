/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fade = document.getElementById('fade');
var time = 0;
fade.style.opacity = time;
var timer = setInterval(fadeIn, 100);
var can = document.getElementById('shapes');
var ctx = can.getContext('2d');

        //requestAnimationFrame(fadeIn);
            
            function fadeIn() {
                 
                if ( time < 10 ){
                    fade.style.opacity = (time *.1);
                    time += 1;                                      
                     
                }
                else{
                    clearInterval(timer);
                }
            }  
             
            function hide() {
                    
                    fade.style.visibility="hidden";
                
            } 
           
            setTimeout(hide, 10000);

ctx.fillStyle = "black";
ctx.fillRect(50,200,250,100);

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(400, 250, 50, 0, Math.PI * 2, false);
ctx.fill();

function applyImage(){
    var can = document.getElementById('shapes');
    var ctx = can.getContext('2d');
    
    var img = new Image();
    img.src = "300JS.jpg";

    img.addEventListener("load", function(){ctx.drawImage(img,525,100);}, false);
}

window.addEventListener("load", applyImage, false);