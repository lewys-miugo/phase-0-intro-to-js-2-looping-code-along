// Code your solutions in this file
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  // console.log(messages);
  return messages;
}

// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number){
  let i =0;
  while(i<=number){
    console.log(number - i);
    i++;
  }
}

