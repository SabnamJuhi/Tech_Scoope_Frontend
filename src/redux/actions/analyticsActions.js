export const getAnalytics =
  (page = 1, limit = 10) =>
  async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/analytics/sales?page=${page}&limit=${limit}`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      dispatch({
        type: "SET_ANALYTICS",
        payload: data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };