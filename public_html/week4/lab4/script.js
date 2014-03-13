/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var userdata = {        //Declare JSON
    
    "name" : '',
    "email" : '',
    "mousex" : [],
    "mousey" : [],
    "height" : [],
    "width" : [],
    "agent" : '',
    "title" : ''
};

function storeData() {      //Function to store the name and email on blur

    userdata.name = document.getElementById('fullname').value;
    userdata.email = document.getElementById('email').value;
}
    var fname = document.getElementById('fullname');
    var email = document.getElementById('email');
    fname.addEventListener('blur', storeData);
    email.addEventListener('blur', storeData);

function OnMouseMove(e){    //Function to track mouse movements
    
    userdata.mousex.push(e.clientX);
    userdata.mousey.push(e.clientY);
    
        if ( userdata.mousex.length > 100 ) {
                document.removeEventListener('mousemove', OnMouseMove);
        }
}
document.addEventListener('mousemove', OnMouseMove);    //Event listener to start OnMouseMove function

function screenData (){     //Function to get screen info
    
    userdata.height = window.innerHeight;
    userdata.width = window.innerWidth;
    userdata.agent = window.navigator.userAgent;
    userdata.title = document.title;
    
}
window.addEventListener("load", screenData);            //Event listener to start screenData function



function showResults() {                               
    console.clear();
    console.log(userdata);
}


var results = document.getElementById('showResults');


results.addEventListener("click", showResults);