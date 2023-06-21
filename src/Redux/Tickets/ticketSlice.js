import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    isLoading: false,
    error: "",
    // replyTicketError: "",
    searchTicketList: [],
    selectedTicket: {},
    // replyMsg: "",
  };

const ticketListSlice = createSlice({
 name:'ticketlist',
 initialState,
 reducers:{
    fetchTicketLoading:(state)=>{
        state.isLoading = true;
    },
    fetchTicketSuccess:(state,action)=>{
        state.tickets = action.payload;
        state.isLoading = false;
    },
    fetchTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      searchTickets: (state, { payload }) => {
        state.searchTicketList = state.tickets.filter((row) => {
          if (!payload) return row;
          return row.title.toLowerCase().includes(payload.toLowerCase());
        });
      },
      fetchSingleTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchSingleTicketSuccess: (state, { payload }) => {
        state.selectedTicket = payload;
        state.isLoading = false;
        state.error = "";
      },
      fetchSingleTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
 },
  });

  const { reducer, actions } = ticketListSlice;

  export const {
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    searchTickets,
    fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  } = actions;
  
  export default reducer;