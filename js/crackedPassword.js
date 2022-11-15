function crackPasswordFunc() {
    generate();
    var username = document.getElementById("first_name1").value;
    var password;
    dict.forEach(element => {
        if (element.username == username) {
            password = element.password;
        }
    });
    var found_password = pwd_dict[password];
    console.log(found_password, password, );
    document.getElementById("usernameToPassword1").innerHTML =
        " The corresponding hash of password for the username " +
        username + " is " + found_password;
};