export const getMembers = (workspaceId) => async (dispatch) => {
  try {
    if (!workspaceId) return;

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/members/${workspaceId}`,
      {
        credentials: "include",
      },
    );

    const data = await res.json();

    dispatch({
      type: "SET_MEMBERS",
      payload: data.data || [],
    });
  } catch (err) {
    console.log(err);
  }
};
export const inviteMember = (workspaceId, body) => async (dispatch) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/members/${workspaceId}/invite`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    },
  );

  const data = await res.json();
  console.log(data);

  dispatch({
    type: "ADD_MEMBER",
    payload: data.data,
  });
};

export const removeMember = (workspaceId, memberId) => async (dispatch) => {
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/members/${workspaceId}/${memberId}`, {
    method: "DELETE",
    credentials: "include",
  });

  dispatch({
    type: "REMOVE_MEMBER",
    payload: memberId,
  });
};

export const changeRole = (workspaceId, memberId, role) => async (dispatch) => {
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/members/${workspaceId}/${memberId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ role }),
  });

  dispatch(getMembers(workspaceId));
};


