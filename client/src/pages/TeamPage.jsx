import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TeamTable from "../components/TeamTable";
import { apiUrl, requestHeader } from "../data/constant";

export default function TeamPage() {
  const [admins, setAdmins] = useState();
  const [paginationData, setPaginationData] = useState();

  // This function to get Team data from Server
  const getTeamData = async (page) => {
    try {
      const { data: { data, pagination } } = await axios.get(`${apiUrl}/api/admin/teams?page=${page}`, requestHeader);
      setAdmins(data);
      setPaginationData(pagination);
    } catch (error) {
      console.log(error);
    }
  }

  const onPageChange = async (pageNumber) => {
    await getTeamData(pageNumber);
  }

  useEffect(() => {
    // Call Ajax
    getTeamData(1);
  }, [])

  return (
    <div className="container m-t-30">
      <TeamTable 
        teams={admins} 
        pagination={paginationData}
        onPageChange={onPageChange}
      />
    </div>
  )
} 