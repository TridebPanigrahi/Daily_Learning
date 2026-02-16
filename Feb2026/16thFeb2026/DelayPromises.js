function delay(ms) {
  const p = Promise.resolve(ms).then(() => {
    setTimeout(() => {
      console.log("Promise Resolved");
    }, ms);
  });
  return p;
}

delay(2000);
