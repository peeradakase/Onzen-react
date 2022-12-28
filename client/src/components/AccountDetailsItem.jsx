import { useState } from 'react';

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
    <div className="input-form">
      <h1 className="text-center m-t-30">Account Details</h1>
      <form className="m-t-30">

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name-input"
            name="name"
            value={accountDetails.name}
            placeholder="Name"
            onChange={onAccountDetailsChange}
          />
          <label htmlFor="name-input">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email-input"
            name="email"
            value={accountDetails.email}
            placeholder="Email"
            onChange={onAccountDetailsChange}
          />
          <label htmlFor="email-input">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="phoneNumber-input"
            name="phoneNumber"
            value={accountDetails.phoneNumber}
            placeholder="PhoneNumber"
            onChange={onAccountDetailsChange}
          />
          <label htmlFor="phoneNumber-input">Phone Number</label>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="general-button btn btn-primary mb-3 m-t-30"
            type="submit">
            Update My Details
          </button>
        </div>
      </form>
    </div>

  )
}

export default AccountDetailsItem;
