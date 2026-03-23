function throughtling(fn, interval) {
  let lastTime = 0;
  return function (args) {
    const now = new Date();
    if (now - count > interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

function serching() {
  console.log("Throttle");
}

setInterval(() => {
  serching();
}, 2000);
