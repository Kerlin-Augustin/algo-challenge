/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   // Code goes here
   let newText = text.toLowerCase().split(' ')
  console.log(newText)
  let newString = newText.map(x => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase())
  return newString.join(' ')
}



module.exports = capSentence