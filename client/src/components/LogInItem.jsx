import { useState } from 'react';

function LogInItem() {
  const [logIn, setLogIn] = useState({
    email: '',
    password: ''
  });

  function onLogInItemChange(event) {
    const { name, value } = event.target;
    setLogIn((prevLogIn) => {
      return {
        ...prevLogIn, [name]: value
      }
    })
  }

  return (
    <div>
      <h1 className="text-center m-t-30 m-b-30">Log In</h1>

      <form className="input-form m-t-30">
        <div className="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email-input"
            name="email"
            value={logIn.email}
            placeholder="Email"
            onChange={onLogInItemChange}
          />
          <label for="email-input">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="password-input"
            name="password"
            value={logIn.password}
            placeholder="Password"
            onChange={onLogInItemChange}
          />
          <label for="phoneNumber-input">Phone Number</label>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="general-button btn btn-primary mb-3 m-t-30"
            type='submit'>Log In</button>
        </div>
      </form >
    </div >

  )
}

export default LogInItem;
