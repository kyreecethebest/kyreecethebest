var jokes = ["What do a tall wizard and a tall elf have in common? ", "Have you ever noticed that there is a garment called shorts?", "Why were shorts invented?","What do you call a big and tall store?",];

var answers = ["They both needed a short hobbit to save their butts.", "Because I can’t recall ever seeing a piece of clothing called talls.", "So tall people wouldn’t look like they’re always wearing capris.", "Unfortunate."];


var guess;



function test() {
  // alert("whatever")
  var random = (Math.round(Math.random()*3));
 guess = prompt(jokes[random]);
 var answer = (answers[random]);
  if(guess === answer){
    alert('Thats Right! BUT STOP HACKING!!!!!!!!!!!!!!!')
  } else {
    alert("Your a dissappointment.get out or i eat ur dino nuggies.")
prompt = ("wanna try again tho?")
  };
};



 

  // prompt(jokes[0]);

var randomnumber;


function randomize() {
  randomnumber =
    Math.round(Math.random() *3);
}

randomize();

 alert(randomnumber);






test()
