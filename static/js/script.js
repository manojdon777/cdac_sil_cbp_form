function toggleTextbox() {
    if (document.getElementById("community").value === "women") {
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

function validateForm() {
    // alert("reterte");
    var namePattern = /^[a-zA-Z]+[ a-zA-Z]*$/;
    var mobilePattern = /^\d{10}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var aadharPattern = /^\d{12}$/;

    var fullName = document.getElementById('fullName').value;
    var mothersName = document.getElementById('mothersName').value;
    var fathersName = document.getElementById('fathersName').value;
    var gender = document.getElementById('gender').value;
    var community = document.getElementById('community').value;
    // var dob = document.getElementById('dob').value;
    
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
    
    if (gender === '') {
        document.getElementById('genderError').textContent = 'Please select Gender.';
        return false;
    } else {
        document.getElementById('genderError').textContent = '';
        return true;
    }
    
    return true;
}


function upperCaseF(a){
    setTimeout(function(){
        a.value = a.value.toUpperCase();
    }, 1);
}
