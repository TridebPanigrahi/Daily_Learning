Promise.resolve(1)
  .then(x => x + 1)
  .then(x => {
    throw new Error("Error")
  })
  .then(x => console.log(x))
  .catch(err => console.log("Caught"))

  // guessing result "Caught"