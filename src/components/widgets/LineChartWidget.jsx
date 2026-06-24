



// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// function LineChartWidget({ data }) {

//   return (
//     <ResponsiveContainer
//       width="100%"
//       height={250}
//     >
//       <LineChart data={data}>

//         <CartesianGrid strokeDasharray="3 3" />

//         <XAxis dataKey="month" />

//         <YAxis />

//         <Tooltip />

//         <Line
//           type="monotone"
//           dataKey="sales"
//           stroke="#3b82f6"
//         />

//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

// export default LineChartWidget;



import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function LineChartWidget({ data }) {
  return (
    <div className="w-full h-full min-h-[250px]">
  <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#e5e7eb"/>

          <XAxis dataKey="month"/>

          <YAxis/>

          <Tooltip/>

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartWidget;