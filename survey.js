const readline = require('readline');
let answers = {};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answers.q1 = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    answers.q2 = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      answers.q3 = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        answers.q4 = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          answers.q5 = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            answers.q6 = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              answers.q7 = answer;
              console.log(`${answers.q1} loves listening to ${answers.q3} while ${answers.q2}, devouring ${answers.q5} for ${answers.q4}, prefers ${answers.q6} over any other sport, and is amazing at ${answers.q7}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});