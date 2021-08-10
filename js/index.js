// Iteration 1: Names and Input
let hacker1 = "xxxx"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "YYYY"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals 

      if (hacker1.length >= hacker2.length) {  
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)  
        } else if (hacker2.length >= hacker1.length) {    
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
       } else (hacker1.length && hacker2.length) {
           console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
       }   
       
       /* SyntaxError: Unexpected token '{' */
    
// Iteration 3: Loops

for(let i = 0; i <= hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
  } 
  console.log(result); 
/* result is not defined */
