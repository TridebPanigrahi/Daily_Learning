function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


const search = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

search('h')
search('he')
search('hel')
search('hell')
search('hello')

