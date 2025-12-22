/*
async function getUserData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("getting error by feching user data");
    }

    const responseData = await res.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
}

getUserData();

*/

// to create users

/*
async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello",
        body: "World",
        userId: 1,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

createUser();

*/

//Parallel Api calls


async function loadDashboard() {
  try {
    const [user, post] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    ]);

    console.log(post);
  } catch (err) {
    console.log(err);
  }
}

loadDashboard();



/*
function loadDashboard() {
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    ),
  ])
    .then(([getUserData, getPostData]) => {
      console.log(getUserData);
      console.log("*************************************");
      console.log(getPostData);
    })
    .catch((err) => {
      console.log(err);
    });
}


loadDashboard();

*/