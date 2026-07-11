import api from "../api/api";

const vehicleService = {

    async getAll() {

        try {

            const response = await api.get("/vehicles");

            return response.data;

        } catch (error) {

            console.error(
                "GET VEHICLES ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async create(data) {

        try {

            const response = await api.post(
                "/vehicles",
                data
            );

            return response.data;

        } catch (error) {

            console.error(
                "CREATE VEHICLE ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async update(id, data) {

        try {

            const response = await api.put(
                `/vehicles/${id}`,
                data
            );

            return response.data;

        } catch (error) {

            console.error(
                "UPDATE VEHICLE ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async delete(id) {

        try {

            const response = await api.delete(
                `/vehicles/${id}`
            );

            return response.data;

        } catch (error) {

            console.error(
                "DELETE VEHICLE ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async setPrimary(id) {

        try {

            const response = await api.post(
                `/vehicles/${id}/set-primary`
            );

            return response.data;

        } catch (error) {

            console.error(
                "SET PRIMARY ERROR:",
                error.response?.data
            );

            throw error;

        }

    }

};

export default vehicleService;