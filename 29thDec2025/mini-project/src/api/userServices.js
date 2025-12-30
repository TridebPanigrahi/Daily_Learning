import apiClient from "./apiClient";

//get all users
export async function getUsers() {
  try {
    const response = await apiClient.get("/users");
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//get all posts
export async function getPosts() {
  try {
    const response = await apiClient.get("/posts");
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
