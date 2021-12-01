const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = () => {
rl.question("What's a name or nickname that you like to be called?  ", (name) => {
  console.log(`You got it ${name}`);

rl.question('What is something that you like to do in your free time?  ', (activity) => {
  console.log(`Oh, ${activity}!!!, that's cool`);
  

rl.question(`What music do you listen to while you ${activity}?  `, (music) => {
  console.log(`Nice ${music} that sounds great`);
  
rl.question('Which is your favourite meal of the day? Brealfast? Dinner?  ', (meal) => {
  if (meal !== "Breakfast" || "Lunch" || "Dinner" || "Brunch") {
    console.log("Weird! never heard of that")
  } else{
  console.log(`${meal}? Good call, who doesn't love ${meal}`)};


rl.question(`What do you like to eat for ${meal}?  `, (food) => {
  console.log(`${food} sounds reeaaallly good, you gotta share yoour recipe`);


rl.question('Do you have a favourite sport? What is it?  ', (sport) => {
    console.log(`${sport} I bet you're really good`);  

rl.question('Do you have a superpower? Tell me about it  ', (superpower) => {
  console.log(`${superpower} I'd love to see that `);

  rl.close();
})
})
})
})
})
})
})
}

survey()