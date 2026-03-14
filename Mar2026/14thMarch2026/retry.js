async function retry(fn, retries) {
  try {
    let response = await fn();
    return response;
  } catch (error) {
    if (retries) {
      retry(fn, retries - 1);
    } else {
      console.log(error);
    }
    console.log(retries, "re");
  }
}

const fetch = () => {
  return Promise.reject(1);
};

retry(fetch, 2).then(console.log);
