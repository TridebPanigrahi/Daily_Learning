function debounce(fn, delay) {
  return function () {
    setTimeout(() => fn(), delay);
  };
}

const print = debounce(() => console.log("Hello"), 1000);
print();
