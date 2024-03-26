import { notification } from "antd";
import { Endpoints } from "../../network/Endpoints";
import axios from "axios";

export async function fetchAllUsers() {
    const token = localStorage.getItem("token");
    try {
        const response = await axios({
            url: Endpoints.users,
            method: "GET",
            headers: {
                Authorization: `Bearer: ${token}`
            }
        });
        const users = response.data.result;
        return { success: true, data: users };
    }
    catch (error) {
        notification.error({
            message: "Failed to fetch users",
            description: error.message
        })
        return { success: false };
    }
}