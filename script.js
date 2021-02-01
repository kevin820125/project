const gameContainer = document.getElementById("game");
let flipcount = 0;
let card1 = null;
let card2 = null;

let count = document.querySelector('#number')
let reward = document.querySelector('#reward')
count.textContent += 7;
reward.textContent = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);



function createDivsForColors(colorArray) {
  for (let i of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(i);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!
function handleCardClick(event) {
  let card = event.target;

  console.log(card.classList);
  card.style.backgroundColor = card.classList[0]
  if(!card1){
    card.classList.add("flipped");
    card1 = card;
  }else if(!card2){
    card.classList.add("flipped");
    card2 = card;
  }
  if(card1 && card2){
    if(card1.className !== card2.className){
      setTimeout(function(){
        card1.style.backgroundColor = 'white'
        card2.style.backgroundColor = 'white'
        card1 = null;
        card2 = null;
        count.textContent = parseInt(count.textContent) - 1
        if(count.textContent == 0){
          var old_element = document.body;
          var new_element = old_element.cloneNode(true);
          old_element.parentNode.replaceChild(new_element, old_element);
          setTimeout(function(){
            alert("Good Try, but you lose")
          }, 500);
        }
      }, 1000)
    }
    if(card1.className === card2.className){
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      reward.textContent = parseInt(reward.textContent) + 1;
      if(count.textContent == 0){
        var old_element = document.body;
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        setTimeout(function(){
          alert("Good Try, but you lose")
        }, 500);
      }
      if(reward.textContent == 5){
        var old_element = document.body;
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        setTimeout(function(){
          alert("Good Job! Still carrys a young brain huh?")
        }, 500);
      }
    }
  }
}
// when the DOM loads
createDivsForColors(shuffledColors);
