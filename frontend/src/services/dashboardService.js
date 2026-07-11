import api from "../api/api";

const dashboardService = {

    async getDashboard() {

        try {

            const response = await api.get("/dashboard");

            return response.data;

        } catch (error) {

            console.error(
                "GET DASHBOARD ERROR:",
                error.response?.data
            );

            throw error;

        }

    }

};

export default dashboardService;