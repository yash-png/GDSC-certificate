function saveUserdata(e) {
    e.preventDefault();

    const firstname = document.forms["registerationForm"]["firstName"].value;
    console.log(firstname);
    const useremail = document.forms["registerationForm"]["email"].value;
    console.log(useremail);
    const userroll = document.forms["registerationForm"]["roll"].value;
    // constsole.log(userroll);  
    const userdivision = document.forms["registerationForm"]["division"].value;
    console.log(userdivision);
    const userName = document.forms["registerationForm"]["username"].value;
    console.log(userName);

    if (firstname == "") {
        alert("Username cannot be Empty");
        return;
    } else if (useremail == "") {
        alert("User email cannot be Empty");
        return;
    } else if (userroll == "") {
        alert("roll no cannot be Empty");
        return;
    } else if (userName == "") {
        alert("username cannot be Empty");
        return;

    }
}

function getCertificate() {
    // const userName = document.forms["registerationForm"]["username"].value;
    const firstname = document.forms["registerationForm"]["firstName"].value;

    const useremail = document.forms["registerationForm"]["email"].value;

    const userroll = document.forms["registerationForm"]["roll"].value;

    const userdivision = document.forms["registerationForm"]["division"].value;

    const userName = document.forms["registerationForm"]["username"].value;

    const form = document.querySelector(".form");
    form.setAttribute("style", "display:none");
    if (userName === firstName + userdivision + userroll) {

        const ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "lorem-ipsum.pdf");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    } else {

        const div = document.createElement("div");
        div.setAttribute("h1", "Sorry your ID is not matching");
        document.body.appendChild(div)

    }

}