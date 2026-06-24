




// function TableWidget({ data }) {

//   return (
//     <div className="overflow-x-auto">

//       <table className="w-full border">

//         <thead className="bg-gray-200">

//           <tr>

//             <th className="border p-2">
//               Month
//             </th>

//             <th className="border p-2">
//               Sales
//             </th>

//           </tr>

//         </thead>

//         <tbody>

//           {data.map((item, index) => (

//             <tr key={index}>

//               <td className="border p-2">
//                 {item.month}
//               </td>

//               <td className="border p-2">
//                 ₹{item.sales}
//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default TableWidget;




function TableWidget({ data }) {
  return (
    <div className="overflow-hidden rounded-xl border">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="text-left px-4 py-3">
              Month
            </th>

            <th className="text-left px-4 py-3">
              Sales
            </th>
          </tr>

        </thead>

        <tbody>

          {data.map((item,index)=>(

            <tr
              key={index}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-4 py-3">
                {item.month}
              </td>

              <td className="px-4 py-3 font-semibold text-green-600">
                ₹{item.sales}
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TableWidget;