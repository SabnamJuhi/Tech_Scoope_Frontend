

export const getDashboards = () => async (dispatch) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/dashboards`,
      {
        credentials: "include",
      }
    );

    const data = await res.json();

    dispatch({
      type: "SET_DASHBOARDS",
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createDashboard =
  (workspaceId, body) => async (dispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/dashboards/workspace/${workspaceId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();

      dispatch({
        type: "ADD_DASHBOARD",
        payload: data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const deleteDashboard =
  (dashboardId, workspaceId) =>
  async (dispatch) => {
    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/dashboards/${dashboardId}/${workspaceId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    dispatch({
      type: "DELETE_DASHBOARD",
      payload: dashboardId,
    });
  };

  export const getDashboardsByWorkspace =
  (workspaceId) => async (dispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/dashboards/workspace/${workspaceId}`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      dispatch({
        type: "GET_DASHBOARDS_SUCCESS",
        payload: data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };