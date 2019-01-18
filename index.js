function shout(string){
return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

var uppercase = "HELLO!";
uppercase.toUpperCase() === uppercase; //true

var lowercase = 'hello!';
lowercase.toLowerCase() === lowercase; //true

var mixedCase = 'Hi there!';
mixedCase.toLowerCase() === mixedCase; //false

mixedCase.toUpperCase() === mixedCase; //false

function sayHiToGrandma(string){
  if(uppercase){
    return "YES INDEED!";
  }
  else{
    return "I can't hear you!";
  }
}