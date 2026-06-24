





import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

function Register() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {

    e.preventDefault();

    await dispatch(registerUser(form));

    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded shadow w-96"
      >

        <h1 className="text-2xl font-bold mb-5">
          Register
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

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

        <button className="bg-green-600 text-white w-full p-2 rounded">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;