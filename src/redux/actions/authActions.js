

import { apiFetch } from "../../api/fetchApi";



export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data.user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMe = () => async (dispatch) => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/auth/me",
      {
        credentials: "include",
      }
    );

    const data = await res.json();

    dispatch({
      type: "GET_ME",
      payload: data.user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => async (dispatch) => {
  await fetch(
    "http://localhost:5000/api/auth/logout",
    {
      method: "POST",
      credentials: "include",
    }
  );

  dispatch({
    type: "LOGOUT",
  });
};


export const getUsers = () => async (dispatch) => {

  const res = await fetch(
    "http://localhost:5000/api/auth",
    {
      credentials: "include",
    }
  );

  const data = await res.json();

  dispatch({
    type: "SET_USERS",
    payload: data.data,
  });

};