import Http from "./Http";
//User
export const getAllUsers = (config) => Http.get("/users", config);
export const createUser = (data, config) => Http.post("/users/create", data, config);
export const getUser = (id) => Http.get(`/users/${id}`);
export const updateUser = (data, id) => Http.post(`/users/edit/${id}`, data)
export const deleteUser = (id) => Http.get(`/users/delete/${id}`)

//Product
export const getAllProducts = (config) => Http.get("/products", config);
export const createProduct = (data, config) => Http.post("/products/create", data, config);
export const getProduct = (id) => Http.get(`/products/${id}`);
export const updateProduct = (data, id) => Http.post(`/products/update/${id}`, data)
export const deleteProduct = (id) => Http.get(`/products/delete/${id}`)

//Category
export const getAllCategories = (config) => Http.get("/categories", config);
export const createCategory = (data, config) => Http.post("/categories/create", data, config);
export const getCategory = (id) => Http.get(`/categories/${id}`);
export const updateCategory = (data, id) => Http.post(`/categories/update/${id}`, data)
export const deleteCategory = (id) => Http.get(`/categories/delete/${id}`)