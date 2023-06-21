import axios from "axios";
import { API } from "../global";

const usersigninapi = API + "/users/newuser";
const userloginapi = API + "/users/login";
const userprofileapi = API + "/users";
const userrefreshapi = API + "/tokens/";
const userlogoutapi = API + "/users/logout";

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(userloginapi, frmData);
      resolve(res.data);
      if (res.data.status === "success") {
        console.log(res.data);
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "QueryTicketingSystem",
          JSON.stringify({ refreshJWT: res.data.RefreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};
