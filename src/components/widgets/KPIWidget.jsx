

// function KPIWidget({
//   title = "Revenue",
//   value = "₹85,000",
// }) {

//   return (
//     <div className="flex flex-col justify-center items-center h-40">

//       <h3 className="text-gray-500 text-lg">
//         {title}
//       </h3>

//       <div className="text-4xl font-bold text-green-600 mt-3">
//         {value}
//       </div>

//     </div>
//   );
// }

// export default KPIWidget;



function KPIWidget() {
  return (
    <div className="h-full flex flex-col justify-center">

      <p className="text-gray-500 text-lg">
        Total Revenue
      </p>

      <h1 className="text-5xl font-bold text-green-600 mt-4">
        ₹85,000
      </h1>

      <p className="text-sm text-green-500 mt-3">
        ↑ 18% this month
      </p>

    </div>
  );
}
export default KPIWidget;