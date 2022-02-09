import { AxiosInstance } from '../network/AxiosInstance';

export const getCategories = async () => {
  const response = await AxiosInstance.get("categories");
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const getCategoryById = async (id) => {
  const response = await AxiosInstance.get(`categories/${id}`);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const createCategory = async (newCategory) => {
  const response = await AxiosInstance.post("categories",newCategory);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const deleteCategory = async (id) => {
  const response = await AxiosInstance.delete(`categories/${id}`);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}
export const updateCategory = async (id) => {
  const response = await AxiosInstance.patch(`categories/${id}`);
  if(response !== undefined){
    if(response.status === 200 ){
      return (response.data);
    }
  }
}