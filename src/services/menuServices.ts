import axios from "axios";
import { showToast } from "../components/toast";

const menuServices = {
  getMenuData: async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        showToast("Access Token Not Found. Please Login Again.");
        return;
      }
      const response = await axios.post(
        process.env.REACT_APP_API_MENU as string,
        { show_all: 1 },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );
      return response.data.result.categories;
    } catch (error) {
      showToast("Error occurred. Please try again.");
    }
    console.log(process.env.REACT_APP_API_MENU, "pppp");
  },
};

export default menuServices;
