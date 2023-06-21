import axios from "axios";
import { API } from "../global";

const allticketsUrl= API+ "/tickets/alltickets";
const newticketUlr = API + "/tickets/addnewticket";
const userTicketUrl = API + "/tickets/usertickets";
const specificticketUrl= API + "/tickets/gettickets/";
const statusassignUrl= API + "/tickets/assign-ticket/";
const replyticketUrl= API + "/tickets/reply-ticket/:_id";
const closeticketUrl=API+"/tickets/close-ticket/:_id";


export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(allticketsUrl, {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1lcm4ubWVudG9yQGdtYWlsLmNvbSIsImlhdCI6MTY4NzMzMjg1OCwiZXhwIjoxNjg3MzMzNzU4fQ.Pn9AxCz6r64Vlxac5iG2Fmjl4oOQ5D8AUsTkhGvgL4U",
          },
        }); 
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const getusersAllTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(userTicketUrl, {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1lcm4ubWVudG9yQGdtYWlsLmNvbSIsImlhdCI6MTY4NzMzMjg1OCwiZXhwIjoxNjg3MzMzNzU4fQ.Pn9AxCz6r64Vlxac5iG2Fmjl4oOQ5D8AUsTkhGvgL4U",
          },
        }); 
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const getSingleTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(specificticketUrl + _id, {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1lcm4ubWVudG9yQGdtYWlsLmNvbSIsImlhdCI6MTY4NzMzMjg1OCwiZXhwIjoxNjg3MzMzNzU4fQ.Pn9AxCz6r64Vlxac5iG2Fmjl4oOQ5D8AUsTkhGvgL4U",
          },
        });
  
        resolve(result);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  };

  export const getSingletoassignTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(statusassignUrl + _id, {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1lcm4ubWVudG9yQGdtYWlsLmNvbSIsImlhdCI6MTY4NzMzMjg1OCwiZXhwIjoxNjg3MzMzNzU4fQ.Pn9AxCz6r64Vlxac5iG2Fmjl4oOQ5D8AUsTkhGvgL4U",
          },
        });
  
        resolve(result);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  };