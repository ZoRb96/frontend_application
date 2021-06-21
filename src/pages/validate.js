const validate = (inputs) => {
    //Email errors
   const errors = {};
   if (!inputs.email) {
       errors.email = 'Check Email';
   } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
   ) {
       errors.email = 'Invalid email address';
   }
   //Password Errors
//    if(!inputs.password  || inputs.password.length<6){
//        errors.password = 'Check Password'
//    }

if(!inputs.firstname){
           errors.firstname = 'Please enter a valid name'
      }

      if(!inputs.lastname){
        errors.lastname = 'Please enter a valid name'
   }

   if(!inputs.contactNo){
    errors.contactNo = 'Please enter a valid Contact Number'
}else if (
    !/^[6-9]\d{9}$/i.test(inputs.contactNo)
) {
    errors.contactNo = 'Please enter a valid Contact Number';
}

// if(!inputs.employeeId){
//     errors.employeeId = 'Please enter a valid Employee Id'
// }

   return errors;
 }
 export default validate;