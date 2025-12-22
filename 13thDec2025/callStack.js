console.log("Start");
setTimeout(() => {
  console.log("MacroTaskque       ");
});
Promise.resolve().then(() => {
  console.log("Promise resoved");
});
console.log("End");
