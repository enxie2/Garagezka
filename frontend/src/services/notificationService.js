import api from "../api/api";

const notificationService = {

    async getAll() {

        try {

            const response = await api.get("/notifications");

            return response.data;

        } catch (error) {

            console.error(
                "GET NOTIFICATIONS ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async markAsRead(id) {

        try {

            const response = await api.put(`/notifications/${id}`);

            return response.data;

        } catch (error) {

            console.error(
                "MARK NOTIFICATION READ ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async delete(id) {

        try {

            const response = await api.delete(`/notifications/${id}`);

            return response.data;

        } catch (error) {

            console.error(
                "DELETE NOTIFICATION ERROR:",
                error.response?.data
            );

            throw error;

        }

    }

};

export default notificationService;