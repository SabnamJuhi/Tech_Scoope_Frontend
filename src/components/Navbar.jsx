// function Navbar() {
//   return (
//     <div className="h-16 bg-white shadow flex items-center justify-between px-6">
//       <h1 className="font-bold text-xl">Realtime Dashboard</h1>

//       <button className="bg-red-500 text-white px-4 py-2 rounded">
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Navbar;




// import { useSelector } from "react-redux";

// function Navbar() {

//   const user = useSelector(
//     (state) => state.auth.user
//   );

//   return (
//     <div className="bg-white shadow p-4 flex justify-between">

//       <h1 className="font-bold text-xl">
//         Real-Time Dashboard
//       </h1>

//       <div>
//         {user?.email}
//       </div>

//     </div>
//   );
// }

// export default Navbar;




import { useSelector } from "react-redux";
import { Bell } from "lucide-react";

function Navbar() {
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-sm">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Real-Time Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            {user?.email?.charAt(0)?.toUpperCase()}
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">
              User
            </h3>
            <p className="text-sm text-gray-500">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;