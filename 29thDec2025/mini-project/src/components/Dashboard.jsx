import React, { useState, useEffect } from "react";
import { getPosts, getUsers } from "../api/userServices";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    userCount: 0,
    postCount: 0,
  });

  useEffect(() => {
    let isMount = true;
    async function userDataCount() {
      try {
        if (isMount) {
          const [user, post] = await Promise.all([getUsers(), getPosts()]);
          setUserData({
            userCount: user.length,
            postCount: post.length,
          });
        }
      } catch (err) {
        if (isMount) {
          //   setError(err.message || "Someting went wrong");

          //written fallback for get rid of blank screen
          setError("Showing catched data");
          const catchedUser = JSON.parse(localStorage.getItem("user")) || "[]";
          console.log("catchedUser", catchedUser)
          setUserData({
            userCount: catchedUser.length,
            postCount: 0,
          });
        }
      } finally {
        if (isMount) {
          setLoading(false);
        }
      }
    }
    userDataCount();
    //Cleanup function
    return () => (isMount = false);
  }, []);

  if (loading) {
    return <p>Loading......</p>;
  }

  //   if (error) {
  //     return <p>{error}</p>;
  //   }

  return (
    <div>
      {error && <p>{error}</p>}
      <h3> Number of User :{userData.userCount}</h3>
      <h4> Number of Posts : {userData.postCount}</h4>
    </div>
  );
};

export default Dashboard;
