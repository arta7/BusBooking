import { DATA_DETAILES_TYPE } from "../actiontypes";

export const get_data_action = (data) => dispatch => {
      dispatch({ type: DATA_DETAILES_TYPE, data: data });
}