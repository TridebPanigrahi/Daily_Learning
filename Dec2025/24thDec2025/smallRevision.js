const axios = require("axios");

async function parallalApis() {
  try {
    const [user, post] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ]);
    console.log(post);
  } catch (err) {
    console.log(err);
  }
}

parallalApis();
