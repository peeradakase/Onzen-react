import { useState } from 'react';

function SignUpItem() {
  const [signUpItem, setSignUpItem] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  function onsetSignUpItemChange(event) {
    const { name, value } = event.target;
    setSignUpItem((prevSignUpItem) => {
      return {
        ...prevSignUpItem,
        [name]: value
      }
    })
  }

  return (
    <div>
      <h1 className="text-center m-t-30 m-b-30">Sign Up</h1>
      <form className="input-form m-t-30">

        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="name-input"
            name="name"
            value={signUpItem.name}
            placeholder="Name"
            onChange={onsetSignUpItemChange}
          />
          <label for="name-input">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="phoneNumber-input"
            name="phoneNumber"
            value={signUpItem.phoneNumber}
            placeholder="Phone number"
            onChange={onsetSignUpItemChange}
          />
          <label for="phoneNumber-input">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email-input"
            name="email"
            value={signUpItem.email}
            placeholder="Email"
            onChange={onsetSignUpItemChange}
          />
          <label for="email-input">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="password-input"
            name="password"
            value={signUpItem.password}
            placeholder="Password"
            onChange={onsetSignUpItemChange}
          />
          <label for="phoneNumber-input">Password</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="password-input"
            name="passwordConfirmation"
            value={signUpItem.passwordConfirmation}
            placeholder="Password Confirmation"
            onChange={onsetSignUpItemChange}
          />
          <label for="phoneNumber-input">Password Confirmation</label>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="general-button btn btn-primary mb-3 m-t-30"

            type="submit">Sign Up</button>
        </div>
      </form>

    </div>

  )
}

export default SignUpItem;
