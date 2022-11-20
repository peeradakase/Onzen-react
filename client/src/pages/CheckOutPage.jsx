import CheckOutOrderDetails from '../components/CheckOutOrderDetails';
import CheckOutPayment from '../components/CheckOutPayment';
import CheckOutContact from '../components/CheckOutContact';

const CheckOutPage = ()=> {

  return (
    <div>
      <div>
        <CheckOutOrderDetails/>
      </div>
      <div>
        <CheckOutPayment />
      </div>
      <div>
        <CheckOutContact />
      </div>
    </div>
  )
}
export default CheckOutPage;
