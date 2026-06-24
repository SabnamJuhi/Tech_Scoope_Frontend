// import { useState } from "react";

// function AddWidgetModal({ onCreate }) {
//   const [title, setTitle] = useState("");
//   const [type, setType] = useState("LINE_CHART");

//   const handleSubmit = () => {
//     onCreate({
//       title,
//       type,
//     });
//   };

//   return (
//     <div className="bg-white p-5 rounded shadow">
//       <h2 className="text-xl font-bold mb-5">Add Widget</h2>

//       <input
//         className="border p-2 w-full mb-3"
//         placeholder="Widget title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <select
//         className="border p-2 w-full mb-5"
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//       >
//         <option value="LINE_CHART">Line Chart</option>

//         <option value="BAR_CHART">Bar Chart</option>

//         <option value="KPI_CARD">KPI Card</option>

//         <option value="TABLE">Table</option>
//       </select>

//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         onClick={handleSubmit}
//       >
//         Create
//       </button>
//     </div>
//   );
// }

// export default AddWidgetModal;









// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createWidget } from "../redux/actions/widgetActions";

// function AddWidgetModal() {

//   const dispatch = useDispatch();

//   const [type, setType] =
//     useState("LINE_CHART");

//   const [title, setTitle] =
//     useState("");

// //   const submitHandler = () => {

// //     dispatch(
// //       createWidget({
// //         dashboardId:
// //           localStorage.getItem(
// //             "dashboardId"
// //           ),

// //         workspaceId:
// //           localStorage.getItem(
// //             "workspaceId"
// //           ),

// //         title,
// //         type,
// //       })
// //     );
// //   };

// const submitHandler = () => {
//   dispatch(
//     createWidget(
//       localStorage.getItem("workspaceId"),
//       {
//         dashboardId: localStorage.getItem("dashboardId"),
//         title,
//         type,
//       }
//     )
//   );
// };
//   return (
//     <div className="bg-white p-5 rounded shadow">

//       <h2 className="font-bold mb-4">
//         Add Widget
//       </h2>

//       <input
//         className="border p-2 w-full mb-3"
//         placeholder="Title"
//         value={title}
//         onChange={(e) =>
//           setTitle(e.target.value)
//         }
//       />

//       <select
//         className="border p-2 w-full mb-3"
//         value={type}
//         onChange={(e) =>
//           setType(e.target.value)
//         }
//       >
//         <option value="LINE_CHART">
//           Line Chart
//         </option>

//         <option value="BAR_CHART">
//           Bar Chart
//         </option>

//         <option value="KPI_CARD">
//           KPI Card
//         </option>

//         <option value="TABLE">
//           Table
//         </option>

//       </select>

//       <button
//         className="bg-green-600 text-white px-4 py-2 rounded"
//         onClick={submitHandler}
//       >
//         Add
//       </button>

//     </div>
//   );
// }

// export default AddWidgetModal;





// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createWidget } from "../redux/actions/widgetActions";

// function AddWidgetModal() {
//   const dispatch = useDispatch();

//   const [type, setType] = useState("LINE_CHART");
//   const [title, setTitle] = useState("");

//   const submitHandler = () => {
//     const workspaceId = localStorage.getItem("workspaceId");
//     const dashboardId = localStorage.getItem("dashboardId");

//     if (!workspaceId || !dashboardId) {
//       console.error("Missing workspaceId or dashboardId");
//       return;
//     }

//     if (!title.trim()) {
//       console.error("Title is required");
//       return;
//     }

//     dispatch(
//       createWidget({
//         workspaceId,
//         dashboardId,
//         title,
//         type,
//       })
//     );
//   };

//   return (
//     <div className="bg-white p-5 rounded shadow">
//       <h2 className="font-bold mb-4">Add Widget</h2>

//       <input
//         className="border p-2 w-full mb-3"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <select
//         className="border p-2 w-full mb-3"
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//       >
//         <option value="LINE_CHART">Line Chart</option>
//         <option value="BAR_CHART">Bar Chart</option>
//         <option value="KPI_CARD">KPI Card</option>
//         <option value="TABLE">Table</option>
//       </select>

//       <button
//         className="bg-green-600 text-white px-4 py-2 rounded"
//         onClick={submitHandler}
//       >
//         Add
//       </button>
//     </div>
//   );
// }

// export default AddWidgetModal;




import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWidget } from "../redux/actions/widgetActions";

function AddWidgetModal() {
  const dispatch = useDispatch();

  const [type, setType] = useState("LINE_CHART");
  const [title, setTitle] = useState("");

  const submitHandler = () => {
    const workspaceId = localStorage.getItem("workspaceId");
    const dashboardId = localStorage.getItem("dashboardId");

    // 🚨 SAFE GUARD
    if (!workspaceId) {
      console.error("Missing workspaceId");
      return;
    }

    // 🚨 IMPORTANT: dashboardId is optional fallback-safe
    if (!dashboardId) {
      console.warn("dashboardId missing — using fallback flow");
    }

    if (!title.trim()) {
      console.error("Title is required");
      return;
    }

    dispatch(
      createWidget({
        workspaceId,
        dashboardId: dashboardId || null, // safe fallback
        title,
        type,
      })
    );
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="font-bold mb-4">Add Widget</h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="LINE_CHART">Line Chart</option>
        <option value="BAR_CHART">Bar Chart</option>
        <option value="KPI_CARD">KPI Card</option>
        <option value="TABLE">Table</option>
      </select>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={submitHandler}
      >
        Add
      </button>
    </div>
  );
}

export default AddWidgetModal;