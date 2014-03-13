/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm() {
    
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comments = document.getElementById("comments");
    var err_name = document.getElementById("err_name");
    var err_email = document.getElementById("err_email");
    var err_comments = document.getElementById("err_comments");
    
    if ( name.value.length > 0 ) {              //Check name length validity
        console.log("Name is Valid");
        err_name.innerHTML = "<strong>Name is valid</strong>";  //Output valid message
        name.className = "good";                                //Add green border to input area
        err_name.className = "valid";                           //Change message class to valid
    }   else {
        console.log("Name is NOT Valid");                       
        err_name.innerHTML = "<strong>Name is NOT valid</strong>";      //Output error message
        name.className = "bad";                                         //Add red border to input area
        err_name.className = "error";                                   //Change message class to error
    }
    
    if ( email.value.length > 0  && email.value.indexOf("@") > 0 && email.value.indexOf(".") > 0) {                 //Check email length validity
        console.log("Email is Valid");
        err_email.innerHTML = "<strong>Email is valid</strong>";        //Output valid message
        email.className = "good";                                       //Add green border to input area
        err_email.className = "valid";                                  //Change message class to valid
    }   else {
        console.log("Email is NOT Valid");                              
        err_email.innerHTML = "<strong>Email is NOT valid</strong>";    //Output error message
        email.className = "bad";                                        //Add red border to input area
        err_email.className = "error";                                  //Change message class to error
    }
    
    if ( email.value.indexOf("@") < 0 ) {           //Check email for @ symbol
        err_email.innerHTML = "<strong>Email requires @ symbol</strong>";       //Output message to screen
    }
    
    if ( email.value.indexOf(".") < 0 ) {           //Check email for . symbol
        err_email.innerHTML = "<strong>Email requires . symbol</strong>";       //Output message to screen
    }
    
    if ( comments.value.length > 0 && comments.value.length < 150 ) {               //Check comment area length validity
        console.log("Comments are Valid");
        err_comments.innerHTML = "<strong>Comments are valid</strong>";             //Output valid message
        err_comments.className = "valid";                                           //Change message class to valid
    }   else {
        console.log("Comments are NOT Valid");
        err_comments.innerHTML = "<strong>Comments are NOT valid</strong>";         //Output error message
        err_comments.className = "error";                                           //Change message class to error
    }
}