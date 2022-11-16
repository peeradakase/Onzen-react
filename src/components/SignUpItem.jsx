import { useState } from 'react';

function SignUpItem() {
  const [signUpItem, setSignUpItem] = useState({
    name:'',
    phoneNumber:'',
    email:'',
    password:'',
    passwordConfirmation:''
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
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          name="name"
          value={signUpItem.name}
          placeholder="Name"
          onChange={onsetSignUpItemChange}
          />

        <input
          type="text"
          name="phoneNumber"
          value={signUpItem.phoneNumber}
          placeholder="Phone number"
          onChange={onsetSignUpItemChange}
        />

        <input
          type="email"
          name="email"
          value={signUpItem.email}
          placeholder="Email"
          onChange={onsetSignUpItemChange}
        />

        <input
          type="password"
          name="password"
          value={signUpItem.password}
          placeholder="Password"
          onChange={onsetSignUpItemChange}
        />

        <input
          type="password"
          name="passwordConfirmation"
          value={signUpItem.passwordConfirmation}
          placeholder="Password Confirmation"
          onChange={onsetSignUpItemChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>

  )
}

export default SignUpItem;
