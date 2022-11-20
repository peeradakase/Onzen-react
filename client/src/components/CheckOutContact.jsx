import { useState } from "react";
import Button from 'react-bootstrap/Button';


function CheckOutContact() {
  const [contact, setContact] = useState({
    name: '',
    phoneNumber: ''
  });


  //สิ่งที่เราต้องการรู้คือeventมันมาจาก inputตัวไหน
  //เราจะได้ถึงค่าname กับvalueมาsetContactได้
  function onContactChange(event) {
    const { name, value } = event.target;
    setContact((prevContact) => {
      return {
        ...prevContact, [name]: value
      }
    })
  }

  return (
    <div>
      <h1 className="text-center m-t-50 m-l-30 m-r-30">Contact</h1>
      <form className="input-form m-l-30 m-r-30">
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="name-input"
            name="name"
            value={contact.name}
            placeholder="Name"
            onChange={onContactChange}
          />
          <label for="name-input">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="phone-number-input"
            name="phoneNumber"
            value={contact.phoneNumber}
            placeholder="Phone number"
            onChange={onContactChange}
          />
          <label for="name-input">Phone number</label>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
        <Button
            className="general-button btn btn-primary mb-3 m-t-30"
        type="submit">
          Check out
        </Button>
        </div>
      </form>
    </div>
  );
};
export default CheckOutContact;
