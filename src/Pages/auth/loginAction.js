import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { userLogin } from "../../api/userApi";
import { message } from "antd";

export const accessusertologin = (values) => async (dispatch) => {
    dispatch(loginPending());
    try {
      const isAuth = await userLogin(values);
      // console.log(isAuth.message);
      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      if(isAuth.status==="success"){
        dispatch(loginSuccess());
        message.success(`${isAuth.message} 😊`);
        window.location.href="/dashboard";
        // dispatch(getUserProfile());
        // setTimeout(() => {
        //     window.location.href="/dashboard";
        // }, 1000);
      } 
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };



