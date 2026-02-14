const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);
async function resolvedPromises(promiseArr) {
  const data = await Promise.all(promiseArr);
  return data;
}

resolvedPromises([p1, p2, p3]).then(console.log).catch(console.error);
