import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { apiUrl, requestHeader } from "../data/constant.js"


function LogInForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: (value) => {
      const errors = {};

      if (value.password.length < 4) {
        errors.password = true
      }
      return errors;
    },
    onSubmit: (values, {setErrors}) => {
      loginUser(values, setErrors);
      console.log(values, ':login value');
    },
    validateOnChange: false
  })

  const loginUser = async (values, setErrors) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${apiUrl || ''}/api/auth/login`,
        values,
        requestHeader
      );
      props.onSuccessLogin(data);
    } catch (error) {
      if (error.respon?.data) {
        setErrors(error.respon?.data)
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-center m-t-30 m-b-30">Log In</h1>

      <form className="input-form m-t-30" onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email-input"
            name="email"
            value={formik.values.email}
            placeholder="Email"
            onChange={formik.handleChange}
          />
          <label htmlFor="email-input">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password-input"
            name="password"
            value={formik.values.password}
            placeholder="Password"
            onChange={formik.handleChange}
          />
          <label htmlFor="password-input">Password</label>
        </div>

        {isLoading ? "Loading":
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="general-button btn btn-primary mb-3 m-t-30"
            type='submit'>Log In</button>
        </div>
        }
      </form>
    </div>

  )
}

export default LogInForm;
