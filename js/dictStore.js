var dict = []

function dictStoreFunc() {
    generatePSW();
    generate();
    var username = document.getElementById("first_name2").value;
    var password = document.getElementById("last_name2").value;
    var hashedPass = generateHash(password);
    new_row = { 'username': username, 'password': hashedPass };
    dict.push(new_row);
    document.getElementById("insertCredentials").innerHTML =
        "The Username " + username + "<br>The corresponding Hashed password is " +
        hashedPass;
    console.log(dict);
};


function generateHash(plainText) {
    var md = forge.md.sha256.create();
    md.start();
    md.update(plainText, "utf8");
    var hashText = md.digest().toHex();
    return hashText;
};