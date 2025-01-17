import apiClient from "@/apiClient";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../rootReducer";
import axios from "axios";
import { Dispatch } from "redux";

export const FETCH_USER_PROFILE_START = "FETCH_USER_PROFILE_START";
export const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS";
export const FETCH_USER_PROFILE_ERROR = "FETCH_USER_PROFILE_ERROR";

export const UPDATE_USER_PROFILE_START = "UPDATE_USER_PROFILE_START";
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
export const UPDATE_USER_PROFILE_FAILURE = "UPDATE_USER_PROFILE_FAILURE";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_ERROR";

export const UPDATE_USER_PHOTO_REQUEST = "UPDATE_USER_PHOTO_REQUEST";
export const UPDATE_USER_PHOTO_SUCCESS = "UPDATE_USER_PHOTO_SUCCESS";
export const UPDATE_USER_PHOTO_FAILURE = "UPDATE_USER_PHOTO_FAILURE";

interface FetchUseProfileStart {
  type: typeof FETCH_USER_PROFILE_START;
}

interface FetchUserProfileSuccess {
  type: typeof FETCH_USER_PROFILE_SUCCESS;
}

interface FetchUserProfileError {
  type: typeof FETCH_USER_PROFILE_ERROR;
}

interface UpdateUserProfileStart {
  type: typeof UPDATE_USER_PROFILE_START;
}

interface UpdateUserProfileSuccess {
  type: typeof UPDATE_USER_PROFILE_SUCCESS;
}

interface UpdateUserProfileFailure {
  type: typeof UPDATE_USER_PROFILE_FAILURE;
}

export type UserProfileActionTypes =
  | FetchUseProfileStart
  | FetchUserProfileSuccess
  | FetchUserProfileError;

export type UpdateProfileActionTypes =
  | UpdateUserProfileStart
  | UpdateUserProfileSuccess
  | UpdateUserProfileFailure;

export const fetchUserProfile =
  (userId: string) =>
  async (dispatch: ThunkDispatch<RootState, void, UserProfileActionTypes>) => {
    dispatch({ type: FETCH_USER_PROFILE_START });

    try {
      const response = await apiClient.get(`/user/${userId}`);
      dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: response.data });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido.";
      dispatch({
        type: FETCH_USER_PROFILE_ERROR,
        payload: errorMessage || "Error al cargar el perfil",
      });
    }
  };

export const updateUserProfile =
  (
    userId: string,
    userData: {
      name?: string;
      email?: string;
      password?: string;
      profilePhoto?: string;
    }
  ) =>
  async (
    dispatch: ThunkDispatch<RootState, void, UpdateProfileActionTypes>
  ) => {
    dispatch({ type: UPDATE_USER_PROFILE_START });

    try {
      console.log("Datos para actualizar el perfil:", userData);

      const response = await apiClient.put(`/user/${userId}`, userData);
      console.log(
        "Respuesta del servidor al actualizar perfil:",
        response.data
      );

      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: response.data });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido.";
      dispatch({
        type: UPDATE_USER_PROFILE_FAILURE,
        payload: errorMessage || "Error al actualizar el perfil",
      });
    }
  };

export const updateUserPhoto =
  (userId: string, photoUrl: string) => async (dispatch: Dispatch) => {
    dispatch({ type: UPDATE_USER_PHOTO_REQUEST });

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/user/${userId}`,
        { photo: photoUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({ type: UPDATE_USER_PHOTO_SUCCESS, payload: response.data });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error updating user photo:", error);
        dispatch({ type: UPDATE_USER_PHOTO_FAILURE, payload: error.message });
      } else {
        console.error("Unexpected error updating user photo:", error);
        dispatch({
          type: UPDATE_USER_PHOTO_FAILURE,
          payload: "An unexpected error occurred.",
        });
      }
    }
  };
