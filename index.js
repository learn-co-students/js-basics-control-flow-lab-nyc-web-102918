// Write your code in this file!
function scuberGreetingForFeet(x) {
  if(x <= 400) {
    return "This one is on me!"
  }
  else if (x > 2000 && x <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}
function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go."
  // if(city === 'NYC') {
  //   return "Ok, sounds good."
  // }else {
  //   return "No go."
  // }
}
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
        return 'Thank you so much.';
        break;
    case 'not as generous':
        return 'Thank you.';
        break;
    case 'thanks for everything':
        return 'Bye.';
        break;
      }
}
