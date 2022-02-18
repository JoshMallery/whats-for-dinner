
var buttonLetsCook = document.querySelector('#letsCook');
var mealChoiceForm = document.querySelector('form[name="mealRadio"]');
var mealChoiceSelection = mealChoiceForm.elements['mealChoice'];
var mealBox = document.querySelector('box:nth-child(2)');
var cookPot = document.querySelector('img');

buttonLetsCook.addEventListener('click', makeSuggestion);

function makeSuggestion() {
// event.preventDefault()

if(mealChoiceSelection.value === ''){
  alert('Please Decide on what you are looking then click Let\'s Cook');
  return
}

  if(mealChoiceSelection.value === 'side') {
    var mealToShow = randomSide();
    } else if (mealChoiceSelection.value === 'mainDish'){
      var mealToShow = randomMainDish();
    } else if (mealChoiceSelection.value === 'dessert'){
      var mealToShow = randomDessert();
    } else {
      var mealToShow = randomEntireMeal();
    }

    mealBox.innerHTML =`
    <p2>You Should Make:</p2>
    <p3>${mealToShow}!</p3>
    <box>
      <buttonSection>
        <button class ="clear" id="clearSelect">Clear</button>
      </buttonSection>
    </box>
    `
    var clearButton = document.querySelector('#clearSelect');
    clearButton.addEventListener('click', clear);

    toggleCookPot();
}

function toggleCookPot() {
// make image of cookpot hide
cookPot.classList.add('view');
cookPot.classList.add('hidden');
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
  //event listener for button click - look at todays lesson for this

//function clear

// var clearButton = document.querySelector('#clearSelect');
// clearButton.addEventListener('click', clear());

function clear() {
  // var clearButton = document.querySelector('#clearSelect');
  // clearButton.addEventListener('click', clear());
  cookPot.classList.remove('hidden');
  mealBox.innerHTML = '<img src="./assets/cookpot.svg" alt="pot for cooking food">';
}
// toggle cookpot - cookpot.innerHTML = ""
//box.innerHTML = ""
//  this might make button dissapear as well button dissapear
