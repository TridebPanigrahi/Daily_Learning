//Traditional way of retry and handel error with for loop

async function retryMethod(url, retry = 3, delay = 1000) {
  for (let i = 0; i < retry; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      if (i === retry - 1) throw error;
      console.log(`Retrying server failure ${i + 1} times`);
      await new Promise((res) => setTimeout(res, delay));
      delay *= 2;
    }
  }
}

async function fallBack() {
  try {
    return await retryMethod("https://jsonplaceholder.typicode.com/user");
  } catch (error) {
    console.log(error);
    return {
      userName: "Bob",
      time: new Date(),
      offlineUser: true,
    };
  }
}

async function init() {
  const finalData = await fallBack();
  console.log("Final Output:", finalData);
}

init();
