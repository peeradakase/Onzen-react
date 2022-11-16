import { useState } from 'react';

function LogInItem() {
  const [logIn,setLogIn] = useState({
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
      <h1>Log In</h1>
      <form>
        <input
          type="email"
          name="email"
          value={logIn.email}
          placeholder="Email"
          onChange={onLogInItemChange}
          />

        <input
          type="password"
          name="password"
          value={logIn.password}
          placeholder="Password"
          onChange={onLogInItemChange}
        />
        <button type='submit'>Log In</button>
      </form>
    </div>

  )
}

export default LogInItem;
