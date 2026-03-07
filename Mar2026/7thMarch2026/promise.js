class MyPromise {
  constructor(executor) {
    // write your code
    this.value = undefined;
    this.isResolved = false;
    this.callback = [];
    const resolve = (value) => {
      this.value = value;
      this.isResolved = true;
      this.callback.forEach((cb) => cb(value));
    };
    executor(resolve);
  }

  then(callback) {
    // write your code
    if (this.isResolved) {
      callback(this.value);
    } else {
      this.callback.push(callback);
    }
  }
}

const p = new MyPromise((resolve) => {
  setTimeout(() => resolve("Hello Promise"), 1000);
});

p.then((data) => {
  console.log(data);
});
