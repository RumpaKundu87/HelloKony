function validateLoginDetails() {
    var userName = loginScreen.idUserName.text;
    var password = loginScreen.idPassword.text;
    if (userName != null && password != null && userName != "" && password != "") {
        //loginScreen.destroy();
        homeScreen.show();
    } else {
        alert("Please enter valid credentials");
    }
}