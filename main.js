//Assigns HTML elements to variables
var radioButtons = document.querySelectorAll('.radio-buttons');
var recieveButton = document.querySelector('#recieve-message-button');
var image = document.querySelector('.meditate-icon');
var outputMessage = document.querySelector('p');

//Adds a listener event which setListMode when 'recieve message' button is clicked
recieveButton.addEventListener('click', setListMode);

//Global variables to access later from our Data Model
var messageType;
var randomNumber;
var currentMessage;
var currentList;

//Data of affirmation sayings
var affirmationList =
["I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."];

//Data of mantra sayings
var mantraList =
["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];

//Function checks which radio button user selected
function checkMessageType(){
  for(var i = 0;i<radioButtons.length;i++){
    if(radioButtons[i].checked===true){
      messageType = radioButtons[i].value;
      break;
    }
  }
}

//Function sets current list according to radio button result
function setListMode(){
  checkMessageType();
    if(messageType === "affirmation"){
      currentList = affirmationList;
      if(currentList.length > 0){
        render();
        removeElement();
      }
      else {
        resetList();
      }
    }
    else if(messageType === "mantra"){
      currentList = mantraList;
      if(currentList.length > 0){
        render();
        removeElement();
      }
      else {
        resetList();
      }
    }
}

//Function renders bottom message box by removing meditation image and
//displaying current message of chosen list
function render(){
  image.className = "meditate-icon hidden";
  randomNumber = getRandomInt(currentList.length);
  currentMessage = currentList[randomNumber];
  outputMessage.innerText = currentMessage;
  outputMessage.style.color = '#000000';
  outputMessage.style.fontWeight = "normal";
}

//Function removes element in current list based on the randomized number that was chosen
function removeElement(){
  currentList.splice(randomNumber,1);
}

//Function generates message to user that they have seen all the quotes from chosen
//list and resets all elements of that array.
function resetList(){
  currentMessage = `Great job! You meditated through all the ${messageType}s. \n ${capFirstLetter(messageType)}s will reset now.`
  outputMessage.innerText = currentMessage;
  outputMessage.style.color = '#3580cb';
  outputMessage.style.fontWeight = "bold";
  if(messageType === "affirmation"){
    affirmationList =
    ["I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices."];
  }
  else if(messageType === "mantra"){
    mantraList =
    ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don’t let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather."];
  }
}

//Function capitalizes first letter in string
function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Function generates a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
