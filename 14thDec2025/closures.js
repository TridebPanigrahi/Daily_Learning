function countByClosure(countData) {
  let count = countData || 0;
  return {
    increment: function (arg) {
      return (count += arg);
    },
    decrement: function () {
      return --count;
    },
    countData: function () {
      return count;
    },
  };
}

// const getCount = countByClosure(3);

// console.log("getCount", getCount.increment(5));


function sayHello(arg){
    return function(name){
        return `${arg} ${name}`
    }
}

const sayingHello = sayHello("Hello")

console.log(sayingHello("Tanu"))

//Question is why does the arg still exixt

//Ans: here the inner function having a access of outer function block, even if the fuction sayHello has finished exeqution
//which is kind of hidden or referance to the instance of outer function . this makes the arg alive 