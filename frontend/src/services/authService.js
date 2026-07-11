import api from "../api/api";

const authService = {

    async login(email, password) {

        try {

            const response = await api.post("/login", {
                email,
                password,
            });

            return response.data;

        } catch (error) {

            console.error("LOGIN ERROR:", error.response?.data);

            throw error;

        }

    },

    async register(data) {

        try {

            const response = await api.post("/register", data);

            return response.data;

        } catch (error) {

            console.error("REGISTER ERROR:", error.response?.data);

            throw error;

        }

    },

    async logout() {

        try {

            const response = await api.post("/logout");

            return response.data;

        } catch (error) {

            console.error("LOGOUT ERROR:", error.response?.data);

            throw error;

        }

    },

    async getUser() {

        try {

            const response = await api.get("/user");

            return response.data;

        } catch (error) {

            console.error("GET USER ERROR:", error.response?.data);

            throw error;

        }

    }

};

export default authService;