import axios from "axios";
import { showToast } from "../components/toast";

const homeServices = {
  getHomeData: async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        showToast("Access token not found.");
        return;
      }
      const response = await axios.get(
        process.env.REACT_APP_API_HOME as string,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      return response.data.result;
    } catch (error) {
      showToast("Error occurred. Please try again.");
    }
  },
};

export default homeServices;
