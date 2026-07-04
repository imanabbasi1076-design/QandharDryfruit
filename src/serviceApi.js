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