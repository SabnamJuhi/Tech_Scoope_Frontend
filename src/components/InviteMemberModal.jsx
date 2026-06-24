import { useState } from "react";
import { useDispatch } from "react-redux";
import { inviteMember } from "../redux/actions/memberActions";

function InviteMemberModal() {

  const dispatch = useDispatch();

  const [email, setEmail] =
    useState("");

  const [role, setRole] =
    useState("VIEWER");

  const submitHandler = () => {

    dispatch(
      inviteMember(
        localStorage.getItem(
          "workspaceId"
        ),
        {
          email,
          role,
        }
      )
    );
  };

  return (
    <div className="bg-white p-5 rounded shadow">

      <h2 className="font-bold mb-4">
        Invite Member
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <select
        className="border p-2 w-full mb-3"
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      >
        <option value="ADMIN">
          ADMIN
        </option>

        <option value="ANALYST">
          ANALYST
        </option>

        <option value="VIEWER">
          VIEWER
        </option>

      </select>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={submitHandler}
      >
        Invite
      </button>

    </div>
  );
}

export default InviteMemberModal;