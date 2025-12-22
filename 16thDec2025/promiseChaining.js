function calculateNumber(num) {
  return new Promise((resolve) => {
    resolve(1 + num);
  });
}

calculateNumber(5)
  .then((res) => {
    return calculateNumber(res);
  })
  .then((result) => {
    console.log(result);
  });
