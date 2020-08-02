import server from "../config/apis/jsonServer";
import { GENERATE_GENRE_MASTERLIST, PULL_GENRE_MASTERLIST } from "./variables";

import { generateGenreMasterList } from "../config/utilities";

export const reduxGenerateGenreMasterList = (database) => {
  const generatedList = generateGenreMasterList(database);
  return async (dispatch) => {
    const response = await server.post("/config", generatedList);
    dispatch({ type: GENERATE_GENRE_MASTERLIST, payload: response.data });
  };
};

export const pullGenreMasterlist = () => async (dispatch) => {
  const response = await server.get("/config");

  dispatch({ type: PULL_GENRE_MASTERLIST, payload: response.data });
};
