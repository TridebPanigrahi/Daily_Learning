function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function Search(args) {
  console.log(args);
}

const hello = debounce(Search, 500);

hello("S");
hello("Se");
hello("Sea");
hello("Sear");
hello("Searc");
hello("Search");
