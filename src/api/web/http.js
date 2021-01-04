import axios from "axios";

export default (() => ({
    base: () => {
        let token = "";
        if (sessionStorage.getItem("token")) {
            token = sessionStorage.getItem("token") || "";
        }
        return axios.create({
            baseURL: "",
            headers: {
                Authorization: `Bearer ${token}`,
                "x-Api-Key": process.env.apiKey || token
            }
        });
    }
}))();