



// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function BarChartWidget({ data }) {

//   return (
//     <ResponsiveContainer
//       width="100%"
//       height={250}
//     >
//       <BarChart data={data}>

//         <XAxis dataKey="month" />

//         <YAxis />

//         <Tooltip />

//         <Bar
//           dataKey="sales"
//           fill="#10b981"
//         />

//       </BarChart>
//     </ResponsiveContainer>
//   );
// }

// export default BarChartWidget;


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BarChartWidget({ data }) {
  return (
    <div className="w-full h-full min-h-[250px]">
  <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month"/>

          <YAxis/>

          <Tooltip/>

          <Bar
            dataKey="sales"
            fill="#10b981"
            radius={[8,8,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartWidget;