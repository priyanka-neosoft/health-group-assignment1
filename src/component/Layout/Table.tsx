import React, { useState, FC } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

type TableProps = {
  usersData?: any;
};

/**
 * @description Table Component.
 * used for showing Table in Table page.
 */
const Table: FC<TableProps> = ({ usersData }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  /**
   * @description paginate function.
   * used for setting the current page num.
   */
  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table className="table border shadow tableCustom">
        <thead className="thead">
          <th key="name" scope="col">
            Name
          </th>
          <th key="email" scope="col">
            Email
          </th>
          <th key="positionName" scope="col">
            Position
          </th>
        </thead>
        <tbody>
          {currentUsers.map(
            (
              user: {
                Position: string | "";
                id: string;
                Name: string | "";
                Email: string | "";
              },
              index: number
            ) => {
              return (
                <tr key={"rowData_" + user.id}>
                  <td key={"nameData_" + user.id}>{user.Name}</td>
                  <td key={"emailData_" + user.id}>{user.Email}</td>
                  <td key={"positionData_" + user.id}>{user.Position}</td>
                </tr>
              );
            }
          )}
          <tr key="addNewUser">
            <td className="addNewButton" colSpan={3}>
              <Link className="btn" to="/users/add">
                + Add Employee Details
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination
        postsPerPage={usersPerPage}
        totalPosts={usersData.length}
        paginate={paginate}
      />
    </>
  );
};

export default Table;
