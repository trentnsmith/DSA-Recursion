function reverseString (str) {
    if (str === "") {
        return ";"
    } else {
        console.log(str.substr(1), str[0]);
        return reverseString(str.substr(1)) + str[0];
    }
}

reverseString("Hello");