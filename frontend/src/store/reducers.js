import {
  ADMIN_PANEL_CATEGORY_CHANGE,
  GET_ADMIN_PANEL_DATA_REQUEST,
  GET_ADMIN_PANEL_DATA_SUCCESS,
  GET_ADMIN_PANEL_DATA_FAILURE,
  UPDATE_ADMIN_PANEL_DATA_REQUEST,
  UPDATE_ADMIN_PANEL_DATA_SUCCESS,
  UPDATE_ADMIN_PANEL_DATA_FAILURE,
  DELETE_IMAGE_DATA_REQUEST,
  DELETE_IMAGE_DATA_SUCCESS,
  DELETE_IMAGE_DATA_FAILURE,
  ADD_NEW_IMAGE_REQUEST,
  ADD_NEW_IMAGE_SUCCESS,
  ADD_NEW_IMAGE_FAILURE,
} from "./actionTypes";

const defaultAdminPanelState = {
  title: null,
  description: null,
  images: [],
  category: "",
  isLoading: false,
  isError: null,
};
export const adminPanelReducer = (
  state = defaultAdminPanelState,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_PANEL_CATEGORY_CHANGE:
      return { ...state, isLoading: false, isError: null, category: payload };
    case GET_ADMIN_PANEL_DATA_REQUEST:
    case UPDATE_ADMIN_PANEL_DATA_REQUEST:
    case DELETE_IMAGE_DATA_REQUEST:
      case ADD_NEW_IMAGE_REQUEST: {
      return { ...state, isLoading: true, isError: null };
    }
    case GET_ADMIN_PANEL_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: null, ...payload };
    case UPDATE_ADMIN_PANEL_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: null, ...payload };
    case DELETE_IMAGE_DATA_SUCCESS: {
      const updatedImages = state.images.filter((item) => item.id !== payload);
      return {
        ...state,
        isLoading: false,
        isError: null,
        images: updatedImages,
      };
    }
    case ADD_NEW_IMAGE_SUCCESS:{
      state.images.push(payload)
      return {...state,isLoading:false,isError:null}
    }
    case GET_ADMIN_PANEL_DATA_FAILURE:
    case UPDATE_ADMIN_PANEL_DATA_FAILURE:
    case DELETE_IMAGE_DATA_FAILURE:
      case ADD_NEW_IMAGE_FAILURE:
      return { ...state, isLoading: false, isError: payload };
    default:
      return state;
  }
};
