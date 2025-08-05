let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 22;
let extraFromEnglish = 2;
/**
 * Make a BacII Calculator
 * 
 * Tips :
 * Use +, -, = operators
 * Use >= with if-else statement
 * 
 * Expected Output:
 * Final Score: 390
 * Grade: B
 */

let totalscore= 0;
totalscore = math + khmer + chemistry + biology + english + extraFromEnglish;
if (totalscore > 237 && totalscore < 286){
    console.log("Final Score:"[totalscore]);
    console.log("Grade : E");
}else{
    if(totalscore >286 && totalscore < 331 ){
        console.log("Final Score:"[totalscore]);
        console.log("Grade : D ");
    }
}else{
     if(totalscore > 331 && totalscore < 380 ){
        console.log("Final Score:"[totalscore]);
        console.log("Grade : C ");
    }
}else {
    if(totalscore > 380 && totalscore < 427 ){
        console.log("Final Score:"[totalscore]);
        console.log("Grade : B ");
    }
}else {
     if(totalscore > 427 ){
        console.log("Final Score:"[totalscore]);
        console.log("Grade : A ");
    }

}

