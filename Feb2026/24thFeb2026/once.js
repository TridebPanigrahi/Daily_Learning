function once(fn) {
    let count =0
  return function () {
    count++
    if(count === 1){
        fn();
    }
  };
}

const fn = once(() => console.log("Hello"))

fn()
fn()
