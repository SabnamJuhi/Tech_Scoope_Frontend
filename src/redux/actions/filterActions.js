export const updateFilter =
  (body) => async (dispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/filter/update`,
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
        type: "SET_FILTER",
        payload: data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };