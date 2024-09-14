// Make a varibale to prompt a number as number using passeint
let age = parseInt(prompt("Enter Your Age:"));

// special case && means in if else statement you have call second time same variables and enter a second value
if(age >= 0 && age <= 12){
    alert("You are classified as an Child.");
}
else if(age >= 13 && age <= 19){
    alert("You are classified as an Teenager.");
}
else if(age >= 20 && age <= 64){
    alert("You are classified as an Adult.");
}
else if(age >= 65 ){
    alert("You are classified as an Senior.");
}else(
    alert("invalid Age Entered." )
)


