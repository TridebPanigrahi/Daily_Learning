function debouncing(fn, interval) {
  let timer;
  return function (arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, arg);
    }, interval);
  };
}

function userSearch(search) {
  console.log(search);
}

const search = debouncing(userSearch, 2000);

search("a");
search("ab");
search("abc");
