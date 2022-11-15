function CrackUsername() {
    var users = []

    var password = document.getElementById("last_name1");

    var hashed_password = generateHash(password);

    dict.forEach(element => {
        if (element.password = hashed_password) {
            users.push(element.username)
        }
    })

    document.getElementById("passwordToUsername").innerHTML =
        "The corresponding Username for the password " + users;
}