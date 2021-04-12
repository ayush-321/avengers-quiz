var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.bgYellow.bold.underline('Play this game to know HOW BIG AVENGERS FAN YOU ARE!'));

var userName = readlineSync.question('Enter your name :');
console.log('Welcome ' + chalk.green(userName));

console.log(chalk.bgCyan.underline('Game Rules'));
console.log('Game will consist of total 10 Questions. You have to answer ' +(chalk.green('yes')) + ' or '+ (chalk.red('no')) + '. For every correct answer you will get 1 point.');

console.log(chalk.bgCyan.underline('Points Pool'));
console.log('<4 : You are a fake avenger fan');
console.log('>4 & < 7 : You are decent avenger fan but not true one');
console.log('>7 : You are a true avenger fan');

var points = 0;

function avengers(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    points++;
    console.log(chalk.green('Correct answer. You earned 1 point'));
  }else{
    console.log(chalk.red('Wrong answer. You earned 0 point'));
  }
}

var questions = [
  {
    question: "Is Wakanda name of Black Panther's kingdom?",

    answer: 'yes'
  },

  {
    question: "Did clint sacrificed on Vormir in Avengers: Endgame?",

    answer: 'no'
  },

  {
    question: "Is Thanos the son of A'lars?",

    answer: 'yes'
  },

  {
    question: "Frigga is the name of Thor's mother?",

    answer: 'yes'
  },

  {
    question: "Is Captain America the First Avenger?",

    answer: 'yes'
  },

  {
    question: "Is Thor's hammer known as odinsword?",

    answer: 'no'
  },

  {
    question: "Thor and Loki are related by blood",

    answer: 'no'
  },

  {
    question: "Was Captain America frozen for 66 years?",

    answer: 'yes'
  },

  {
    question: "Does Hulk go to sakaar after Ultron?",

    answer: 'yes'
  },

  {
    question: "Vision was created from Ultron's parts?",

    answer: 'no'
  }
  
];


for(var i = 0; i < questions.length; i++){
  var currQuestion = questions[i];
  avengers(currQuestion.question, currQuestion.answer);
}

console.log('-------------------------------');

if(points <= 4){
  console.log(chalk.blue.bold('You earned ' + points + ' points. You are a fake avenger fan!'));
}else if(points > 4 && points <= 7){
  console.log(chalk.blue.bold('You earned ' + points + ' points.You are decent avenger fan but not true one!'));
}else if(points > 7){
  console.log(chalk.blue.bold('You earned ' + points + ' points.Congratulations.You are a true avenger fan!'));
}

