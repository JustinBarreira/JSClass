/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var docvalid1 = false;                        //Variables used to check if docs have been clicked
var docvalid2 = false;
var scrollvalid = false;                      //Variable to check if the scrollbox has been scolled to the bottom
var radioCont = false;                        //To check if a radio button has been selected
var accepted = false;                         //To check if the agree radio button was selected
var declined = false;                         //To check if the notagree radio button was selected
var agree1 = document.getElementById('agreeLink1');
var agree2 = document.getElementById('agreeLink2');
var btnAgree = document.getElementById('agree');
var btnNotAgree = document.getElementById('notagree');

agree1.addEventListener('click', doc1Valid);        //Click event listener for the first doc
agree2.addEventListener('click', doc2Valid);        //Click event listener for the second doc

var objDiv = document.getElementById("agreeScroll");
objDiv.addEventListener('scroll',scrollValid);      //Scroll event listener for the scroll box

function ToggleDiv() {              //Function to remove everything from the page
                 $("#section1,#section2,#mainform").toggle("slow");
            };
            
function doc1Valid(){                //Function to change the variable associated with the first doc to true
    docvalid1 = true;               
    console.log("doc1 is " + docvalid1);
    scrollValid();
}

function doc2Valid() {              //Function to change the variable associated with the second doc to true
    docvalid2 = true;
    console.log("doc2 is " + docvalid2);
    scrollValid();
}

function scrollValid() {            //Function to check if the scroll box has been scrolled
    if ( objDiv.scrollTop === (objDiv.scrollHeight-objDiv.offsetHeight) && docvalid1 === true && docvalid2 === true){
        scrollvalid = true;
        btnAgree.disabled = false;
        btnNotAgree.disabled = false;
    };
    console.log("scroll is " + scrollvalid);
    console.log(btnAgree);
}

function btnValid(){            //Function to set the variable associated with each radio button to true
                                //then appends continue message after continue button
        if (document.getElementById('agree').checked === true && docvalid1 === true && docvalid2 === true){
            
            declined = false;
            accepted = true;
        }
        else if (document.getElementById('notagree').checked === true && docvalid1 === true && docvalid2 === true){             

            accepted = false;
            declined = true;
        }
        if (radioCont !== true && docvalid1 === true && docvalid2 === true){
            $("<b>You may now continue</b>").appendTo('form');
            radioCont = true;
}
}
    
function validation(){          //Function to remove everything from the page and run the function
                                //to create a new div based on which radio button is selected        
        
            if (declined === false && accepted === true){                
                                
                ToggleDiv();
                $("#submitAgreement").toggle("slow");

                createNewDiv(
                        "white",
                        "green",
                        "500px",
                        "2px solid black",
                        "15px",
                        "100%",
                        "1em auto",            
                        "<h3>Thank You! You may now continue.</h3>");                    
            }                   
            else if (accepted === false && declined === true){                        
                              
                ToggleDiv();
                $("#submitAgreement").toggle("slow");                          
                
                createNewDiv(
                        "black",
                        "red",
                        "500px",
                        "2px solid black",
                        "15px",
                        "100%",
                        "1em auto",            
                        "<h3>You have not accepted the terms and conditions. You will now be redirected.</h3>");                                    
            }       
}

$('#agree').click(function() {              //Click event listener for the agree radio button
    btnValid();
});

$('#notagree').click(function() {           //Click event listener for the notagree radio button
    btnValid();
});

$('#submitAgreement').click(function() {    //Click event listener for the continue button
    validation();
});

function createNewDiv(color,bgcolor,width,border,borderradius,height,margin,html){          //Function to create the new div
var newDiv = document.createElement("div");
      newDiv.style.color = color;
      newDiv.style.backgroundColor = bgcolor;
      newDiv.style.width = width;
      newDiv.style.border = border;
      newDiv.style.borderRadius = borderradius;
      newDiv.style.minHeight = height;
      newDiv.style.margin= margin;
      var label = document.createElement('label');
      label.innerHTML = html;
      label.style.textAlign="center";
      newDiv.appendChild(label);
      myDiv = document.getElementById("changeDiv");
      document.body.insertBefore(newDiv, myDiv);
}

