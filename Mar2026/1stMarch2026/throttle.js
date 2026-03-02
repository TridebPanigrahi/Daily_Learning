function throttle(func, ms) {
  let timeCount = 0;
  return function (...args) {
    const now = new Date();
    if (now - timeCount > ms) {
      timeCount = now;
      func.apply(this, args);
    }
  };
}

const handleScrolling = throttle(() => console.log("Scrolling"), 2000);

setInterval(handleScrolling, 100);
