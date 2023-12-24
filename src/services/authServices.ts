import axios from "axios";
import { showToast } from "../components/toast";

const authService = {
  login: async (username: string, password: string) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_AUTH as string,
        {
          grant_type: process.env.REACT_APP_GRANT_TYPE,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          username,
          password,
        }
      );
      const { token_type, access_token } = response.data;
      localStorage.setItem("access_token", `${token_type} ${access_token}`);
      return response.data;
    } catch (error) {
      showToast("Error occurred. Please try again.");
    }
  },
};

export default authService;
