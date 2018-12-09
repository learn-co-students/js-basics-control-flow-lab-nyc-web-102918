// Write your code in this file!
function scuberGreetingForFeet(feet){
  switch(true){
    case feet <= 400:
      return 'This one is on me!'
    case feet > 2500:
      return 'No can do.'
    case feet > 2000:
      return 'I will gladly take your thirty bucks.'

  }
}
function ternaryCheckCity(city){
return (city==='NYC' ? "Ok, sounds good." :'No go.')
}
function switchOnCharmFromTip(tip){
  if (tip==='generous'){ return 'Thank you so much.'}
  else if (tip==='not as generous'){ return 'Thank you.'}
  else {return 'Bye.'}
  }
