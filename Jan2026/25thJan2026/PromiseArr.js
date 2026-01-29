// parallel call of function

const F1 = () => Promise.resolve("1");
const F2 = () => Promise.resolve("2");
const F3 = () => Promise.resolve("3");

async function PromiseAny(arr) {
  const resovedFirst = await Promise.any(arr.map(ele=>ele()));
  return resovedFirst;
}

PromiseAny([F1, F2, F3]).then(console.log).catch(console.error);
