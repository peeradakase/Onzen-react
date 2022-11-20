import { onsensData } from '../data/onsens-data';
import OnsenItems from '../components/OnsenItems';


const OnsenListsPage = () => {

  //เก็บลูก
  const onsenElements = onsensData.map((onsenData, index) => {
    return <OnsenItems key={index} onsenData={onsenData} />;
  });




  return (
    <div className="onsen-lists-container">
      <h5 className="scroll-down-text text-center m-t-50">SCROLL DOWN TO VIEW ALL EXPERIENCES</h5>
      <div>
        {onsenElements}
      </div>


    </div>
  )
}

export default OnsenListsPage;
