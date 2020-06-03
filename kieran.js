var thoughts = ["I love you very very much little potato","You are extremely special human being and there is nobody like you","QTBB MWAH MWAH MWAH", "You have the most beautiful eyes", "Im proud of you!!!!", "You a bad bitch", "You are funny (like for real)", "You have a beautiful smile ;)", "stoopid lady i luv u :P", "Have a great day I'm always here for you sweetie"]



function genStuff(){
  console.log("yay")
  num = thoughts.length
  index = Math.floor(Math.random() * thoughts.length);
  document.getElementById('t').innerHTML = thoughts[index];
}
