const accountId = "12233"
let accountEmail = "Paru.google.com"
var accountPassword = "123"
accountCity = "jaipur"
let accountState;

//accountId = 2
accountEmail = "hh@com"
accountPassword = "445"
accountCity = "bengalore"

/*
  prefer not to use var
  because of issue in block scope and functional scope
*/

//console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
