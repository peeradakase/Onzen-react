import { useEffect, useState } from "react";
import axios from 'axios';
import OnsenItems from '../components/OnsenItems';
import { apiUrl, requestHeader } from "../data/constant.js";

const OnsenListsPage = () => {

  const [onsens, setOnsens] = useState([]);

  //เก็บลูก
  const onsenElements = onsens.map((onsen) => {
    return <OnsenItems key={onsen.id} onsen={onsen} />;
  });

  // 1.req onsen data from api
  const fetchOnsenData = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/onsens`, requestHeader);
      setOnsens(data)
    } catch (error) {
      alert('Error get onsens');
    }
  }
  useEffect(() => {
    fetchOnsenData();
  },[])

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
