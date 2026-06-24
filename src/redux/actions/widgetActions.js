import { apiFetch } from "../../api/fetchApi";

// GET WIDGETS
export const getWidgets = (dashboardId) => async (dispatch) => {
  try {
    if (!dashboardId) return;

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/widgets/${dashboardId}`,
      { credentials: "include" }
    );

    const data = await res.json();

    dispatch({
      type: "SET_WIDGETS",
      payload: Array.isArray(data.data) ? data.data : [],
    });
  } catch (err) {
    console.log("getWidgets error:", err);
  }
};

// CREATE WIDGET (FIXED)
export const createWidget = (payload) => async (dispatch) => {
  try {
    if (!payload?.workspaceId) {
      console.error("workspaceId missing");
      return;
    }

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/widgets`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    dispatch({
      type: "ADD_WIDGET",
      payload: data.data,
    });
  } catch (err) {
    console.log("createWidget error:", err);
  }
};

// // DELETE WIDGET
// export const deleteWidget = (widgetId) => async (dispatch) => {
//   await fetch(`http://localhost:5000/api/widgets/${widgetId}`, {
//     method: "DELETE",
//     credentials: "include",
//   });

//   dispatch({
//     type: "DELETE_WIDGET",
//     payload: widgetId,
//   });
// };
export const deleteWidget =
  (widgetId, workspaceId) => async (dispatch) => {

    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/widgets/${widgetId}`,
      {
        method: "DELETE",
        credentials: "include",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          workspaceId
        })
      }
    );

    dispatch({
      type: "DELETE_WIDGET",
      payload: widgetId,
    });
};

// // PIN WIDGET
// export const pinWidget = (widgetId) => async (dispatch) => {
//   const res = await fetch(
//     `http://localhost:5000/api/widgets/${widgetId}/pin`,
//     {
//       method: "PATCH",
//       credentials: "include",
//     }
//   );

//   const data = await res.json();

//   dispatch({
//     type: "PIN_WIDGET",
//     payload: data.data,
//   });
// };
export const pinWidget =
(widgetId)=>async(dispatch)=>{

  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/widgets/${widgetId}/pin`,
    {
      method:"PATCH",
      credentials:"include"
    }
  );

  const data = await res.json();

  dispatch({
    type:"PIN_WIDGET",
    payload:data.data
  });

};

// // UPDATE LAYOUT
// export const updateLayout = (body) => async () => {
//   await fetch("http://localhost:5000/api/widgets/layout", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//     body: JSON.stringify(body),
//   });
// };

export const updateLayout = (body) => async () => {
  try {
    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/widgets/layout`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      }
    );
  } catch (err) {
    console.log(err);
  }
};