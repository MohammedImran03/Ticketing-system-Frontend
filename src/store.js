import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Redux/Tickets/ticketSlice";
import loginReducer from "./Redux/auth/loginSlice";
const store = configureStore({
	reducer: {
        tickets: ticketsReducer,
        login:loginReducer,
    },
});

export default store;