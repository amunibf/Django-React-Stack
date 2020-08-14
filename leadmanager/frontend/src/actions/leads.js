import { GET_LEADS } from "../actions";
import axios from "axios";

//get leads
export const getLeads = () => (dispatch) => {
  axios.get("/api/leads/").then({});
};
