const RegisterUserBuilder = require("./PersonBuilder");

 const builder = new RegisterUserBuilder('george') 
 .setPhone(1399630)
 .setAge(17)
 .build()

 console.log(builder)