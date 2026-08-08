import api from "./api";

const CUSTOMER_BASE_URL = import.meta.env.VITE_CUSTOMER_API_URL || "/customers";

export const customerService = {
  getAll: async () => {
    const response = await api.get(CUSTOMER_BASE_URL);
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`${CUSTOMER_BASE_URL}/${id}`);
    return response.data;
  },
  create: async (customer) => {
    const response = await api.post(CUSTOMER_BASE_URL, customer);
    return response.data;
  },
  update: async (id, customer) => {
    const response = await api.put(`${CUSTOMER_BASE_URL}/${id}`, customer);
    return response.data;
  },
  remove: async (id) => {
    const response = await api.delete(`${CUSTOMER_BASE_URL}/${id}`);
    return response.data;
  }
};
