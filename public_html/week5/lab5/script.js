/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function noSpaceAlphaValidate( str ) {      //First name validation (No spaces allowed)
        var alphaRegex = /^[A-z]{1,}$/;
        return alphaRegex.test(str);			
}
  
function spaceAlphaValidate( str ) {        //Last name validation (spaces allowed)
        var alphaRegex = /^[A-z" "]{1,}$/;
        return alphaRegex.test(str);
}

function emailValidate ( str ) {            //Email validation
        var emailRegex = /(^[A-z]+@[A-z]+.[A-z]{3}$)/;
        return emailRegex.test( str );
    
}

function strip_HTML(str) {                  //Comment HTML remove function
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitform() {                     //Submit button funtion to run each validation function above


        var fname = document.getElementById("fname");           //Store input into variables
        var lname = document.getElementById("lname");
        var email = document.getElementById("email");
        var comments = document.getElementById("comments");

        if ( !fname.value.length ) {                            //Test first name length
                console.log("First name needs a length");
                ferr_name.innerHTML = "<strong>First name needs a length</strong>";      //Output error message
                fname.className = "bad";                                         //Add red border to input area
                ferr_name.className = "error";                                   //Change message class to error
        } else if ( noSpaceAlphaValidate( fname.value ) == false ) {        //Run function to check first name validity
                console.log("First name cannot contain spaces or numbers");
                ferr_name.innerHTML = "<strong>First name cannot contain spaces or numbers</strong>";      //Output error message
                fname.className = "bad";                                         //Add red border to input area
                ferr_name.className = "error";                                   //Change message class to error
        } else {
                console.log("First name is good");
                ferr_name.innerHTML = "<strong>Name is valid</strong>";  //Output valid message
                fname.className = "good";                                //Add green border to input area
                ferr_name.className = "valid";                           //Change message class to valid
        }
                        
        if ( !lname.value.length ) {
                console.log("Last name needs a length");        //Test last name length
                lerr_name.innerHTML = "<strong>Last name needs a length</strong>";      //Output error message
                lname.className = "bad";                                         //Add red border to input area
                lerr_name.className = "error";                                   //Change message class to error
        } else if ( spaceAlphaValidate( lname.value ) == false ) {          //Run function to check last name validity 
                console.log("Last name cannot contain numbers");
                lerr_name.innerHTML = "<strong>Last name cannot contain numbers</strong>";      //Output error message
                lname.className = "bad";                                         //Add red border to input area
                lerr_name.className = "error";                                   //Change message class to error
        } else {
                console.log("Last name is good");
                lerr_name.innerHTML = "<strong>Name is valid</strong>";  //Output valid message
                lname.className = "good";                                //Add green border to input area
                lerr_name.className = "valid";                           //Change message class to valid
        }
        
        if ( !email.value.length ) {                            //Test email for length
                console.log("Please enter your email");                     //Run function to check email validity
                err_email.innerHTML = "<strong>Please enter your email</strong>";    //Output error message
                email.className = "bad";                                        //Add red border to input area
                err_email.className = "error";                                  //Change message class to error
        } else if ( emailValidate( email.value ) === false ) {
                console.log("Email is not valid");
                err_email.innerHTML = "<strong>Email is NOT valid</strong>";    //Output error message
                email.className = "bad";                                        //Add red border to input area
                err_email.className = "error";                                  //Change message class to error
        } else {
                console.log("Email is good");
                err_email.innerHTML = "<strong>Email is valid</strong>";        //Output valid message
                email.className = "good";                                       //Add green border to input area
                err_email.className = "valid";                                  //Change message class to valid
        }
        
        if ( !comments.value.length ){
                err_comments.innerHTML = "<strong>Please enter some comments</strong>";
                comments.className = "bad";
                err_comments.className = "error";
        }
        else if ( comments.value.length >= 150 ){
                err_comments.innerHTML = "<strong>Please enter less than 150 characters</strong>";
                comments.className = "bad";
                err_comments.className = "error";
        }
        else{
                err_comments.innerHTML = "<strong>Comments are good</strong>";
                comments.className = "good";
                err_comments.className = "valid";
        }
        comments.value = strip_HTML( comments.value );          //Run function to check and remove HTML from comments
       
}
