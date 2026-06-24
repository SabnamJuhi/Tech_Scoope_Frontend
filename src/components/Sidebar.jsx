// import { Link } from "react-router-dom";

// function Sidebar() {

//   return (

//     <div className="w-64 bg-slate-900 text-white h-screen p-5">

//       <h1 className="text-2xl font-bold mb-10">
//         Dashboard
//       </h1>

//       <ul className="space-y-5">

//         <li>
//           <Link to="/dashboard">
//             Dashboard
//           </Link>
//         </li>

//         <li>
//           <Link to="/workspaces">
//             Workspaces
//           </Link>
//         </li>

//         <li>
//           <Link to="/members">
//             Members
//           </Link>
//         </li>

//         <li>
//           <Link to="/analytics">
//             Analytics
//           </Link>
//         </li>

//       </ul>

//     </div>

//   );

// }

// export default Sidebar;




// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="w-64 bg-slate-900 text-white min-h-screen">

//       <div className="p-5 text-2xl font-bold">
//         Dashboard
//       </div>

//       <ul className="space-y-3 p-5">

//         <li>
//           <Link to="/dashboard">
//             Dashboard
//           </Link>
//         </li>

//         <li>
//           <Link to="/workspaces">
//             Workspaces
//           </Link>
//         </li>

//         <li>
//           <Link to="/members">
//             Members
//           </Link>
//         </li>

//       </ul>
//     </div>
//   );
// }

// export default Sidebar;





import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart3,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Workspaces",
      icon: <Briefcase size={20} />,
      path: "/workspaces",
    },
    {
      title: "Members",
      icon: <Users size={20} />,
      path: "/members",
    },
  ];

  return (
    <aside className="w-72 bg-slate-950 text-white flex flex-col shadow-xl">
      {/* Logo */}
      <div className="h-20 border-b border-slate-800 flex items-center px-8">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <BarChart3 />
        </div>

        <div className="ml-3">
          <h2 className="text-xl font-bold">
            Dashboard
          </h2>

          <p className="text-xs text-gray-400">
            Admin Panel
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-5">
        <ul className="space-y-2">
          {menus.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-200
                ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-slate-800 text-gray-300"
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">
        <div className="bg-slate-900 rounded-xl p-4">
          <p className="text-sm text-gray-400">
            Logged in as
          </p>

          <h3 className="font-semibold">
            Admin User
          </h3>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;