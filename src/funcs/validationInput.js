// const validationInput = (email,password) => {
//   let regEmail=/\w{2}.+@(gmail|email)\.com/g;
//   const error = {};
//   if (!email.length) {
//     console.log("1");
//     setError((prev) => ({ ...prev, email: "لطفا ایمیل خود را وارد کنید" }));
//   } else if (!regEmail.test(email)) {
//     console.log("2");
//     setError((prev) => ({
//       ...prev,
//       email: "لطفا ایمیل خود را  صحیح وارد کنید",
//     }));
//   } else {
//     console.log("3");
//     const { email, ...rest } = error;
//     setError(rest);
//   }
//   if (!password.length) {
//     console.log("11");
//     setError((prev) => ({ ...prev, password: "لطفا پسورد خود را وارد کنید" }));
//   } else if (password.length < 6) {
//     console.log("22");
//     setError((prev) => ({
//       ...prev,
//       password: " پسورد کمتر از 6 کاراکتر می باشد",
//     }));
//   } else {
//     console.log("33");
//     const { password, ...rest } = error;
//     setError(rest);
//   }
// };

// export { validationInput }

const validationInput = (email,password) => {
    let regEmail=/\w{2}.+@(gmail|email)\.com/g;
     const error = {};
     if (!email) {
       console.log("1");
       error.email="لطفا ایمیل خود را وارد کنید"
     } else if (!regEmail.test(email)) {
       console.log("2");
       error.email="لطفا ایمیل خود را  صحیح وارد کنید"
     } else {
       delete error.email
     }
     if(!password) {
       console.log("11");
       error.password= "لطفا پسورد خود را وارد کنید"
     } else if (password.length < 6) {
       console.log("22");
       error.password="پسورد کمتر از 6 کاراکتر می باشد"
     } else {
       delete error.password
     }
     console.log(error);
     return error
   };
   
   export { validationInput }