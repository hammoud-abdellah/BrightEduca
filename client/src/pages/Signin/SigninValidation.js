function validation(inputValue) {
    const error = {}
    const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/

    if(inputValue.email === "") {
        error.email = "Email shoudn't be empty"
    }
    // else if(!email_pattern.test(inputValue.email) ) {
    //     error.email = "Email didn't match";
    // }
    else{
        error.email ="";
    }

    // if(!password_pattern.test(inputValue.password) ) {
    //     error.password = "Password didn't match";
    // }
    if(inputValue.password === "") {
        error.password = "Password shoudn't be empty"
    }
    else{
        error.password ="";
    }

    return error ;

} 

export default validation;