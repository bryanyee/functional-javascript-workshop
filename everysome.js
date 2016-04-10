    function checkUsersValid(goodUsers) {
      var goodUsersArray = goodUsers.map(function(user){return user.id});

      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(user){
        	return goodUsersArray.indexOf(user.id) !== -1;
        })
      };
    }
    
    module.exports = checkUsersValid




    /* Official solution

    module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }

    */