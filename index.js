function scuberGreetingForFeet(distance) {
  let cost
    if (distance <= 400) {
        cost = 'This one is on me!';
      } else if (distance > 2000 && distance < 2500){
          cost = 'I will gladly take your thirty bucks.';
      } else {
          cost = 'No can do.';
      } return cost;
}

function ternaryCheckCity(city) {
  return(city == 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip) {
  let response;

  switch(tip) {
    case 'generous' :
      response = 'Thank you so much.';
      break;
    case 'not as generous' :
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response
}
