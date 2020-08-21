import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import Axios from "axios";

//get leads
export const getLeads = () => (dispatch) => {
  Axios.get("http://localhost:8000/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//add lead
export const addLead = (lead) => (dispatch) => {
  Axios.post("http://localhost:8000/api/leads/", lead)
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//delete leads
export const deleteLead = (id) => (dispatch) => {
  Axios.delete(`http://localhost:8000/api/leads/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
