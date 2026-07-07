import axios from "axios";

export const Signup = async (data) => {
  const response = await axios.post(
    "http://localhost/qandhar-backend/register.php",
    data,
  );
  return response.data;
};
export const AddProduct = async (data) => {
  const formData = new FormData();
  formData.append("productName", data.productName);
  formData.append("category", data.category);
  formData.append("price", data.price);
  formData.append("weight", data.weight);
  formData.append("description", data.description);
  formData.append("image", data.image[0]);

  const response = await axios.post(
    "http://localhost/qandhar-backend/addProduct.php",
    formData,
  );
  return response.data;
};

export const GetProducts = async () => {
  const response = await axios.get(
    "http://localhost/qandhar-backend/getProducts.php",
  );
  return response.data;
};

export const DeleteProduct = async (id) => {
  const response = await axios.post(
    "http://localhost/qandhar-backend/deleteProduct.php",
    { id: id },
  );
  return response.data;
};

export const UpdateProduct = async (id, data) => {
  const response = await axios.post(
    "http://localhost/qandhar-backend/updateProduct.php",
    { id: id, ...data },
  );
  return response.data;
};
export const LoginAccount = async (email, password) => {
  const response = await axios.post(
    "http://localhost/qandhar-backend/login.php",
    { email, password },
  );
  return response.data;
};

export const PlaceOrder = async (cartItems, userDetails) => {
  const response = await axios.post(
    "http://localhost/qandhar-backend/cart.php",
    { cartItems, userDetails },
  );
  return response.data;
};

export const GetOrders = async () => {
  const response = await axios.get(
    "http://localhost/qandhar-backend/getOrders.php",
  );
  return response.data;
};

export const UpdateOrderStatus = async (id, status) => {
  const response = await axios.post(
    "http://localhost/qandhar-backend/updateOrder.php",
    { Id: id, Status: status },
  );
  return response.data;
};

