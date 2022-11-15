import { useState } from "react";

function CheckOutContact() {
  const [contact, setContact] = useState({
    name: '',
    phoneNumber: ''
  });

  function onContactChange(event) {

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
      </form>
    </div>
  );
};
export default CheckOutContact;
