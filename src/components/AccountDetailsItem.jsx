import { useState } from 'react';
import styles from './AccountDetailsItem.module.css';

function AccountDetailsItem() {
  const [accountDetails, setAccountDetails] = useState({
  name:'',
  email:'',
  phoneNumber:''
  });

  function onAccountDetailsChange(event) {
    const {name, value} = event.target
    setAccountDetails((prevAccountDetails) => {
      return {
        ...prevAccountDetails,
        [name]: value
      }
    })

  }

  return (
    <div className={styles.inputAccountDetails}>
      <h1>Account Details</h1>
      <form>

        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="name-input"
            name="name"
            value={accountDetails.name}
            placeholder="Name"
            onChange={onAccountDetailsChange}
          />
          <label for="name-input">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email-input"
            name="email"
            value={accountDetails.email}
            placeholder="Email"
            onChange={onAccountDetailsChange}
          />
          <label for="email-input">Email</label>
        </div>

          <input
            type="text"
            name="phoneNumber"
            value={accountDetails.phoneNumber}
            placeholder="PhoneNumber"
            onChange={onAccountDetailsChange}
          />
        <button type="submit">Update My Details</button>
      </form>
    </div>

  )
}

export default AccountDetailsItem;
