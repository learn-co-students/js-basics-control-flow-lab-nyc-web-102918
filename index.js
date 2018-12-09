// Write your code in this file!
function scuberGreetingForFeet(number) {
  let message;

  if (number <= 400) {
    message = "This one is on me!";
  } else if (number >= 2000) {
    if (number >= 2500) {
      message = "No can do.";
    } else {
      message = "I will gladly take your thirty bucks."
    }
  }
  return message;
}

function ternaryCheckCity(location) {
  let city

  city = location === 'NYC' ? 'Ok, sounds good.' : 'No go.'

  return city;
}

function switchOnCharmFromTip(tip) {
  let charm;

  switch (tip) {
    case 'generous':
    charm = 'Thank you so much.';
    break;
    case 'not as generous':
    charm = 'Thank you.';
    break;
    default:
    charm = 'Bye.';
    break;
  }
  return charm;
}
