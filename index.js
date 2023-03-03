var userInfo = [];

class User {
    constructor(name, role, message) {
      this.name = name;
      this.role = role;
      this.message = message;
    }
}
  

function saveInfo(){
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let message = document.getElementById("message").value;

    const newUser = new User(name, role, message);

    userInfo.push(newUser);
}