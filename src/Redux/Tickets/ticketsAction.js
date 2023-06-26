import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  fetchuserTicketLoading,
  fetchuserticketlistSuccess,
  fetchuserTicketFail,
  fetchmentorTicketLoading,
  fetchmentorticketlistSuccess,
  fetchmentorTicketFail,
} from "./ticketSlice";

import { getAllTickets,getusersAllTickets,getSingleTicket } from "../../api/ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    console.log(result);
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fetchusersAllTickets = () => async (dispatch) => {
  dispatch(fetchuserTicketLoading());
  try {
    const result = await getusersAllTickets();
    console.log(result);
    result.data.result.length &&
      dispatch(fetchuserticketlistSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchuserTicketFail(error.message));
  }
};

export const filterSerachTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

//Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
     console.log(result);
    dispatch(
      fetchSingleTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};




