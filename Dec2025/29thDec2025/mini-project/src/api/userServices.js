import apiClient from "./apiClient";
import { withRetry } from "./retry";

//get all users
export async function getUsers() {
  try {
    const response = await withRetry(() => apiClient.get("/users"));
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//get all posts
export async function getPosts() {
  try {
    const response = await withRetry(() => apiClient.get("/postss"));
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
