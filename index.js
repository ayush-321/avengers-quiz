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

    answer: 'no'
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










namespace Ford.CommissionT
{
     public  struct FordMotors  //structure created with three member variables
    {
        public double month1;
        public double month2;
        public double month3;
    }

    public class Program1
    {
        //Method to Calculate the quarterly sales with double return type
        public double Quarterly_sales(double sum)
        {
            double commission;

            //condition to check the commission rate
            if(sum>=50000)
            {
                commission = 5.0;
            }
            else if (sum>=30000 && sum<=50000)
            {
                commission = 4.5;
            }
            else if (sum >= 20000 && sum <= 30000)
            {
                commission = 3.75;
            }
            else if (sum >= 15000 && sum <= 20000)
            {
                commission = 2.5;
            }
            else if (sum >= 10000 && sum <= 15000)
            {
                commission = 1.75;
            }
            else
            {
                commission = 0.0;
            }

            return sum*(commission/100);
        }

        //Method to Calculate the Monthly sales with double return type
        public double Monthly_sales(double M1, double M2, double M3,double sum)
        {
            double commission;

            //condition to check commission rate for monthly sales
            if(M1 >= 7500 && M2 >= 7500 && M3 >= 7500)
            {
                commission = 1.25;
            }
            else if(M1 >= 12000 && M2 >= 12000 && M3 >= 12000)
            {
                commission = 2.45;
            }
            else
            {
                commission = 0.0;
            }
            return sum * (commission / 100);

        }
    }

    public class Program   
    {
        
        public static void Main(string[] args)
        {
            //creating an instance of structure class
            FordMotors fm = new FordMotors();  

            //Take input from user for month1,month 2,month3
            Console.WriteLine("Month-1 Sales in USD:");
            fm.month1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Month-2 Sales in USD:");
            fm.month2 = double.Parse(Console.ReadLine());
            Console.WriteLine("Month-3 Sales in USD:");
            fm.month3 = double.Parse(Console.ReadLine());

            //Total of three months
            double total = fm.month1 + fm.month2 + fm.month3;

            //instance of Program1 class
            Program1 pg1 = new Program1();

            //calculate total commission from monthly and quaterly sales
            double Total_commission = pg1.Quarterly_sales(total) + pg1.Monthly_sales(fm.month1, fm.month2, fm.month3, total);

            //print total sales,monthly sales,quaterly sales and total commission
            Console.WriteLine("Total Sale for the Quarter: "+total+" USD");
            Console.WriteLine("Quarterly overall Sales Commission: "+ pg1.Quarterly_sales(total)+" USD");
            Console.WriteLine("Monthly Minimum Commission: "+pg1.Monthly_sales(fm.month1, fm.month2, fm.month3,total)+ " USD");
            Console.WriteLine("Total Commission for the Quarter: " + Total_commission + " USD");

            Console.ReadLine();
        }
    }
}

