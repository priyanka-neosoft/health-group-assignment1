import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../Layout/Table";
import { endPoint } from "../Constants/constant";

interface User {
  users: [];
}

/**
 * @description EmployeeDetails component.
 * Component used for showing the table page.
 */
const EmployeeDetails: React.FC<User> = ({ users: User }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  /**
   * @description useEffect hook.
   * this hooks used for calling function loadUsers(which fetches the data from api and updates the state accordingly ) and while data is fetching loading bool is made true so we can see loading text.
   */
  useEffect(() => {
    setLoading(true);
    loadUsers();
  }, []);

  /**
   * @description loadUsers fucntion.
   * loadUsers fucntion which fetches the data from api and updates the state accordingly and after getting data made loading boolean false.
   */
  const loadUsers = () => {
    axios.get(endPoint).then((res) => {
      setLoading(false);
      setUsers(res.data.reverse());
    });
  };

  return (
    <div className="container">
      <div className="py-4">
        <h3>Employee Details</h3>
        {isLoading ? <h3>loading...</h3> : <Table usersData={users} />}
      </div>
    </div>
  );
};

export default EmployeeDetails;
