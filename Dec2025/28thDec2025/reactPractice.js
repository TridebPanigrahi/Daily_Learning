import { useEffect, useState } from "react";

export const getUser = () => {
  return Promise.resolve([
    { id: 1, name: "trideb" },
    { id: 2, name: "kaushik" },
  ]);
};

const User = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMount = true;
    async function getUserData() {
      try {
        if (isMount) {
          setLoading(true);
          const userResponse = await getUser();
          setUser(userResponse);
        }
      } catch (err) {
        if (isMount) {
          console.log(err);
          setError(err.message || "Someting went wrong");
        }
      } finally {
        if (isMount) {
          setLoading(false);
        }
      }
    }
    getUserData();
    return () => (isMount = false);
  }, []);
  return (
    <>
      {loading && <>Loading.....</>}
      {error && <>{error}</>}
      <ul>
        {user.map((ele) => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
