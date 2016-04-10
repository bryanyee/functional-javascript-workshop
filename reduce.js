    function countWords(inputWords) {
      return inputWords.reduce(function(wordCount, currentWord){
      	wordCount[currentWord] = ( wordCount[currentWord] + 1 ) || 1;
      	return wordCount;
      }, {})     //begin with an initial empty object
    }
    
    module.exports = countWords

