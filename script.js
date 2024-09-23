function checkVowels(){

 let text = document.getElementById("inputText").value;
 let vowelCount = 0;

  text = text.toLowerCase();

  for(let i = 0; i < text.length; i++){

   let char = text.charAt(i);
   if (isVowel(char)){
        vowelCount++;
   }
  }


  const result = document.getElementById('result');
  result.textContent = "Total Vowels: " + vowelCount;

}
//function will check if the vowel is existing or not
function isVowel(char){
   const vowels = ["a","e","i","o","u"];
   return vowels.includes(char);
}


// javascrip first task

// defining the prices
let applePrice = 3;
let oragePrice = 4;

// defining the quantity
let appleQuantity = 5;
let orangaQuantity = 8;

// individual total cost
let appleCost = applePrice * appleQuantity
console.log(appleCost);

let orangeCost = oragePrice * orangaQuantity
console.log(orangeCost);

//total price on the cart

let TotalPrice = appleCost + orangeCost
console.log(TotalPrice);

// checking for conditions
if(TotalPrice > 50){
   console.log("you qualify for free shipping");
}
else  {
   console.log("total cost is $ " + TotalPrice + " which is lesser than $50 so you are to pay a shipping fee of $5")
};

// using ternary operators
TotalPrice = TotalPrice > 50 ? console.log("you qualify for free shipping") : console.log("total cost is $ " + TotalPrice + " which is lesser than $50 so you are to pay a shipping fee of $5")