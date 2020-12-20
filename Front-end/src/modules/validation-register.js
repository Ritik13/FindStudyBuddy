let validateReg = (myData) => {

    let errorArray = [];

    const regexObject = {
        nameRegex: /^[a-zA-Z ]{2,30}$/,
        emailRegex: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        passwordRegex: /^(?=.*[0-9])(?=.*[!@#$%^ &*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        phoneRegex: /^\d{10}$/
    }

    // compainring the values recieved with the regex we are using to take on errors 
    if (!regexObject.nameRegex.test(myData.firstName)) {
        errorArray.push("nameError");
    }
    if (!regexObject.emailRegex.test(myData.email)) {
        errorArray.push("emailError");
    }
    if (!regexObject.passwordRegex.test(myData.password)) {
        errorArray.push("passwordError");

    }
    if (!regexObject.phoneRegex.test(myData.phoneNumber)) {
        errorArray.push("phoneError");

    }
    // returnig item if there is no error then -> true , if there is error than return error Array
        
    if (errorArray.length >= 1)      return errorArray;
     else return true;
}

export default validateReg;