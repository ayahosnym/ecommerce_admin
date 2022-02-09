import { AxiosInstance } from '../network/AxiosInstance';

export const getProducts = async () => {
  const response = await AxiosInstance.get("products");
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const getProductById = async (id) => {
  const response = await AxiosInstance.get(`products/${id}`);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const createProduct = async (newProduct) => {
  const response = await AxiosInstance.post("products",newProduct);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const deleteProduct = async (id) => {
  const response = await AxiosInstance.delete(`products/${id}`);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const updateProduct = async (id) => {
  const response = await AxiosInstance.patch(`products/${id}`);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}