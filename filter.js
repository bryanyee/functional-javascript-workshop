    function getShortMessages(messages) {
      return messages
      	.filter(function(arrayObject){return arrayObject.message.length < 50})
      	.map(function(arrayObject){return arrayObject.message});
    }
    
    module.exports = getShortMessages

