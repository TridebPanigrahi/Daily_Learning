const userService = require("./userService");

async function getAlluserData() {
  try {
    const response = await userService.getAllusers();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

getAlluserData()