function classification(that) 
{
    if (that.value == "Fresh") 
    {
        
        document.getElementById("Fresh_doc").style.display = "block";

    }
    // else 
    // {
    //     document.getElementById("Fresh_doc").style.display = "none";
    // }
    else if (that.value == "Sphomore")
    {
        
        document.getElementById("Sphomore_doc").style.display = "block";
        
        // document.getElementById('Fresh_doc').onchange = function() {
        //     alert(this.value);}
    }
    // else
    // {
    //     document.getElementById("Sphomore_doc").style.display = "none";
    // }
   else if (that.value == "Jnior")
    {
       
        document.getElementById("Jnior_doc").style.display = "block";
    }
    // else
    // {
    //     document.getElementById("Jnior_doc").style.display = "none";
    // }
    else if (that.value == "Senior")
    {
        
        document.getElementById("Senior_doc").style.display = "block";
    }
    else
    {
        
        document.getElementById("Senior_doc","Fresh_doc",'Sphomore_doc','Jnior_doc').style.display = "none";
    }
}

function refreshPage(){
    //window.location.reload(1);
setTimeout(function() {
    location.reload();
  }, 10000);
}


function getReport(){

    var grade = "";  //declare a variable for grade
    var  result="";  //declare a variable for result

    //read the marks
    var Grade1 = document.getElementById('Grade1').value;
        if(Grade1 == 'A')
            Grade1 = 90;
        else if(Grade1 =='B')
            Grade1 = 80;
        else if(Grade1 == 'C')
        Grade1 = 70;
        else if(Grade1 == 'D')
        Grade1 = 60;
        else
            Grade1 = 50
    var Grade2 = document.getElementById('Grade2').value;
        if(Grade2 == 'A')
            Grade2 = 90;
        else if(Grade2 =='B')
            Grade2 = 80;
        else if(Grade2 == 'C')
        Grade2 = 70;
        else if(Grade2 == 'D')
        Grade2 = 60;
        else
            Grade2 = 50
    var Grade3 = document.getElementById('Grade3').value;

        if(Grade3 == 'A')
            Grade3 = 90;
        else if(Grade3 =='B')
            Grade3 = 80;
        else if(Grade3 == 'C')
            Grade3 = 70;
        else if(Grade3 == 'D')
            Grade3 = 60;
        else
            Grade3 = 50
   
    
    //calculate the total marks (using double notation technique)
     var totalMarks = Grade1 - (- Grade2) - (- Grade3);
    
    //get the average marks
    var averageMarks = totalMarks / 3;                  
    
    //find the grade and result using the ternary operator inside the switch statement                  
    switch(
    
        
            //usage of ternary operator inside switch

            (averageMarks >= 80 && averageMarks <= 100) ? 1 : 
            (averageMarks >= 60 && averageMarks <= 80) ? 2 : 0
            // (averageMarks >= 70 && averageMarks <= 80) ? 3 :
        //     (averageMarks <= 60 ) ? 3 : 0 
           )
            
            {
                case 1 :grade = "A";result="Congratulations, Eligible";break;
                case 2 :grade = "B"; result="Try next semester";break;
                // case 3 :grade = "C"; result="Third Class";break;
                // case 4 :grade = "D"; result="You are not qualified to apply";break;
                case 0 :grade = "F"; result="Not Eligible";break;
            }
            
        
    //display the results   
    // document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    // document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtAvgMarks').value = averageMarks;
    document.getElementById('txtGrade').value = grade;
    document.getElementById('txtResult').value = result;

}

function getReport1(){

    var grade = "";  //declare a variable for grade
    var  result="";  //declare a variable for result

    //read the marks
    var Grade1 = document.getElementById('Grade11').value;
        if(Grade1 == 'A')
            Grade1 = 90;
        else if(Grade1 =='B')
            Grade1 = 80;
        else if(Grade1 == 'C')
        Grade1 = 70;
        else if(Grade1 == 'D')
        Grade1 = 60;
        else
            Grade1 = 50
    var Grade2 = document.getElementById('Grade22').value;
        if(Grade2 == 'A')
            Grade2 = 90;
        else if(Grade2 =='B')
            Grade2 = 80;
        else if(Grade2 == 'C')
        Grade2 = 70;
        else if(Grade2 == 'D')
        Grade2 = 60;
        else
            Grade2 = 50
    var Grade3 = document.getElementById('Grade33').value;

        if(Grade3 == 'A')
            Grade3 = 90;
        else if(Grade3 =='B')
            Grade3 = 80;
        else if(Grade3 == 'C')
            Grade3 = 70;
        else if(Grade3 == 'D')
            Grade3 = 60;
        else
            Grade3 = 50
   
    
    //calculate the total marks (using double notation technique)
     var totalMarks = Grade1 - (- Grade2) - (- Grade3);
    
    //get the average marks
    var averageMarks = totalMarks / 3;                  
    
    //find the grade and result using the ternary operator inside the switch statement                  
    switch(
    
        
            //usage of ternary operator inside switch

            (averageMarks >= 80 && averageMarks <= 100) ? 1 : 
            (averageMarks >= 60 && averageMarks <= 80) ? 2 : 0
            // (averageMarks >= 70 && averageMarks <= 80) ? 3 :
        //     (averageMarks <= 60 ) ? 3 : 0 
           )
            
            {
                case 1 :grade = "A";result="Congratulations, Eligible";break;
                case 2 :grade = "B"; result="Try next semester";break;
                // case 3 :grade = "C"; result="Third Class";break;
                // case 4 :grade = "D"; result="You are not qualified to apply";break;
                case 0 :grade = "F"; result="Not Eligible";break;
            }
            
        
    //display the results   
    document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtAvgMarks').value = averageMarks;
    document.getElementById('txtGrade').value = grade;
    document.getElementById('txtResult').value = result;

}

function getReport2(){

    var grade = "";  //declare a variable for grade
    var  result="";  //declare a variable for result

    //read the marks
    var Grade1 = document.getElementById('Grade12').value;
        if(Grade1 == 'A')
            Grade1 = 90;
        else if(Grade1 =='B')
            Grade1 = 80;
        else if(Grade1 == 'C')
        Grade1 = 70;
        else if(Grade1 == 'D')
        Grade1 = 60;
        else
            Grade1 = 50
    var Grade2 = document.getElementById('Grade22').value;
        if(Grade2 == 'A')
            Grade2 = 90;
        else if(Grade2 =='B')
            Grade2 = 80;
        else if(Grade2 == 'C')
        Grade2 = 70;
        else if(Grade2 == 'D')
        Grade2 = 60;
        else
            Grade2 = 50
    var Grade3 = document.getElementById('Grade32').value;

        if(Grade3 == 'A')
            Grade3 = 90;
        else if(Grade3 =='B')
            Grade3 = 80;
        else if(Grade3 == 'C')
            Grade3 = 70;
        else if(Grade3 == 'D')
            Grade3 = 60;
        else
            Grade3 = 50
   
    
    //calculate the total marks (using double notation technique)
     var totalMarks = Grade1 - (- Grade2) - (- Grade3);
    
    //get the average marks
    var averageMarks = totalMarks / 3;                  
    
    //find the grade and result using the ternary operator inside the switch statement                  
    switch(
    
        
            //usage of ternary operator inside switch

            (averageMarks >= 80 && averageMarks <= 100) ? 1 : 
            (averageMarks >= 60 && averageMarks <= 80) ? 2 : 0
            // (averageMarks >= 70 && averageMarks <= 80) ? 3 :
        //     (averageMarks <= 60 ) ? 3 : 0 
           )
            
            {
                case 1 :grade = "A";result="cCongratulations, Eligible";break;
                case 2 :grade = "B"; result="Try next semester";break;
                // case 3 :grade = "C"; result="Third Class";break;
                // case 4 :grade = "D"; result="You are not qualified to apply";break;
                case 0 :grade = "F"; result="Not Eligible";break;
            }
            
        
    //display the results   
    // document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    // document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtAvgMarks').value = averageMarks;
    document.getElementById('txtGrade').value = grade;
    document.getElementById('txtResult').value = result;

}

function getReport3(){

    var grade = "";  //declare a variable for grade
    var  result="";  //declare a variable for result

    //read the marks
    var Grade1 = document.getElementById('Grade13').value;
        if(Grade1 == 'A')
            Grade1 = 90;
        else if(Grade1 =='B')
            Grade1 = 80;
        else if(Grade1 == 'C')
        Grade1 = 70;
        else if(Grade1 == 'D')
        Grade1 = 60;
        else
            Grade1 = 50
    var Grade2 = document.getElementById('Grade23').value;
        if(Grade2 == 'A')
            Grade2 = 90;
        else if(Grade2 =='B')
            Grade2 = 80;
        else if(Grade2 == 'C')
        Grade2 = 70;
        else if(Grade2 == 'D')
        Grade2 = 60;
        else
            Grade2 = 50
    var Grade3 = document.getElementById('Grade33').value;

        if(Grade3 == 'A')
            Grade3 = 90;
        else if(Grade3 =='B')
            Grade3 = 80;
        else if(Grade3 == 'C')
            Grade3 = 70;
        else if(Grade3 == 'D')
            Grade3 = 60;
        else
            Grade3 = 50
   
    
    //calculate the total marks (using double notation technique)
     var totalMarks = Grade1 - (- Grade2) - (- Grade3);
    
    //get the average marks
    var averageMarks = totalMarks / 3;                  
    
    //find the grade and result using the ternary operator inside the switch statement                  
    switch(
    
        
            //usage of ternary operator inside switch

            (averageMarks >= 80 && averageMarks <= 100) ? 1 : 
            (averageMarks >= 60 && averageMarks <= 80) ? 2 : 0
            // (averageMarks >= 70 && averageMarks <= 80) ? 3 :
        //     (averageMarks <= 60 ) ? 3 : 0 
           )
            
            {
                case 1 :grade = "A";result="Congratulations, Eligible";break;
                case 2 :grade = "B"; result="Try next semester";break;
                // case 3 :grade = "C"; result="Third Class";break;
                // case 4 :grade = "D"; result="You are not qualified to apply";break;
                case 0 :grade = "F"; result="Not Eligible to apply";break;
            }
            
        
    //display the results   
    // document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    // document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtAvgMarks').value = averageMarks;
    document.getElementById('txtGrade').value = grade;
    document.getElementById('txtResult').value = result;

}