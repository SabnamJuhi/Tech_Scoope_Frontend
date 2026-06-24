// import { useEffect } from "react";
// import MainLayout from "../layouts/MainLayout";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getDashboards,
//   getDashboardsByWorkspace,
// } from "../redux/actions/dashboardActions";
// import { useNavigate } from "react-router-dom";

// function DashboardListPage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const dashboards = useSelector((state) => state.dashboards.dashboards) || [];

//   console.log("dashboards =", dashboards);
//   console.log(typeof dashboards);

//   const workspaceId = localStorage.getItem("workspaceId");

//   useEffect(() => {
//     if (workspaceId) {
//       dispatch(getDashboardsByWorkspace(workspaceId));
//     }
//   }, [workspaceId]);

//   const openDashboard = (dashboard) => {
//     localStorage.setItem("dashboardId", dashboard.id);

//     navigate("/dashboard");
//   };

//   return (
//     <MainLayout>
//       <div className="grid md:grid-cols-3 gap-5">
//         {dashboards.map((dashboard) => (
//           <div
//             key={dashboard.id}
//             onClick={() => openDashboard(dashboard)}
//             className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl"
//           >
//             <h2 className="text-xl font-bold">{dashboard.name}</h2>
//           </div>
//         ))}
//       </div>
//     </MainLayout>
//   );
// }

// export default DashboardListPage;






import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboardsByWorkspace,
  createDashboard,
  deleteDashboard,
} from "../redux/actions/dashboardActions";
import { useNavigate } from "react-router-dom";

function DashboardListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dashboards =
    useSelector((state) => state.dashboards.dashboards) || [];

  const role =
    useSelector((state) => state.workspaces.role);

  const workspaceId =
    localStorage.getItem("workspaceId");

  const [name, setName] = useState("");

  useEffect(() => {
    if (workspaceId) {
      dispatch(getDashboardsByWorkspace(workspaceId));
    }
  }, [dispatch, workspaceId]);

  const openDashboard = (dashboard) => {
    localStorage.setItem("dashboardId", dashboard.id);

    navigate("/dashboard");
  };

  const handleCreate = () => {
    if (!name.trim()) return;

    dispatch(
      createDashboard(workspaceId, {
        name,
      })
    );

    setName("");
  };

  return (
    <MainLayout>
      <div className="p-6">

        {/* Create Dashboard */}
        {(role === "ADMIN" || role === "ANALYST") && (
          <div className="bg-white p-6 rounded-xl shadow mb-8">

            <h1 className="text-2xl font-bold mb-5">
              Create Dashboard
            </h1>

            <div className="flex gap-4">

              <input
                className="flex-1 border rounded-lg p-3"
                placeholder="Dashboard Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <button
                onClick={handleCreate}
                className="bg-blue-600 text-white px-6 rounded-lg"
              >
                Create
              </button>

            </div>

          </div>
        )}

        {/* Dashboard List */}

        <div className="grid md:grid-cols-3 gap-5">

          {dashboards.map((dashboard) => (

            <div
              key={dashboard.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >

              <div
                className="cursor-pointer"
                onClick={() => openDashboard(dashboard)}
              >
                <h2 className="text-xl font-bold">
                  {dashboard.name}
                </h2>
              </div>

              {(role === "ADMIN" || role === "ANALYST") && (

                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    dispatch(
                      deleteDashboard(
                        dashboard.id,
                        workspaceId
                      )
                    )
                  }
                >
                  Delete
                </button>

              )}

            </div>

          ))}

        </div>

      </div>
    </MainLayout>
  );
}

export default DashboardListPage;