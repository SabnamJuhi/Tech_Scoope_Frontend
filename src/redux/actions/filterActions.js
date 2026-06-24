export const updateFilter =
  (body) => async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/filter/update",
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