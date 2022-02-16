
var buttonLetsCook = document.querySelector('#letsCook');
var mealChoiceForm = document.querySelector('form[name="mealRadio"]');
var mealChoiceSelection = mealChoiceForm.elements['mealChoice'];

buttonLetsCook.addEventListener('click', makeSuggestion);

function makeSuggestion() {

  if(mealChoiceSelection.value === 'side') {
    var mealToShow = randomSide();
    } else if (mealChoiceSelection.value === 'mainDish'){
      var mealToShow = randomMainDish();
    } else if (mealChoiceSelection.value === 'dessert'){
      var mealToShow = randomDessert();
    } else {
      var mealToShow = randomEntireMeal();
    }

    return alert(`${mealToShow}!`)

    toggleCookPot();
}

function toggleCookPot() {
// make image of cookpot hide
}

function generateRandomIndex(array){
  return Math.floor(Math.random() * array.length);
  }

function randomSide() {
  var rSide = sides[generateRandomIndex(sides)];
  return rSide
  }

function randomMainDish() {
  var rMainDish = mainDishes[generateRandomIndex(mainDishes)];
  return rMainDish
  }

function randomDessert() {
  var rDesserts = desserts[generateRandomIndex(desserts)];
  return rDesserts
  }

function randomEntireMeal() {
  var rSide = randomSide();
  var rMainDish = randomMainDish();
  var rDesserts = randomDessert();
  return `${rMainDish} with a side of ${rSide} and a dessert of ${rDesserts}`

  }
