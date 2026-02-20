function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function sayHello() {
  console.log("Hello");
}

// const debouncedHello = debounce(sayHello, 2000);

// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();

const search = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

search("h");
search("he");
search("hel");
search("hell");
search("hello");
