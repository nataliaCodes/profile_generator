const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question("What's your name? Nicknames are also acceptable :)  ", (answer0) => {
  answers.push(answer0);

  rl.question("What's an activity you like doing?  ", (answer1) => {
    answers.push(answer1);

    rl.question("What do you listen to while doing that?  ", (answer2) => {
      answers.push(answer2);
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)  ", (answer3) => {
        answers.push(answer3);
        
        rl.question("What's your favourite thing to eat for that meal?  ", (answer4) => {
          answers.push(answer4);
          
          rl.question("Which sport is your absolute favourite?  ", (answer5) => {
            answers.push(answer5);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!  ", (answer6) => {
              answers.push(answer6);
              
              console.log(`Here is your online profile:\n\n${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
              rl.close();
        
            });
          });
        });
      });
    });
  });
});

