function startGame(yourChoice) {
     var humanChoice, botChoice;
     humanChoice = yourChoice.id;
     botChoice = choiceGenerator()

     // Bot choice generator
     function choiceGenerator() {
          let number = Math.floor(Math.random()*3)
          if (number == 0) 
          return "rock"
          else if (number == 1) 
          return "paper"
          else (number == 2) 
          return "scissors"
     }
     
     // Object of result
     const obj = {
     'rock' : {'paper' : 0, 'scissors' : 1},
     'paper' : {'rock' : 1, 'scissors' : 0},
     'scissors' : {'rock' : 0, 'paper' : 1}
     }
     
     // Getting the result
     function getResult() {
          if (humanChoice === botChoice)
               return 0.5 ;
          else
               return obj[humanChoice][botChoice] ;
     }
     
     // Message off the result
     function finalMessage (value) {
          if (value === 0.5)
               return {'message' : 'It\'s a Tie', 'color' : '#02ccff'};
          else if (value === 1)
               return {'message' : 'You Won', 'color' : '#02ff17'};
          else if (value === 0)
               return {'message' : 'You lose', 'color' : 'red'};
     }
     
     // Saving the message off the result
     var message = finalMessage(getResult());

     // Calling the next function
     afterChoice(humanChoice, botChoice, message)
}

function afterChoice(humanChoice, botChoice, message) {

     // Storing the images src
     var imageData = {
          'rock' : document.getElementById('rock').src ,
          'paper' : document.getElementById('paper').src ,
          'scissors' : document.getElementById('scissors').src
     }

     // Removing all images
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();
     
     // Showing the result
     var flexBox = document.getElementById('flex-box-div');
     flexBox.innerHTML = '<img src="' + imageData[humanChoice] + '" style=" box-shadow: 0px 10px 70px rgb(2, 255, 255);"><div id="div"><h1 id="result" style="color: '+ message['color'] +'" >'+ message['message']+'</h1><div><button id="button" onclick="playAgain()">Play Again</button></div></div><img src="' + imageData[botChoice] + '" style="box-shadow: 0px 10px 70px rgb(255, 0, 0);">';
}

function playAgain() {

     // Resetting view
     var flexBox = document.getElementById('flex-box-div');
     flexBox.innerHTML = '<img src="assets/r.png" alt="rock" id="rock" onclick="startGame(this)"><img src="assets/p.png" alt="paper" id="paper" onclick="startGame(this)"><img src="assets/s.png" alt="scissors" id="scissors" onclick="startGame(this)">'
}


