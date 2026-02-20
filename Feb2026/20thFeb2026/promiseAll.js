const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

async function promiseAll() {
  const response = await Promise.all([p1, p2, p3]);
  return response;
}

promiseAll()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
