/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function adChange(){

var ad2 = [];                  //Create and declare JSON objects

ad2.push({ "title" : 'Verizon', "description" : 'Get a FREE PHONE with every added line!' });
ad2.push({ "title" : 'SuperBowl XLVIII', "description" : 'Seahawks Vs Broncos!'});
ad2.push({ "title" : 'Comcast', "description" : 'Get a FREE month of HBO when you sign up!' });
ad2.push({ "title" : 'Dominoes', "description" : 'Buy two pizzas get the third FREE!' });
ad2.push({ "title" : 'Playstation', "description" : 'Greatness Awaits' });

var ranIndex = change(ad2.length);  //Call change function and store result in ranIndex

console.log(ranIndex);
console.log(ad2[ranIndex]["title"] + " " + ad2[ranIndex]["description"]);

var div = document.getElementById("ad");    //Create variable to store "ad" element

div.innerHTML = ad2[ranIndex]["title"] + " " + ad2[ranIndex]["description"]; //Change the innerHTML to display one of the created ad's

document.title = ad2[ranIndex]["description"].substr(0,10);         //Change the title of the page to display the first 10 characters of the ad

}

function change(max){       //Function to get random number between 0-4
    return (Math.floor ( Math.random()*max));
}

adChange();