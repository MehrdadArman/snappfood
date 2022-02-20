import * as actionTypes from "../actionTypes";

// ** get cars action
export const getVendorsList = (params) => ({
  type: actionTypes.GET_VENDORS_LIST,
  payload: {
    params: params,
  },
});

export const getVendorsListSuccess = (data) => ({
  type: actionTypes.GET_VENDORS_LIST_SUCCESS,
  payload: {
    data,
  },
});

export const getVendorsListFailure = () => ({
  type: actionTypes.GET_VENDORS_LIST_FAILURE,
});

// ** filter vendros list
export const filterVendrosList = (filterVendros) => ({
  type: actionTypes.FILTER_VENDORS_LIST,
  payload: { filterVendros },
});
