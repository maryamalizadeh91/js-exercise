var i = 0;
function sendInfo() {
    
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let job = document.getElementById("job").value;
    let bio = document.getElementById("bio").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;

    if (i == 0) {
        var h2 = document.getElementById("pInfo");
        var h2Text = document.createTextNode("Personal Info");
        h2.appendChild(h2Text);
        var hFirstName = document.getElementById("hFirstName");
        var hFirstNameText = document.createTextNode("First Name");
        hFirstName.appendChild(hFirstNameText);
        var hLastName = document.getElementById("hLastName");
        var hLastNameText = document.createTextNode("Last Name");
        hLastName.appendChild(hLastNameText);
        var hJob = document.getElementById("hJob");
        var hJobText = document.createTextNode("Job");
        hJob.appendChild(hJobText);
        var hBio = document.getElementById("hBio");
        var hBioText = document.createTextNode("Bio");
        hBio.appendChild(hBioText);
        var hEmail = document.getElementById("hEmail"); 
        var hEmailText = document.createTextNode("Email");
        hEmail.appendChild(hEmailText);
        var hPhone = document.getElementById("hPhone");
        var hPhoneText = document.createTextNode("Phone");
        hPhone.appendChild(hPhoneText);
        var hSkills = document.getElementById("hSkills");
        var hSkillsText = document.createTextNode("Skills");
        hSkills.appendChild(hSkillsText);

        var pTag1 = document.createElement("p");
        pTag1.setAttribute("class" , "border");
        pTag1.setAttribute("id" , "pTag1");
        var divFirstName = document.getElementById("divFirstName");
        var divFirstNameText = document.createTextNode(firstname);
        pTag1.appendChild(divFirstNameText);
        divFirstName.appendChild(pTag1);

        var pTag2 = document.createElement("p");
        pTag2.setAttribute("class" , "border");
        pTag2.setAttribute("id" , "pTag2");
        var divLastName = document.getElementById("divLastName");
        var divLastNameText = document.createTextNode(lastname);
        pTag2.appendChild(divLastNameText);
        divLastName.appendChild(pTag2);

        var pTag3 = document.createElement("p");
        pTag3.setAttribute("class" , "border");
        pTag3.setAttribute("id" , "pTag3");
        var divJob = document.getElementById("divJob");
        var divJobText = document.createTextNode(job);
        pTag3.appendChild(divJobText);
        divJob.appendChild(pTag3);

        var pTag4 = document.createElement("p");
        pTag4.setAttribute("class" , "border");
        pTag4.setAttribute("id" , "pTag4");
        var divBio = document.getElementById("divBio");
        var divBioText = document.createTextNode(bio);
        pTag4.appendChild(divBioText);
        divBio.appendChild(pTag4);

        var pTag5 = document.createElement("p");
        pTag5.setAttribute("class" , "border");
        pTag5.setAttribute("id" , "pTag5");
        var divEmail = document.getElementById("divEmail");
        var divEmailText = document.createTextNode(email);
        pTag5.appendChild(divEmailText);
        divEmail.appendChild(pTag5);

        var pTag6 = document.createElement("p");
        pTag6.setAttribute("class" , "border");
        pTag6.setAttribute("id" , "pTag6");
        var divPhone = document.getElementById("divPhone");
        var divPhoneText = document.createTextNode(phone);
        pTag6.appendChild(divPhoneText);
        divPhone.appendChild(pTag6);

        var pTag7 = document.createElement("p");
        pTag7.setAttribute("class" , "border");
        pTag7.setAttribute("id" , "pTag7");
        var divSkills = document.getElementById("divSkills");
        var divSkillsText = document.createTextNode(skills);
        pTag7.appendChild(divSkillsText);
        divSkills.appendChild(pTag7);

    }
    else {
        
        pTag1 = document.getElementById("pTag1");
        pTag1.innerText = firstname;
        pTag2 = document.getElementById("pTag2");
        pTag2.innerText = lastname;
        pTag3 = document.getElementById("pTag3");
        pTag3.innerText = job;
        pTag4 = document.getElementById("pTag4");
        pTag4.innerText = bio;
        pTag5 = document.getElementById("pTag5");
        pTag5.innerText = email;
        pTag6 = document.getElementById("pTag6");
        pTag6.innerText = phone;
        pTag7 = document.getElementById("pTag7");
        pTag7.innerText = skills;
    }
    i++;
}