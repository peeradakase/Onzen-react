import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TeamTable from "../components/TeamTable";
import { apiUrl, requestHeader } from "../data/constant";

export default function TeamPage() {
  const [admins, setAdmins] = useState();
  const [paginationData, setPaginationData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(pageNumber);
  }

  const onDeleteItem = async (id) => {
    // Send Delete Request to Backend Server
    if (window.confirm("Confirm to delete this row?") === true) {
      // If yes
      // Send Delete Request to Backend Server
      try {
        await axios.delete(`${apiUrl}/api/admin/teams/${id}`);
        alert('Success Delete Team');
        getTeamData(currentPage);
      } catch (error) {
        alert('Error Delete team');
      }
    }
  }

  useEffect(() => {
    // Call Ajax
    getTeamData(currentPage);
  }, [])

  return (
    <div className="container m-t-30">
      <TeamTable
        teams={admins}
        pagination={paginationData}
        onPageChange={onPageChange}
        onTeamDelete={onDeleteItem}
      />
    </div>
  )
} 