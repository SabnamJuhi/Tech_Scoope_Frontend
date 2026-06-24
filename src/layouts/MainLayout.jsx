// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// function MainLayout({ children }) {
//   return (
//     <div className="flex">
//       <Sidebar />

//       <div className="flex-1">
//         <Navbar />

//         <div className="p-6">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;







// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// function MainLayout({ children }) {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <Navbar />

//         <div className="p-6 overflow-auto">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;








import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import WorkspaceSelector from "../components/WorkspaceSelector";

function MainLayout({ children }) {
  return (
    <div className="h-screen flex bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8">
        
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;