function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

sleep(1000).then(() => console.log("Executed after 1 second"));
