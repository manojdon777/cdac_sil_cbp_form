function toggleTextbox(){
    if (document.getElementById("community").value === "women"){
        document.getElementById("casteCertNum").disabled = true;
        document.getElementById("casteCertNum").placeholder = "Disabled";
        document.getElementById("issueDate").disabled = true;
        document.getElementById("issueDate").placeholder = "Disabled";
        document.getElementById("issueAuthority").disabled = true;
        document.getElementById("issueAuthority").placeholder = "Disabled";
    }
    else {
        document.getElementById("casteCertNum").disabled = false;
        document.getElementById("casteCertNum").placeholder = "Caste Certificate Number";
        document.getElementById("issueDate").disabled = false;
        document.getElementById("issueDate").placeholder = "Issue Date";
        document.getElementById("issueAuthority").disabled = false;
        document.getElementById("issueAuthority").placeholder = "Issuing Authority";
    }
}


// const form = document.querySelector("form"),
//       nextBtn = form.querySelector(".nextBtn"),
//       backBtn = form.querySelector(".backBtn"),
//       allInput = form.querySelector(".first input");

// nextBtn.addEventListener("click", ()=> {
//     allInput.forEach(input =>{
//         if(input.value != ""){
//             form.classList.add("secActive");
//         }else{
//             form.classList.remove("secActive");
//             alert("input is empty")
//         }
//     })
// })

function validateForm(){
    var namePattern = /^[a-zA-Z]+[ a-zA-Z]*$/;
    var aadharPattern = /^[2-9]\d{11}$/;
    var mobilePattern = /^[6789]\d{9}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    var fullName = document.getElementById('fullName').value;
    var mothersName = document.getElementById('mothersName').value;
    var fathersName = document.getElementById('fathersName').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var aadhar = document.getElementById('aadhar').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var parentsMobile = document.getElementById('parentsMobile').value;
    var community = document.getElementById('community').value;
    var casteCertNum = document.getElementById('casteCertNum').value;
    var issueDate = document.getElementById('issueDate').value;
    var issueAuthority = document.getElementById('issueAuthority').value;

    if(!namePattern.test(fullName)){
        document.getElementById('fullNameError').textContent = 'Please enter proper name.';
        document.getElementById('fullName').focus();
        return false;
    } else {
        document.getElementById('fullNameError').textContent = '';
    }
    
    if(!namePattern.test(mothersName)){
        document.getElementById('mothersNameError').textContent = 'Please enter proper name.';
        document.getElementById('mothersName').focus();
        return false;
    } else {
        document.getElementById('mothersNameError').textContent = '';
    }
    
    if(!namePattern.test(fathersName)){
        document.getElementById('fathersNameError').textContent = 'Please enter proper name.';
        document.getElementById('fathersName').focus();
        return false;
    } else {
        document.getElementById('fathersNameError').textContent = '';
    }

    if (gender === ''){
        document.getElementById('genderError').textContent = 'Please select Gender.';
        document.getElementById('gender').focus();
        return false;
    } else {
        document.getElementById('genderError').textContent = '';
    }

    if (dob === ''){
        document.getElementById('dobError').textContent = 'Please select date.';
        document.getElementById('dob').focus();
        return false;
    } else {
        document.getElementById('dobError').textContent = '';
    }

    if(!aadharPattern.test(aadhar)){
        document.getElementById('aadharError').textContent = 'Please enter 12 digit Aadhar Number.';
        document.getElementById('aadhar').focus();
        return false;
    } else {
        document.getElementById('aadharError').textContent = '';
    }

    if(!mobilePattern.test(mobile)){
        document.getElementById('mobileError').textContent = 'Please enter 10 digit mobile Number.';
        document.getElementById('mobile').focus();
        return false;
    } else {
        document.getElementById('mobileError').textContent = '';
    }

    if(!emailPattern.test(email)){
        document.getElementById('emailError').textContent = 'Please enter proper email id.';
        document.getElementById('email').focus();
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if(!mobilePattern.test(parentsMobile)){
        document.getElementById('parentsMobileError').textContent = 'Please enter 10 digit mobile Number.';
        document.getElementById('parentsMobile').focus();
        return false;
    } else {
        document.getElementById('parentsMobileError').textContent = '';
    }

    if (community === ''){
        document.getElementById('communityError').textContent = 'Please select community.';
        document.getElementById('community').focus();
        return false;
    } else {
        document.getElementById('communityError').textContent = '';
    }

    if (casteCertNum === ''){
        document.getElementById('casteCertNumError').textContent = 'Please Enter Caste Certificate number.';
        document.getElementById('casteCertNum').focus();
        return false;
    } else {
        document.getElementById('casteCertNumError').textContent = '';
    }

    if (issueDate === ''){
        document.getElementById('issueDateError').textContent = 'Please Enter Issue Date.';
        document.getElementById('issueDate').focus();
        return false;
    } else {
        document.getElementById('issueDateError').textContent = '';
    }

    if (issueAuthority === ''){
        document.getElementById('issueAuthorityError').textContent = 'Please Enter Issuing Authority.';
        document.getElementById('issueAuthority').focus();
        return false;
    } else {
        document.getElementById('issueAuthorityError').textContent = '';
    }

    document.getElementById("form_id").submit();


    // const htmldata= '<h1>yyyyy</h1>'
    // document.getElementById('formdata').innerHTML = htmldata;
    // return true;
}

function upperCaseF(a){
    setTimeout(function(){
        a.value = a.value.toUpperCase();
    }, 1);
}
