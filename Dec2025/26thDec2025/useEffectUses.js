const { useEffect, useState } = require("react");

export async function getUsers(userId, signal) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/user/${userId}`,
      { signal }
    );
    if (!res.ok) throw new Error("Server Error");
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const userDashboard = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchUser() {
      try {
        setLoading(true);
        const data = await getUsers(1, abortController.signal);
        setState(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
    return () => abortController.abort();
  }, [state]);
  return (
    <>
      {loading && <h5>Loading...</h5>}
      <div>{state.name}</div>
    </>
  );
};

export default userDashboard;
