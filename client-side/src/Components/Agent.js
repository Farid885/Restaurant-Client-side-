import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:3000",
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => baseApi.get(url).then(responseBody),
  post: (url, body = {}) => baseApi.post(url, body).then(responseBody),
  put: (url, body = {}) => baseApi.put(url, body).then(responseBody),
  del: (url) => baseApi.delete(url).then(responseBody),
};

const Posts = {
  All: () => requests.get("/posts"),
  Create: (body) => requests.post("/posts", body),
  Update: (id, body) => requests.put(`/posts/${id}`, body),
  Remove: (id) => requests.del(`/posts/${id}`),
};

const Categories = {
  /**
   * @returns {Promise<Array<{id:number;name:string}>>}
   */
  All: () => requests.get("/categories"),
  /** @param {{name:string}} body */
  Create: (body) => requests.post("/categories", body),
  /**
   * @param {number} id
   * @param {{name:string}} body */
  Update: (id, body) => requests.put(`/categories/${id}`, body),
  /** @param {number} id */
  Remove: (id) => requests.del(`/categories/${id}`),
};

const Comments = {
  All: () => requests.get("/comments"),
  Create: (body) => requests.post("/comments", body),
  Update: (id, body) => requests.put(`/comments/${id}`, body),
  Remove: (id) => requests.del(`/comments/${id}`),
};

export const agent = { Posts, Categories, Comments };