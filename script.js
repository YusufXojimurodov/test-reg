function tekshir() {
    var login = document.getElementById("login").value
    var parol = document.getElementById("parol").value

    if (login == "Abdurasul" && parol == "2009") {
        window.location.href = "home.html";
    } else {
        document.getElementById("xato").innerText = "Login yoki parol xato :("
    }
}


