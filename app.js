var signInForm = document.getElementById('signIn');
var signUpForm = document.getElementById('signUp');
signUpForm.style.display = "none"
//tabs button
var signInTabs = document.getElementById('signInTab');
var signUpTabs = document.getElementById('signUpTab');

function signInTab() {
    if (signInForm.style.display === "none") {
        signInTabs.setAttribute("class", "col-md-6 btn btn-light avtive")
        signInForm.style.display = "block"
        signUpForm.style.display = "none"
        signUpTabs.setAttribute("class", "col-md-6 btn btn-light")
    }
}

function signUpTab() {
    if (signUpForm.style.display === "none") {
        signUpForm.style.display = "block"
        signUpTabs.setAttribute("class", "col-md-6 btn btn-light avtive")
        signInForm.style.display = "none"
        signInTabs.setAttribute("class", "col-md-6 btn btn-light")
    }
}

function signIn() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    var data = localStorage.getItem("testings")
    data = JSON.parse(data)
    if (!data) {
        modalControll("User Not exsist")
    } else {
        if (data && data.email === email && data.pwd === pwd) {
            console.log("data", data)
            return
        }
        if (data) {
            modalControll("Something went wrrong..!")
        }
    }
}

function signUp() {
    var fName = document.getElementById("fNames").value;
    var email = document.getElementById("emails").value;
    var pwd = document.getElementById("pwds").value;

    var obj = {
        fName,
        email,
        pwd
    }

    console.log(obj)
    localStorage.setItem("testings", JSON.stringify(obj))
    // signInTab()
}

function modalControll(message) {
    var errorModal = document.getElementById("myModal")
    if (errorModal.style.display === "block") {
        errorModal.style.display = "none"
    } else {
        var errorBody = document.getElementById("errorBody")
        errorBody.innerHTML = `<h4>${message}<h4>`
        errorBody.style.color = "red"
        errorModal.style.display = "block";
    }

}