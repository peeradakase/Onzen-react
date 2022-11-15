import FirstOnsen from '..images/onsen4.jpeg'
import Signals from '..images/signals.png'
import { Link, Outlet } from '..images/signals.png'


const OnsenListsPage = () => {
  const [selectedContent, setSelectedContent] = useState('about');

  const showOnsenContent = () => {

  }


  return (
    <div className="onsen-lists-container">
      <h5>SCROLL DOWN TO VIEW ALL EXPERIENCES</h5>

      <div class="box-onsens">
        <div class="box-onsen-1">
          <div class="box-img">
            <img src={FirstOnsen} alt="onsen-1"/>
          </div>
          <h1>THE OUTDOOR ONSEN</h1>
          <div>
            <img src={Signals} alt="signals"/>
          </div>

          <button onClick={()=>{

          }}>
          </button>

        </div>
      </div>

    </div>
  )
}

export default OnsenListsPage;
