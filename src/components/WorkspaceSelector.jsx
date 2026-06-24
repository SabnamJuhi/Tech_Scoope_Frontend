






import { useDispatch, useSelector } from "react-redux";
import { setCurrentWorkspace } from "../redux/actions/workspaceActions";

function WorkspaceSelector() {
  const dispatch = useDispatch();

  const workspaces =
    useSelector((state) => state.workspaces.workspaces) || [];
    

  const handleChange = (e) => {
    const workspaceId = e.target.value;

    const selected = workspaces.find(
      (w) => w.id === workspaceId || w._id === workspaceId
    );

    console.log(selected);
    if (!selected) {
      console.error("Workspace not found");
      return;
    }

    // Redux
    dispatch(setCurrentWorkspace(selected));

    // ONLY STORE WORKSPACE
    localStorage.setItem("workspaceId", selected.id || selected._id);

    console.log("Workspace selected:", workspaceId);
  };

  return (
    <select onChange={handleChange} className="border p-2 rounded w-full">
      <option value="">Select Workspace</option>

      {workspaces.map((ws) => (
        <option key={ws.id || ws._id} value={ws.id || ws._id}>
          {ws.name}
        </option>
      ))}
    </select>
  );
}

export default WorkspaceSelector;


// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentWorkspace } from "../redux/actions/workspaceActions";

// function WorkspaceSelector() {

//   const dispatch = useDispatch();

//   const workspaces =
//     useSelector(state => state.workspaces.workspaces);

//   const handleChange = (e) => {

//     const workspaceId = e.target.value;

//     const selected = workspaces.find(
//       ws => ws.id === workspaceId
//     );

//     if (!selected) return;

//     dispatch(setCurrentWorkspace(selected));

//     localStorage.setItem(
//       "workspaceId",
//       selected.id
//     );

//     localStorage.setItem(
//       "role",
//       selected.WorkspaceMember?.role || "VIEWER"
//     );
//   };

//   return (
//     <select
//       className="border p-2 rounded"
//       onChange={handleChange}
//     >

//       <option>Select Workspace</option>

//       {
//         workspaces.map((ws) => (

//           <option
//             key={ws.id}
//             value={ws.id}
//           >
//             {ws.name}
//           </option>

//         ))
//       }

//     </select>
//   );
// }

// export default WorkspaceSelector;