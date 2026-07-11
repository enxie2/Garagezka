import api from "../api/api";

const profileService = {

    async getProfile() {

        try {

            const response = await api.get("/user");

            return response.data.user;

        } catch (error) {

            console.error(
                "GET PROFILE ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async updateProfile(data) {

        try {

            const response = await api.put(
                "/user/profile",
                data
            );

            return response.data;

        } catch (error) {

            console.error(
                "UPDATE PROFILE ERROR:",
                error.response?.data
            );

            throw error;

        }

    },

    async changePassword(data) {

        try {

            const response = await api.put(
                "/user/password",
                data
            );

            return response.data;

        } catch (error) {

            console.error(
                "CHANGE PASSWORD ERROR:",
                error.response?.data
            );

            throw error;

        }

    }

};

export default profileService;