import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../data/constant";

const UpdateAdminPage = () => {
  let { id } = useParams();

  const getAdminData = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/admin/teams/${id}`)
      console.log(data, ' :data');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAdminData(id);
  }, [id])

  return (
    <div>
      Update admin Page
    </div>
  )
}

export default UpdateAdminPage;