



import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import { useNavigate, Link } from "react-router-dom";
import socket from "../sockets/socket";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   await dispatch(loginUser(form));

  //   navigate("/workspaces");
  // };
  const submitHandler = async (e) => {
  e.preventDefault();

  await dispatch(loginUser(form));

  socket.connect();

  navigate("/workspaces");
};

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded shadow w-96"
      >

        <h1 className="text-2xl font-bold mb-5">
          Login
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Login
        </button>

        <Link to="/register">
          Register
        </Link>

      </form>
    </div>
  );
}

export default Login;