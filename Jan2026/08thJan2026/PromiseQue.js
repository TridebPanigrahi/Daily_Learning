//Write a function fetchData(flag) that:
//returns a promise
//resolves with "Success" after 1 second if flag === true
//rejects with "Error" if flag === false
//👉 You may use Promise constructor OR async/await.

/*
//method 1
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Success"), 1000);
});

async function fetchData(flag) {
  try {
    if (flag) {
      const resolvedP = await p;
      return resolvedP;
    } else {
      throw new Error("Error");
    }
  } catch (err) {
    console.log("err", err);
    return Promise.reject(err);
  }
}

fetchData(false)
  .then(console.log)
  .catch((err) => console.log(err));

  */

//method 2

function fetchData(flag) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) resolve("Success");
      else {
        reject("Error");
      }
    }, 1000);
  });
}

fetchData(true)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
