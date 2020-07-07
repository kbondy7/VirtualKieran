var thoughts = ["I love you very very much little potato","You are extremely special human being and there is nobody like you","QTBB MWAH MWAH MWAH", "You have the most beautiful eyes", "Im proud of you!!!!", "You a bad bitch", "You are funny (like for real)", "You have a beautiful smile ;)", "stoopid lady i luv u :P", "Have a great day I'm always here for you sweetie",
"hello princess have a great day!", "I love you bunches", "I miss u more than anything else", "You are so strong and cool I mean look at you", "Take a xan and gimme a hug","u cute as heck",
"I love your laugh it is so amazing", "<3", "we are yoga masters and our body is our temple", "toot toot", "call real kieran to go on a walk he will do whatever you say", "you are a goddess",
"I think you are simply wonderful", "i'm proud of you", "i appreciate you so much", "u cute as hell", "u mine mwah", "U gonna be my big lawyer", "I'm gonna hug you so hard ur gonna explode", "miss u bunches"]



function genStuff(){
  console.log("yay")
  num = thoughts.length
  index = Math.floor(Math.random() * thoughts.length);
  document.getElementById('t').innerHTML = thoughts[index];
}
