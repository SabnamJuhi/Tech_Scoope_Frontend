// import { useState } from "react";

// function FilterPanel({ onFilter }) {
//   const [region, setRegion] = useState("");

//   return (
//     <div className="bg-white p-4 rounded shadow mb-5">
//       <input
//         className="border p-2"
//         placeholder="Region"
//         value={region}
//         onChange={(e) => setRegion(e.target.value)}
//       />

//       <button
//         className="ml-3 bg-blue-500 text-white px-3 py-2 rounded"
//         onClick={() => onFilter(region)}
//       >
//         Apply
//       </button>
//     </div>
//   );
// }

// export default FilterPanel;





import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../redux/actions/filterActions";

function FilterPanel() {

  const dispatch = useDispatch();

  const [filterKey, setFilterKey] =
    useState("");

  const [filterValue, setFilterValue] =
    useState("");

  const submitHandler = () => {

    dispatch(
      updateFilter({
        dashboardId:
          localStorage.getItem(
            "dashboardId"
          ),

        workspaceId:
          localStorage.getItem(
            "workspaceId"
          ),

        filterKey,
        filterValue,
      })
    );
  };

  return (
    <div className="flex gap-3 mb-5">

      <input
        type="text"
        placeholder="Filter Key"
        className="border p-2"
        value={filterKey}
        onChange={(e) =>
          setFilterKey(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Filter Value"
        className="border p-2"
        value={filterValue}
        onChange={(e) =>
          setFilterValue(e.target.value)
        }
      />

      <button
        onClick={submitHandler}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Apply
      </button>

    </div>
  );
}

export default FilterPanel;