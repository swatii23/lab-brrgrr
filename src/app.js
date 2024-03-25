// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

window.onload = () => {
  renderAll()
}

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
const cheeseBtn = document.querySelector(".btn-cheese")
cheeseBtn.addEventListener("click", () => {
  state.Cheese = !state.Cheese;
  renderAll();
})


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").addEventListener("click", () => {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
})


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").addEventListener("click", () => {
  state.Onions = !state.Onions;
  renderAll();
})


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").addEventListener("click", () => {
  state.Lettuce = !state.Lettuce;
  renderAll();
})


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  const active =  document.getElementsByClassName("button");
  for(let i=0; i<active.length; i++) {
    if(state[active[i].textContent] != true){
      active[i].classList.remove("active");
    }
    else{
      active[i].classList.add("active");
    }
  }
}
console.log(state)
console.log(document.getElementsByClassName("active"));


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  let ingredients = document.getElementsByClassName("items");
  console.log(ingredients[0].textContent)
  for(let i=0; i<ingredients.length; i++) {
    const item = ingredients[i].textContent;
    if(state[item])
    ingredients[i].style.display = "inherit";
    else
    ingredients[i].style.display = "none";
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  const priceDisplay = document.querySelector(".price-details");
  var price = wholeWheatBun;

  for (const item in state) {
    if (state[item]) {
      price += ingredients[item];      
    }
  }

  priceDisplay.textContent = `INR ${price}`
}
