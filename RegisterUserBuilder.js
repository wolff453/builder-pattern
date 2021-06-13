const RegisterUser = require("./RegisterUser");

class RegisterUserBuilder {
  constructor(name){
    this.name = new RegisterUser(name)
  }

  setAge(age) {
    this.name.age = age
    return this
  }

  setPhone(phone) {
    this.name.phone = phone
    return this

  }

    build(){
      return this.name
    }

}


module.exports = RegisterUserBuilder