let wordList = [
    "hi",
    "artichokes",
    "lumberjack",
    "coding",
    "world",
    "binoculars",
    "cornflakes",
    "education",
    "blacksmith"
  ]
  
  export default function randomWords(){
    return wordList[Math.floor(Math.random()*wordList.length)];
  }
