import { useEffect } from "react";
import socket from "../sockets/socket";
import { useDispatch } from "react-redux";

export default function useSocket(workspaceId) {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.connect();

    socket.emit("joinWorkspace", workspaceId);

    socket.on("widget:created", (widget) => {
      dispatch({
        type: "ADD_WIDGET",

        payload: widget,
      });
    });

    socket.on("widget:deleted", (data) => {
      dispatch({
        type: "DELETE_WIDGET",

        payload: data.widgetId,
      });
    });

    socket.on("layout:updated", (layout) => {
      console.log(layout);
    });

    socket.on("filter:updated", (filter) => {
      console.log(filter);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
}
