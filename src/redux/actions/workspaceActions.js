

export const getWorkspaces = () => async (dispatch) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/workspaces`, {
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    dispatch({
      type: "SET_WORKSPACES",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createWorkspace = (workspaceData) => async (dispatch) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/workspaces`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(workspaceData),
    });

    const data = await res.json();
    console.log(data);

    dispatch({
      type: "ADD_WORKSPACE",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

/* ✅ ADD THIS (missing function) */
export const setCurrentWorkspace = (workspace) => (dispatch) => {

  dispatch({
    type: "SET_CURRENT_WORKSPACE",
    payload: {
      workspace,
      role: workspace.WorkspaceMembers?.[0]?.role || "VIEWER",
    },
  });

};
