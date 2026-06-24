

// import { useEffect, useState } from "react";
// import MainLayout from "../layouts/MainLayout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getWorkspaces,
//   createWorkspace,
// } from "../redux/actions/workspaceActions";
// import { useNavigate } from "react-router-dom";
// import WorkspaceSelector from "../components/WorkspaceSelector";

// function WorkspacePage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { workspaces } = useSelector((state) => state.workspaces);

//   const [name, setName] = useState("");

//   const selectWorkspace = (workspace) => {
//     localStorage.setItem("workspaceId", workspace.id);

//     navigate(`/workspace/${workspace.id}/dashboards`);
//   };

//   useEffect(() => {
//     dispatch(getWorkspaces());
//   }, [dispatch]);

//   const submitHandler = () => {
//     if (!name.trim()) return;

//     dispatch(
//       createWorkspace({
//         name,
//       }),
//     );

//     setName("");
//   };

//   return (
//     <MainLayout>
//       <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">
//         <div className="max-w-6xl mx-auto">
        
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-4xl font-bold text-slate-800">Workspaces</h1>
//             <p className="text-slate-500 mt-2">
//               Manage and organize your workspaces efficiently.
//             </p><br/>
//             <WorkspaceSelector /> 

//           </div>

//           {/* Create Workspace Card */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-200">
//             <h2 className="text-xl font-semibold text-slate-700 mb-5">
//               Create New Workspace
//             </h2>

//             <div className="flex flex-col md:flex-row gap-4">
//               <input
//                 type="text"
//                 placeholder="Enter workspace name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               />

//               <button
//                 onClick={submitHandler}
//                 className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition duration-300"
//               >
//                 Create Workspace
//               </button>
//             </div>
//           </div>

//           {/* Workspace List */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-slate-700">
//                 All Workspaces
//               </h2>

//               <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                 {workspaces?.length || 0} Workspace
//                 {workspaces?.length !== 1 ? "s" : ""}
//               </span>
//             </div>

//             {workspaces?.length > 0 ? (
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {workspaces.map((workspace) => (
//                   <div
//                     key={workspace.id}
//                     onClick={() => selectWorkspace(workspace)}
//                     className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-xl hover:border-blue-500 transition-all duration-300 cursor-pointer"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition">
//                           {workspace.name}
//                         </h3>

//                         <p className="text-sm text-slate-500 mt-2">
//                           Workspace ID: #{workspace.id}
//                         </p>
//                       </div>

//                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//                         <svg
//                           className="w-6 h-6 text-blue-600"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M3 7h18M3 12h18M3 17h18"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center py-16">
//                 <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4">
//                   <svg
//                     className="w-12 h-12 text-slate-400"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 7h16M4 12h16M4 17h16"
//                     />
//                   </svg>
//                 </div>

//                 <h3 className="text-xl font-semibold text-slate-700">
//                   No Workspaces Found
//                 </h3>

//                 <p className="text-slate-500 mt-2">
//                   Create your first workspace to get started.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }

// export default WorkspacePage;




import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  getWorkspaces,
  createWorkspace,
  setCurrentWorkspace,
} from "../redux/actions/workspaceActions";
import { useNavigate } from "react-router-dom";

function WorkspacePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { workspaces } = useSelector(
    (state) => state.workspaces
  );

  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getWorkspaces());
  }, [dispatch]);

  const submitHandler = () => {
    if (!name.trim()) return;

    dispatch(
      createWorkspace({
        name,
      })
    );

    setName("");
  };

  const selectWorkspace = (workspace) => {

    // Redux
    dispatch(setCurrentWorkspace(workspace));

    // LocalStorage
    localStorage.setItem(
      "workspaceId",
      workspace.id
    );

    localStorage.setItem(
      "role",
      workspace.WorkspaceMembers?.[0]?.role || "VIEWER"
    );

    console.log(
      "Workspace selected:",
      workspace.id
    );

    navigate(
      `/workspace/${workspace.id}/dashboards`
    );
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-800">
              Workspaces
            </h1>

            <p className="text-slate-500 mt-2">
              Manage and organize your workspaces efficiently.
            </p>
          </div>

          {/* Create Workspace */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-200">

            <h2 className="text-xl font-semibold text-slate-700 mb-5">
              Create New Workspace
            </h2>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Enter workspace name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={submitHandler}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
              >
                Create Workspace
              </button>

            </div>
          </div>

          {/* Workspace List */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-xl font-semibold text-slate-700">
                All Workspaces
              </h2>

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {workspaces?.length || 0} Workspace
                {workspaces?.length !== 1 ? "s" : ""}
              </span>

            </div>

            {workspaces?.length > 0 ? (

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {workspaces.map((workspace) => (

                  <div
                    key={workspace.id}
                    onClick={() => selectWorkspace(workspace)}
                    className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer"
                  >

                    <div className="flex justify-between items-center">

                      <div>

                        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600">
                          {workspace.name}
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                          Role :{" "}
                          {workspace.WorkspaceMembers?.[0]?.role}
                        </p>

                      </div>

                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">

                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 7h18M3 12h18M3 17h18"
                          />
                        </svg>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="text-center py-16">

                <h3 className="text-xl font-semibold text-slate-700">
                  No Workspaces Found
                </h3>

                <p className="text-slate-500 mt-2">
                  Create your first workspace to get started.
                </p>

              </div>

            )}

          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default WorkspacePage;