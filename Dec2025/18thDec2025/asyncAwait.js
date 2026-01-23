/*
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function welcomeUser() {
  console.log("Start");
  await delay(2000);
  console.log("Welcome user");
  return "Done";
}

welcomeUser().then((res)=>{
    console.log(res)
});
*/

//Correct way of writing async/await

async function getUserData() {
  const data = await fetchData();
  return data.data;
}

// Wrong Way

async function test() {
  const data = await fetchData().then((res) => res.data);
  return data;
}
