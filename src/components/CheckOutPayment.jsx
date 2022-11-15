import { useState } from 'react';

function CheckOutPayment() {
  const [selectedPayment, setSelectedPayment] = useState('');

  return (
    <div>
      <h1>Select Payment method</h1>
      <form>
        <input
          type="radio"
          name="payment"
          id="bank-transfer"
          value={selectedPayment}/>
        <label for="bank-transfer">Bank Transfer</label>

        <input
          type="radio"
          name="payment"
          id="paypal"
          value={selectedPayment}
          onChange={(event) => { setSelectedPayment(event.target.value)}}
          />
        <label for="paypal">PayPal</label>

        <input
          type="radio"
          name="payment"
          id="credit-card"
          value={selectedPayment}
          onChange={(event) => { setSelectedPayment(event.target.value) }}
          />
        <label for="credit-card">Credit Card</label>

      </form>
    </div>
    )
}
      export default CheckOutPayment;
