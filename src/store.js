import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Redux/Tickets/ticketSlice";
import loginReducer from "./Pages/auth/loginSlice";
import userReducer from "./Redux/auth/userSlice";
import newticketReducer from "./Pages/Createquery/addTicketSlicer";
const store = configureStore({
	reducer: {
        tickets: ticketsReducer,
        login:loginReducer,
        user: userReducer,
        openticket:newticketReducer,
    },
});

export default store;