pwd_dict = {}
pwd_dict1 = {}

function generate() {
    var temp = "";
    for (i = 97; i < 123; i++) {
        for (j = 97; j < 123; j++) {
            for (k = 97; k < 123; k++) {
                temp = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
                var HashPwd = generateHash(temp);
                pwd_dict[HashPwd] = temp;

            }
        }
    }
}

function generatePSW() {
    var temp = "";
    for (i = 97; i < 123; i++) {
        for (j = 97; j < 123; j++) {
            for (k = 97; k < 123; k++) {
                temp = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
                var HashPwd = generateHash(temp);
                pwd_dict1[temp] = HashPwd;

            }
        }
    }
}