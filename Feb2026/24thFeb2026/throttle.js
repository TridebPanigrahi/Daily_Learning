function throttle(fn, delay) {
  let lastcall = 0;
  return function (...args) {
    const now = new Date();
    let newLast = now - lastcall;
    // console.log(newLast)
    console.log("newLast:", newLast);
    if (newLast >= delay) {
      lastcall = now;
      fn.apply(this, args);
    }
  };
}

function sayHello() {
  console.log("Hello", new Date().toLocaleTimeString());
}

const throttledHello = throttle(sayHello, 2000);

setInterval(throttledHello, 5000);

// console.log(throttledHello)
// console.log('throttledHello:', throttledHello)
