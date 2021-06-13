const RegisterUser = require("./RegisterUser");

class RegisterUserBuilder {
  constructor(user){
    this.user = new RegisterUser(user)
  }

  setAge(age) {
    this.user.age = age
    return this 
  }

  setPhone(phone) {
    this.user.phone = phone
    return this

  }   

    build(){
      return this.user
    }

}


module.exports = RegisterUserBuilder
