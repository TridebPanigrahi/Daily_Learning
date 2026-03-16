async function Task() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Completed");
    }, 2000);
  });
  return result;
}

Task().then(console.log);
