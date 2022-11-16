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
      <form>
        <input
          type="text"
          name="name"
          value={contact.name}
          placeholder="Name"
          onChange={onContactChange}
        />
        <input
          type="text"
          name="phoneNumber"
          value={contact.phoneNumber}
          placeholder="Phone number"
          onChange={onContactChange}
        />

        <Button type="submit">
          Check out
        </Button>
      </form>
    </div>
  );
};
export default CheckOutContact;
