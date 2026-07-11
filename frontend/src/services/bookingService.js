import api from "../api/api";

const bookingService = {
    async getAll() {
        try {
            const response = await api.get("/bookings");
            return response.data;
        } catch (error) {
            console.error("GET BOOKINGS ERROR:", error.response?.data);
            throw error;
        }
    },

    async getById(id) {
        try {
            const response = await api.get(`/bookings/${id}`);
            return response.data;
        } catch (error) {
            console.error("GET BOOKING ERROR:", error.response?.data);
            throw error;
        }
    },

    async create(data) {
        try {
            const response = await api.post("/bookings", data);
            return response.data;
        } catch (error) {
            console.error("CREATE BOOKING ERROR:", error.response?.data);
            throw error;
        }
    },

    async update(id, data) {
        try {
            const response = await api.put(`/bookings/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("UPDATE BOOKING ERROR:", error.response?.data);
            throw error;
        }
    },

    async delete(id) {
        try {
            const response = await api.delete(`/bookings/${id}`);
            return response.data;
        } catch (error) {
            console.error("DELETE BOOKING ERROR:", error.response?.data);
            throw error;
        }
    }
};

export default bookingService;