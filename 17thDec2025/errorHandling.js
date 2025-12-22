/*
Promise.resolve(10)
  .then((num) => {
    console.log(num);
    throw new Error("Something went wrong");
  })
  .then((num) => {
    console.log("Second Number", num);
    return num * 5;
  })
  .catch((error) => {
    console.log("Caught a new error", error.message);
  });
*/

/*
function getData(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Promises has resolved");
    } else {
      reject("Rejected Promises");
    }
  });
}

getData(false)
  .then((result) => {
    console.log("resullt", result);
  })
  .catch((err) => {
    console.log("Error for", err);
  });
*/

/*
Promise.reject("Initial error")
  .catch((err) => {
    console.log("Err for", err);
    return "Recovery value";
  })
  .then((result) => {
    console.log(result);
  });
*/

/*
Promise.resolve()
  .then(() => {
    throw new Error("Throwing an Error");
  })
  .catch((err) => {
    console.log("Caught", err.message);
  })
  .then(() => {
    console.log("Exequte after that middle catch");
  });
  */
