//All React execution code are there in 29thDec2025 folder mini-project

import React, { useState, useEffect } from "react";
import { getUsers } from "../api/userServices";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Fetching Users list
  useEffect(() => {
    let isMount = true;
    async function getUserData() {
      try {
        if (isMount) {
          const data = await getUsers();
          setUsers(data);
        }
      } catch (error) {
        if (isMount) {
          console.log("error", error);
          setError(error.message || "Someting went wrong");
          throw error;
        }
      } finally {
        if (isMount) {
          setLoading(false);
        }
      }
    }
    getUserData();
    //for Cleanup
    return () => (isMount = false);
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>All User Lists</h1>
      <ol>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default UserList;
