function validParentheses(s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (top !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validParentheses("{()}}"));
