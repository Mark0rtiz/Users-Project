// create the user constructor
class User {
    constructor(fname, lname, email, password) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
    }
}

//create the register function
function register(){
    let userName=$("#txtFirstName").val();
    let userLName=$("#txtLastName").val();
    let userEmail=$("#txtEmail").val();
    let userPassword=$("#txtPassword").val();
    //create the object
    letnewUser = new User(userName, userLName, userEmail, userPassword)

    console.log(userName, userLName, userEmail, userPassword);
}
    //get values from the inputs

    //display the user on the console

    function init(){
        //hook events
    }
    window.onload = init;