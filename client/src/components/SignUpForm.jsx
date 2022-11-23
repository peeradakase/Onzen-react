import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { apiUrl, requestHeader } from "../data/constant.js"

function SignUpForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validate: (value) => {
      const errors = {};

      if (value.password.length < 4) {
        errors.password = true
      }

      if (value.password !== value.passwordConfirmation) {
        errors.passwordConfirmation = true;
      }

      return errors;
    },
    onSubmit: (values, {setErrors}) => {
      signupUser(values, setErrors);
      console.log(values, ':signup value');
    },
    validateOnChange: false
  });

  const signupUser = async (values, setErrors) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${apiUrl}/api/auth/signup`,
        values,
        requestHeader
      );
      props.onSuccessSignup(data);
    } catch (error) {
      if (error.response?.data)  {
        setErrors(error.response?.data)
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-center m-t-30 m-b-30">Sign Up</h1>
      <form className="input-form m-t-30" onSubmit={formik.handleSubmit}>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name-input"
            name="name"
            value={formik.values.name}
            placeholder="Name"
            onChange={formik.handleChange}
            required
          />
          <label htmlFor="name-input">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="phoneNumber-input"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            placeholder="Phone number"
            onChange={formik.handleChange} />
          <label htmlFor="phoneNumber-input">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email-input"
            name="email"
            value={formik.values.email}
            placeholder="Email"
            onChange={formik.handleChange}
            required />
          <label htmlFor="email-input">Email</label>
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password-input"
            name="password"
            value={formik.values.password}
            placeholder="Password"
            onChange={formik.handleChange} />
          <label htmlFor="password-input">Password</label>
          {formik.errors.email && <p>Password more than 3 characters</p>}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="passwordConfirmation-input"
            name="passwordConfirmation"
            value={formik.values.passwordConfirmation}
            placeholder="Password Confirmation"
            onChange={formik.handleChange} />
          <label htmlFor="passwordConfirmation-input">Password Confirmation</label>
          {formik.errors.passwordConfirmation && <p>Error Password not match</p>}
        </div>


        {isLoading ? "Loading" :
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="general-button btn btn-primary mb-3 m-t-30"

            type="submit">Sign Up</button>
        </div>
        }
      </form>

    </div>

  )
}

export default SignUpForm;
