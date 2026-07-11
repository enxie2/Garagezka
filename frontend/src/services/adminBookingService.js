import api from "../api/api";

const adminBookingService = {

    async getAll() {

        try {

            const response = await api.get("/admin/bookings");

            return response.data.data;

        } catch (error) {

            console.error(
                "GET ADMIN BOOKINGS ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async confirm(id) {

        try {

            const response = await api.put(`/admin/bookings/${id}/confirm`);

            return response.data;

        } catch (error) {

            console.error(
                "CONFIRM BOOKING ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async complete(id) {

        try {

            const response = await api.put(`/admin/bookings/${id}/complete`);

            return response.data;

        } catch (error) {

            console.error(
                "COMPLETE BOOKING ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async cancel(id) {

        try {

            const response = await api.put(`/admin/bookings/${id}/cancel`);

            return response.data;

        } catch (error) {

            console.error(
                "CANCEL BOOKING ERROR:",
                error.response?.data
            );

            throw error;

        }

    }

};

export default adminBookingService;