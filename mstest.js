/*var objPeople = [
    {
        username: "EUNICE",
        password: "MR EMMANUEL"
    },

  
    {
        username: "ONYIYE",
        password: "MR EMMANUEL"
    },

 

    {
        username: "TOPE",
        password: "MR EMMANUEL"
    },

  

    {
        username: "CLARA",
        password: "MR EMMANUEL"
    },

   
    {
        username: "CHIOMA",
        password: "MR EMMANUEL"
    }
]

function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var emptyUserName = document.getElementById("emptyUserName");
    var emptyPassword = document.getElementById("emptyPassword");

    for(i = 0; i < objPeople.length; i++){
        if(username.toLowerCase() == objPeople[i].username.toLowerCase() && password.toLowerCase() == objPeople[i].password.toLowerCase()){
            console.log(`${username} is logged in !!!` )
            window.open("testZone.html",'newwindow');
            return
        }
        
    else if(username == "" && password == ""){
        emptyUserName.innerHTML = "  Please Input First Name";
        emptyPassword.innerHTML = "  Empty Field!"; 
    }
        else if(username !== objPeople[i].username && password == objPeople[i].password){
            console.log("Empty Field");
            emptyUserName.innerHTML = "  Invalid Input";
            //setInterval(() => {emptyUserName.remove() }, 3000);
        }

        else if(username == objPeople[i].username && password == "" ){
            console.log("Invalid Input");
            
            emptyPassword.innerHTML = "  Invalid Input!";
            //setTimeout(() => {emptyUserName.remove()}, 3000);
        }
      
        else if(username == objPeople[i].username && password !== objPeople[i].password){
            console.log("Invalid Input");
            emptyPassword.innerHTML = "  Incorrect Input!"; 
            //setInterval(() => {emptyPassword.remove()}, 3000);
            
        }

       

       
    }
   // console.log("Incorrect username and password");
    //alert('Wrong First Name or Password...try again');
   
}


//registration form

//function register(){
//alert("Regisjtration form is under contruction... Check back later!!");
//}



//confirm before going to check instructur's name

var student_allowed = "crestware00";

function confirm_me(){
    
    var username = prompt("Please enter crestware password to continue");


  //  for(i = 0; i < student_allowed.length; i++){
        if(username == student_allowed){
            console.log(`${username} is logged in !!!` )
            window.open("kvstudio.html",'newwindow');
            return
        }

        else if(username !== student_allowed){
            alert("wrong Password");
        }
            
        else if(username == ""){
            console.log("Empty Field");
    alert('You must put crestware password to continue');
return false;
        }
    }
    //console.log("Incorrect username");
   // alert('Wrong Password...try again');




*/






let username = document.getElementById("username");

let submitSet = document.getElementById('submitSet');

function validationJor(username){ 
let regEx = /^[a-z][a-z\s]*$/;

    let validationTalk = document.getElementById("validationTalk");
    if(username.value.match(regEx)){
        window.location.replace('testZone.html'); 
      return true;
    } 
    else{
        validationTalk.innerHTML = "Please Enter Name";
      
    }
 
        
        //alert(`Welcome ${username.value}`);
      
    
  }
    

    
    
    

function check(){
   
    var c = 0;
    var q1 = document.qiuz.question1.value;
    var q2 = document.qiuz.question2.value;
    var q3 = document.qiuz.question3.value;
    var q4 = document.qiuz.question4.value;
    var q5 = document.qiuz.question6.value;
    var q6 = document.qiuz.question7.value;
    var q7 = document.qiuz.question7.value;
    var q8 = document.qiuz.question8.value;
    var q9 = document.qiuz.question9.value;
    var q10 = document.qiuz.question10.value;
    var q11 = document.qiuz.question11.value;
    var q12 = document.qiuz.question12.value;
    var q13 = document.qiuz.question13.value;
    var q14 = document.qiuz.question14.value;
    var q15 = document.qiuz.question15.value;
    var q16 = document.qiuz.question16.value;
    var q17 = document.qiuz.question17.value;
    var q18 = document.qiuz.question18.value;
    var q19 = document.qiuz.question19.value;
    var q20 = document.qiuz.question20.value;
    var q21 = document.qiuz.question21.value;
    var q22 = document.qiuz.question22.value;
    var q23 = document.qiuz.question23.value;
    var q24 = document.qiuz.question24.value;
    var q25 = document.qiuz.question25.value;
    var q26 = document.qiuz.question26.value;
    var q27 = document.qiuz.question27.value;
    var q28 = document.qiuz.question28.value;
    var q29 = document.qiuz.question29.value;
    var q30 = document.qiuz.question30.value;
    var q31 = document.qiuz.question31.value;
    var q32 = document.qiuz.question32.value;
    var q33 = document.qiuz.question33.value;
    var q34 = document.qiuz.question34.value;
    var q35 = document.qiuz.question35.value;
    var q36 = document.qiuz.question36.value;
    var q37 = document.qiuz.question37.value;
    var q38 = document.qiuz.question38.value;
    var q39 = document.qiuz.question39.value;
    var q40 = document.qiuz.question40.value;
    var q41 = document.qiuz.question41.value;
    var q42 = document.qiuz.question42.value;
    var q43 = document.qiuz.question43.value;
    var q44 = document.qiuz.question44.value;
    var q45 = document.qiuz.question45.value;
    var q46 = document.qiuz.question46.value;
    var q47 = document.qiuz.question47.value;
    var q48 = document.qiuz.question48.value;
    var q49 = document.qiuz.question49.value;
    var q50 = document.qiuz.question50.value;

    
    var result = document.getElementById('result');
    var demo1 = document.getElementById("demo1");
    var quiz = document.getElementById('quiz');
    let goBack = document.getElementById('goBack');
    let testResult1 = document.getElementById('testResult');
    if(q1 == "third Generation"){c+=2}
  
    if(q2 == "Fifth generation"){c+=2}
  
    if(q3 == "Line"){c+=2}
  
    if(q4 == "Selection Bar"){c+=2}
  
    if(q5 == "Query"){c+=2}
  
    if(q6 == "Right click"){c+=2}
  
    if(q7 == "Sheet option"){c+=2}
  
    if(q8 == "Shift +"){c+=2}
  
    if(q9 == "Primary"){c+=2}
  
    if(q10 == "End"){c+=2}
  
    if(q11 == "Monitor"){c+=2}
  
    if(q12 == "Timing"){c+=2}
  
    if(q13 == "Undo"){c+=2}
  
    if(q14 == "Justify"){c+=2}
  
    if(q15 == "Database"){c+=2}
  
    if(q16 == "Record"){c+=2}
  
    if(q17 == "Toggle case"){c+=2}
  
    if(q18 == "Count"){c+=2}
  
    if(q19 == "IF"){c+=2}
  
    if(q20 == "Margin"){c+=2}
  
    if(q21 == "Justify"){c+=2}
  
    if(q22 == "Slider sorter"){c+=2}
  
    if(q23 == "RAM"){c+=2}
  
    if(q24 == "Sentence Case"){c+=2}
  
    if(q25 == "shift + $"){c+=2}
  
    if(q26 == "Macro"){c+=2}
  
    if(q27 == "Table"){c+=2}
  
    if(q28 == "F5"){c+=2}
  
    if(q29 == "RAM"){c+=2}
  
    if(q30 == "Microsoft word"){c+=2}
  
    if(q31 == "The computer user"){c+=2}
  
    if(q32 == "Jpg"){c+=2}
  
    if(q33 == "20"){c+=2}
  
    if(q34 == "Pmt"){c+=2}
  
    if(q35 == "Line"){c+=2}
  
    if(q36 == "Filtering"){c+=2}
  
    if(q37 == "Table"){c+=2}
  
    if(q38 == "gridlines"){c+=2}
  
    if(q39 == "RAM"){c+2}
  
    if(q40 == "first"){c+=2}

    if(q41 == "400%"){c+=2}

    if(q42 == "Press Escape"){c+=2}

    if(q43 == "Application"){c+=2}

    if(q44 == "Magic tool"){c+=2}

    if(q45 == "Landscape"){c+=2}

    if(q46 == "Ctrl + Y"){c+=2}

    if(q47 == "Cropping"){c+=2}

    if(q48 == "Ctrl + E"){c+=2}

    if(q49 == "All of the above"){c+=2}

    if(q50 == "All of the above"){c+=2}





  
    var txt;
    var r = confirm(`Are you sure you want to submit!`);
    if(r == true){
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
        return false;
    }
  
  quiz.style.display="none"; 
  demo1.style.display="none";
  goBack.style.display = "block";
  testResult1.innerHTML = "TEST RESULT";

   // the code to get result once------> result.textContent = `${c}`;
   //demo1.remove();
   if(c <= 30 ){
    result.innerHTML = `<p>SCORE: ${c}%</p>
                      <p><b>STATUS:</b> FAILED</p>
                      <P><b>REMARK:</b> A VERY POOR RESULT.`
                      
}

 if(c <= 39){
  result.innerHTML = `<p>SCORE: ${c}%</p>
  <p><b>STATUS:</b> FAILED</p>
  <P><b>REMARK:</b> A VERY POOR RESULT, WORK HARDER.`
     
 }
 else if(c <= 59){
  result.innerHTML = `<p>SCORE: ${c}%</p>
  <p><b>STATUS:</b> AVERAGE</p>
  <P><b>REMARK:</b> AN AVERAGE RESULT, BUT YOU CAN DO BETTER.`
 }

 else if(c <= 69){
  result.innerHTML = `<p>SCORE: ${c}%</p>
  <p><b>STATUS:</b> VERY GOOD</p>
  <P><b>REMARK:</b> A VERY GOOD RESULT, KEEP IT UP.`
 }
 
 else{
  result.innerHTML = `<p>SCORE: ${c}%</p>
  <p><b>STATUS:</b> EXCELLENT</p>
  <P><b>REMARK:</b> A VERY REMARKABLE RESULT...BIG CONGRAT TO YOU.`
 }
  

}


 //Timer part
  
 let startTime = 50;
 let time = startTime * 60;
 
 let countDown = document.getElementById("demo1");
 
 let x = setInterval(updatedCountDown, 1000);
 
 function updatedCountDown(){
     let minutes = Math.floor(time / 60);
     let Seconds = time % 60;
 
     countDown.innerHTML = `Time Remaining: ${minutes}:${Seconds}`;
     time--;
 
     if(time < 0){
         clearInterval(x);
         countDown.innerHTML = "Time Up";
         var c = 0;
         var q1 = document.qiuz.question1.value;
         var q2 = document.qiuz.question2.value;
         var q3 = document.qiuz.question3.value;
         var q4 = document.qiuz.question4.value;
         var q5 = document.qiuz.question6.value;
         var q6 = document.qiuz.question7.value;
         var q7 = document.qiuz.question7.value;
         var q8 = document.qiuz.question8.value;
         var q9 = document.qiuz.question9.value;
         var q10 = document.qiuz.question10.value;
         var q11 = document.qiuz.question11.value;
         var q12 = document.qiuz.question12.value;
         var q13 = document.qiuz.question13.value;
         var q14 = document.qiuz.question14.value;
         var q15 = document.qiuz.question15.value;
         var q16 = document.qiuz.question16.value;
         var q17 = document.qiuz.question17.value;
         var q18 = document.qiuz.question18.value;
         var q19 = document.qiuz.question19.value;
         var q20 = document.qiuz.question20.value;
         var q21 = document.qiuz.question21.value;
         var q22 = document.qiuz.question22.value;
         var q23 = document.qiuz.question23.value;
         var q24 = document.qiuz.question24.value;
         var q25 = document.qiuz.question25.value;
         var q26 = document.qiuz.question26.value;
         var q27 = document.qiuz.question27.value;
         var q28 = document.qiuz.question28.value;
         var q29 = document.qiuz.question29.value;
         var q30 = document.qiuz.question30.value;
         var q31 = document.qiuz.question31.value;
         var q32 = document.qiuz.question32.value;
         var q33 = document.qiuz.question33.value;
         var q34 = document.qiuz.question34.value;
         var q35 = document.qiuz.question35.value;
         var q36 = document.qiuz.question36.value;
         var q37 = document.qiuz.question37.value;
         var q38 = document.qiuz.question38.value;
         var q39 = document.qiuz.question39.value;
         var q40 = document.qiuz.question40.value;
         var q41 = document.qiuz.question41.value;
         var q42 = document.qiuz.question42.value;
         var q43 = document.qiuz.question43.value;
         var q44 = document.qiuz.question44.value;
         var q45 = document.qiuz.question45.value;
         var q46 = document.qiuz.question46.value;
         var q47 = document.qiuz.question47.value;
         var q48 = document.qiuz.question48.value;
         var q49 = document.qiuz.question49.value;
         var q50 = document.qiuz.question50.value;
         
         var result = document.getElementById('result');
         var quiz = document.getElementById('quiz');
         let goBack1 = document.getElementById('goBack');
         let testResult = document.getElementById('testResult');
         if(q1 == "third Generation"){c++}
 
         if(q2 == "Fifth generation"){c++}
       
         if(q3 == "Line"){c++}
       
         if(q4 == "Selection Bar"){c++}
       
         if(q5 == "Query"){c++}
       
         if(q6 == "Right click"){c++}
       
         if(q7 == "Sheet option"){c++}
       
         if(q8 == "Shift +"){c++}
       
         if(q9 == "Primary"){c++}
       
         if(q10 == "End"){c++}
       
         if(q11 == "Monitor"){c++}
       
         if(q12 == "Timing"){c++}
       
         if(q13 == "Undo"){c++}
       
         if(q14 == "Justify"){c++}
       
         if(q15 == "Database"){c++}
       
         if(q16 == "Record"){c++}
       
         if(q17 == "Toggle case"){c++}
       
         if(q18 == "Count"){c++}
       
         if(q19 == "IF"){c++}
       
         if(q20 == "Margin"){c++}
       
         if(q21 == "Justify"){c++}
       
         if(q22 == "Slider sorter"){c++}
       
         if(q23 == "RAM"){c++}
       
         if(q24 == "Sentence Case"){c++}
       
         if(q25 == "shift + $"){c++}
       
         if(q26 == "Macro"){c++}
       
         if(q27 == "Table"){c++}
       
         if(q28 == "F5"){c++}
       
         if(q29 == "RAM"){c++}
       
         if(q30 == "Microsoft word"){c++}
       
         if(q31 == "The computer user"){c++}
       
         if(q32 == "Jpg"){c++}
       
         if(q33 == "txt"){c++}
       
         if(q34 == "Pmt"){c++}
       
         if(q35 == "Line"){c++}
       
         if(q36 == "Filtering"){c++}
       
         if(q37 == "Table"){c++}
       
         if(q38 == "gridlines"){c++}
       
         if(q39 == "RAM"){c++}
       
         if(q40 == "first"){c++}

         if(q41 == "400%"){c+=2}

    if(q42 == "Press Escape"){c+=2}

    if(q43 == "Application"){c+=2}

    if(q44 == "Magic tool"){c+=2}

    if(q45 == "Landscape"){c+=2}

    if(q46 == "Ctrl + Y"){c+=2}

    if(q47 == "Cropping"){c+=2}

    if(q48 == "Ctrl + E"){c+=2}

    if(q49 == "All of the above"){c+=2}

    if(q50 == "All of the above"){c+=2}

       
       
       quiz.style.display="none"; 
       goBack1.style.display = "block";
       testResult.innerHTML = "TEST RESULT";
        // the code to get result once------> result.textContent = `${c}`;
        //demo1.remove();
        if(c <= 30 ){
            result.innerHTML = `<p>SCORE: ${c}%</p>
                              <p><b>STATUS:</b> FAILED</p>
                              <P><b>REMARK:</b> A VERY POOR RESULT.`
                              
        }
        
         if(c <= 39){
          result.innerHTML = `<p>SCORE: ${c}%</p>
          <p><b>STATUS:</b> FAILED</p>
          <P><b>REMARK:</b> A VERY POOR RESULT, WORK HARDER.`
             
         }
         else if(c <= 59){
          result.innerHTML = `<p>SCORE: ${c}%</p>
          <p><b>STATUS:</b> AVERAGE</p>
          <P><b>REMARK:</b> AN AVERAGE RESULT, BUT YOU CAN DO BETTER.`
         }
        
         else if(c <= 69){
          result.innerHTML = `<p>SCORE: ${c}%</p>
          <p><b>STATUS:</b> VERY GOOD</p>
          <P><b>REMARK:</b> A VERY GOOD RESULT, KEEP IT UP.`
         }
         
         else{
          result.innerHTML = `<p>SCORE: ${c}%</p>
          <p><b>STATUS:</b> EXCELLENT</p>
          <P><b>REMARK:</b> A VERY REMARKABLE RESULT...BIG CONGRAT TO YOU.`
         }
          
        }


   }



function firstPage(){
    window.location.replace('index.html')
}


 /*

 

      
  
          
  */
      



  
  
  
  
  
  
  
  
 














    

    


















































