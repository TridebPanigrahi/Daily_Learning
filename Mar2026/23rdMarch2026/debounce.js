function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function search(args) {
  console.log("serching for", args);
}

const searchData = debounce(search, 500)

searchData("S")
searchData("Se")
searchData("Ser")
searchData("Search")


