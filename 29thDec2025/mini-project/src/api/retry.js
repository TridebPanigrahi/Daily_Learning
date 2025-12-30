//using retry for handel server error code like 5xx
export async function withRetry(fn, retries = 2, count = 0) {
  try {
    return await fn();
  } catch (error) {
    console.log("retry---", ++count);
    if (retries === 0) {
      throw error;
    }
    return withRetry(fn, retries - 1);
  }
}
