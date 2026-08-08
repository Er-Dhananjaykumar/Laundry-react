import api from "./api";

const BOOKING_BASE_URL = import.meta.env.VITE_BOOKING_API_URL || "/bookings";

export const bookingService = {
  getAll: async () => {
    const response = await api.get(BOOKING_BASE_URL);
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`${BOOKING_BASE_URL}/${id}`);
    return response.data;
  },
  create: async (booking) => {
    const response = await api.post(BOOKING_BASE_URL, booking);
    return response.data;
  },
  update: async (id, booking) => {
    const response = await api.put(`${BOOKING_BASE_URL}/${id}`, booking);
    return response.data;
  },
  remove: async (id) => {
    const response = await api.delete(`${BOOKING_BASE_URL}/${id}`);
    return response.data;
  }
};
