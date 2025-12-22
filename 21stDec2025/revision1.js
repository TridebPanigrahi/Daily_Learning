/*
//Write one closure exmple

//greeting function

function greeting(name) {
  let nameValue = name || "You";

  return function (name2) {
    console.log(`Happy leaning day to ${nameValue}`);
    console.log(`i wish this guy ${name2} will be fine`);
  };
}

let greet = greeting("Trideb");

greet("Kaushik");

let greet1 = greeting("Trideb");
let greet2 = greeting("Rahul");

greet1("A");
greet2("B");

*/

/*
async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Server err");
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (err) {
    console.log("err");
  }
}
getUserData();
*/

