import { Link } from "react-router-dom";
import { apiUrl } from "../data/constant";
import Pagination from "./Pagination";

const TeamTable = (props) => {
  const { teams, pagination, onPageChange, onTeamDelete } = props;

  const pageCount = pagination
    ? Math.ceil(pagination.total / pagination.limit)
    : 0;

  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    onPageChange(currentPage);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams &&
            teams.map((admin) => {
              // apiUrl
              // http://backend.com

              // avatar
              // images/tanmgo.jpeg

              // http://backend.com/images/tanmgo.jpeg
              return (
                <tr key={admin.id}>
                  <td>
                    <img
                      className="max-width-80"
                      src={`${apiUrl}/${admin.avatar}`}
                      alt=""
                    />
                  </td>
                  <td>{admin.id}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.phoneNumber}</td>
                  <td>{admin.role}</td>
                  <td>
                    <Link to={`/admin/teams/${admin.id}`}>
                      <button className="btn btn-info">Update</button>
                    </Link>
                    {/* 1. Delete Button (of each row) is clicked */}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onTeamDelete(admin.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Pagination onPageChange={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export default TeamTable;
