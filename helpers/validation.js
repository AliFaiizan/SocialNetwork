

module.exports.emailValidation=(email) => { 
    return String(email).toLowerCase().match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})([a-z]{2,12})?$/)

 }

//  {
//     "first_name":"ali",
//     "last_name":"Faizan",
//     "user_name":"Alif1",
//     "email":"ali@gmail.com",
//     "password":"12345678",
//     "confirmPassword":"12345678",
//     "bYear":"1997",
//     "bMonth":"4",
//     "bDay":"25",
//     "gender":"Male"
// }