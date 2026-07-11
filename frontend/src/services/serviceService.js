import api from "../api/api";

const serviceService = {

    async getAll() {

        try {

            const response = await api.get("/services");

            return response.data;

        } catch (error) {

            console.error(
                "GET SERVICES ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async getById(id) {

        try {

            const response = await api.get(`/services/${id}`);

            return response.data;

        } catch (error) {

            console.error(
                "GET SERVICE ERROR:",
                error.response?.data
            );

            throw error;

        }

    }

};

export default serviceService;