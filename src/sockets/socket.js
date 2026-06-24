// import { io } from "socket.io-client";

// const socket = io(
// "http://localhost:5000",
// {
// autoConnect:false,
// withCredentials:true
// }
// );

// export default socket;


import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
    autoConnect: false,
  //  transports: ["websocket", "polling"],
});

socket.on("connect", () => {
  console.log("🟢 Socket Connected:", socket.id);
});

socket.on("disconnect", () => {
  console.log("🔴 Socket Disconnected");
});

export default socket;