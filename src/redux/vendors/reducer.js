import * as actionTypes from "../actionTypes";

const InitialState = {
  vendorsList: [],
  vendorsListLoading: false,
  filterVendros: {
    page: 0,
    page_size: 10,
    lat: 35.754,
    long: 51.328,
  },
};

const vendors = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_VENDORS_LIST: {
      return {
        ...state,
        vendorsListLoading: true,
      };
    }
    case actionTypes.GET_VENDORS_LIST_SUCCESS: {
      return {
        ...state,
        vendorsList: [...state.vendorsList, ...action.payload.data],
        vendorsListLoading: false,
      };
    }
    case actionTypes.GET_VENDORS_LIST_FAILURE: {
      return { ...state, vendorsListLoading: false };
    }
    case actionTypes.FILTER_VENDORS_LIST: {
      return { ...state, filterVendros: action.payload.filterVendros };
    }

    default: {
      return state;
    }
  }
};

export default vendors;
