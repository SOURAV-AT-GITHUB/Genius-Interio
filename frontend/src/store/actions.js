import axios from "axios";
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

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const getAdminPanelDataRequest = () => {
  return { type: GET_ADMIN_PANEL_DATA_REQUEST };
};
const getAdminPanelDataSuccess = (data) => {
  return { type: GET_ADMIN_PANEL_DATA_SUCCESS, payload: data };
};
const getAdminPanelDataFailure = (data) => {
  return { type: GET_ADMIN_PANEL_DATA_FAILURE, payload: data };
};
const updateAdminPanelDataRequest = () => {
  return { type: UPDATE_ADMIN_PANEL_DATA_REQUEST };
};
const updateAdminPanelDataSuccess = (data) => {
  return { type: UPDATE_ADMIN_PANEL_DATA_SUCCESS, payload: data };
};
const updateAdminPanelDataFailure = (data) => {
  return { type: UPDATE_ADMIN_PANEL_DATA_FAILURE, payload: data };
};

const deleteImageRequest = () => {
  return { type: DELETE_IMAGE_DATA_REQUEST };
};
const deleteImageSuccess = (data) => {
  return { type: DELETE_IMAGE_DATA_SUCCESS, payload: data };
};
const deleteImageFailure = (data) => {
  return { type: DELETE_IMAGE_DATA_FAILURE, payload: data };
};

const addNewImageRequest = () => {
  return { type: ADD_NEW_IMAGE_REQUEST };
};
const addNewImageSuccess = (data) => {
  return { type: ADD_NEW_IMAGE_SUCCESS, payload: data };
};
const addNewImageFailure = (data) => {
  return { type: ADD_NEW_IMAGE_FAILURE, payload: data };
};

export const updateAdminPanelCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: ADMIN_PANEL_CATEGORY_CHANGE, payload: category });
  };
};
export const getAdminPanelDataAction = ({ category = null, openSnackbar }) => {
  return async (dispatch) => {
    dispatch(getAdminPanelDataRequest());
    try {
      const response = await axios.get(`${BACKEND_URL}/images/${category}`);
      dispatch(getAdminPanelDataSuccess(response.data.data));
      openSnackbar("Data Loaded.", "success");
    } catch (error) {
      dispatch(
        getAdminPanelDataFailure(
          error.response?.data.message || "Please check you network connection."
        )
      );
      console.log(error);
      openSnackbar(
        error.response?.data.message || "Please check your network connection.",
        "error"
      );
    }
  };
};
export const updateTitleDescription = ({
  newData = {},
  category,
  openSnackbar,
  resetHeadingEditorModal,
}) => {
  return async (dispatch) => {
    dispatch(updateAdminPanelDataRequest());
    try {
      const response = await axios.patch(
        `${BACKEND_URL}/images/update-title-desc/${category}`,
        newData
      );
      dispatch(updateAdminPanelDataSuccess(newData));
      openSnackbar(response.data.message, "success");
      resetHeadingEditorModal();
    } catch (error) {
      dispatch(
        updateAdminPanelDataFailure(
          error.response?.data.message || "No internet connection"
        )
      );
      openSnackbar(
        error.response?.data.message || "Please check you network connection",
        "error"
      );
    }
  };
};
export const deleteImage = ({ category, id, openSnackbar,resetImageDeleteModal }) => {
  return async (dispatch) => {
    dispatch(deleteImageRequest());
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/images/${category}/${id}`
      );
      dispatch(deleteImageSuccess(id));
      openSnackbar(response.data.message, "success");
      resetImageDeleteModal()
    } catch (error) {
      dispatch(
        deleteImageFailure(
          error.response?.data.message ||
            "Please check your network connection.",
          "error"
        )
      );
      openSnackbar(
        error.response?.data.message || "Please check you network connection",
        "error"
      );
    }
  };
};
export const addNewImage = ({ title, size = null, image,category, openSnackbar,resetAddNewImageModal }) => {
  return async (dispatch) => {
    dispatch(addNewImageRequest());
    try {
      const formData = new FormData()
      formData.append("title",title)
     if(size) formData.append("size",size)
      formData.append('file',image)
    const response = await axios.post(`${BACKEND_URL}/images/${category}`,formData)

    dispatch(addNewImageSuccess(response.data.data))
    openSnackbar(response.data.message,'success')
    resetAddNewImageModal()
    } catch (error) {
      dispatch(addNewImageFailure(error.response?.data.message || "Something went wrong"))
      openSnackbar(error.response?.data.message || "Something went wrong",'error')
    }
  };
};
