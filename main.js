
var buttonLetsCook = document.querySelector('#letsCook');

//var buttonMealChoice = document.querySelector('#letsCook');
var mealChoiceForm = document.querySelector('form[name="mealRadio"]');
// var mealChoiceSelection = document.forms.elements.mealRadio.querySelector('input[name=mealChoice]:checked');
var mealChoiceSelection = mealChoiceForm.elements['mealChoice']
//alert(mealChoiceForm.value);
var sides = [];
var mainDish = [];
var dessert = [];

buttonLetsCook.addEventListener('click', makeSuggestion);
//get value of radio button input.value;

function makeSuggestion() {
//based on value of radio button make a meal choice from the arrays
// alert(mealChoiceSelection)
  alert(mealChoiceSelection.value);
  // alert(mealChoice.value)
  toggleCookPot();
}

function toggleCookPot() {
// make image of cookpot hide
}

function generateRandomItem(){

}
