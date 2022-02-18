
var buttonLetsCook = document.querySelector('#letsCook');
var mealChoiceForm = document.querySelector('form[name="mealRadio"]');
var mealChoiceSelection = mealChoiceForm.elements['mealChoice'];
var mealBox = document.querySelector('box:nth-child(2)');

buttonLetsCook.addEventListener('click', makeSuggestion);

function makeSuggestion() {

  if(mealChoiceSelection.value === ''){
    alert('Please decide on a meal choice then click Let\'s Cook!');
    return
    }

  var mealToShow
  if(mealChoiceSelection.value === 'sides') {
    mealToShow = randomMeal(sides);
    } else if (mealChoiceSelection.value === 'mainDishes'){
    mealToShow = randomMeal(mainDishes);
    } else if (mealChoiceSelection.value === 'desserts'){
    mealToShow = randomMeal(desserts);
    } else {
    mealToShow = randomEntireMeal();
    }

    mealBox.innerHTML = mealLanguage(mealToShow)

    var clearButton = document.querySelector('#clearSelect');
    clearButton.addEventListener('click', clearBox);
  }

function randomMeal(meal) {
  var mealToDisplay = meal[Math.floor(Math.random() * meal.length)];
  return mealToDisplay
  }

function randomEntireMeal() {
  return `${randomMeal(mainDishes)} with a side of ${randomMeal(sides)} and a dessert of ${randomMeal(desserts)}`
  }

function clearBox() {
  mealBox.innerHTML = '<img src="./assets/cookpot.svg" alt="pot for cooking food">';
  }

function mealLanguage(fullMeal) {
  var mealToEat = `
  <p2>You Should Make:</p2>
  <p3>${fullMeal}!</p3>
  <box>
    <buttonSection>
      <button class ="clear" id="clearSelect">Clear</button>
    </buttonSection>
  </box>`
  return mealToEat
}
