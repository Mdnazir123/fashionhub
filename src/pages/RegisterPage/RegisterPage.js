import React, {useState} from 'react'
import userimage from "../../assets/images/login_animation.gif";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
// var passwordRegex = new RegExp('');
 const signupSchema = yup.object({
    firstname: yup.string().min(3).required('Please enter your first name.'),
    lastname: yup.string().min(3).required('Please enter your last name.'),
    email: yup.string().email('Please enter your valid email.').required('Please enter your valid email.'),
    password: yup.string().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/, 'Please enter your password.').required('Please enter your password.'),
    confirmpassword: yup.string().oneOf([yup.ref('password')], 'Password do not match!').required('Please enter your confirm password'),
  });

  const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''
  }

const RegisterPage = () => {
  const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues,
    validationSchema:signupSchema,
    onSubmit:(values, actions) => {
      console.log(values);
      actions.resetForm();
      alert('Signup successfully');
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };



  return (
    
      <div className="cm-register p-3 md:p-4">
          <div className="container">
              <div className="form-wraper p-4">
                  <div className="form-heading">
                      <img src={userimage} className=" useimage w-full h-full" alt = "user" />
                  </div>
                     <form className="hs-form" onSubmit={handleSubmit}>
                     <label for="firstName">First Name</label>
                     <input type="text" id="firstName" name="firstname" value={values.firstname} onBlur={handleBlur} onChange={handleChange} className="hs-input mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                       {errors.firstname && touched.firstname ? (<p className='form-error'>{errors.firstname}</p>) :null }
                     <label for="lastName">Last Name</label>
                     <input type="text" id="lastName" name="lastname" value={values.lastname} onBlur={handleBlur} onChange={handleChange} className="hs-input mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                       {errors.lastname && touched.lastname ? (<p className='form-error'>{errors.lastname}</p>) : null }
                     <label for="email">Email</label>
                     <input type="email" id="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className="hs-input mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                       {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>): null}
                     <label for="password">Password</label>
                     <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                         <input type={showPassword ? "text" : "password"} id="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} className="hs-input w-full bg-slate-200 border-none outline-none" />
                         <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>
                         {showPassword ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path></svg>}
                         </span>
                     </div>
                     {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null }
                     <label for="confirmpassword">Confirm Password</label>
                     <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                         <input type={showConfirmPassword ? "text" : "password"} id="confirmpassword" name="confirmpassword" value={values.confirmpassword} onBlur={handleBlur} onChange={handleChange} className="hs-input w-full bg-slate-200 border-none outline-none" />
                         <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword}>
                         {showConfirmPassword ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path></svg>}
                         </span>
                     </div>
                     {errors.confirmpassword && touched.confirmpassword ? (<p className='form-error'>{errors.confirmpassword}</p>) : null }
                     <button type='submit' className="hs-button w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Sign up</button>
                 </form>
                
                    
                
                  <p className="text-left text-sm mt-2">Already have account ? <Link className="text-red-500 underline" to="/login">Login</Link></p>
              </div>
          </div>
      </div>

  )
}

export default RegisterPage