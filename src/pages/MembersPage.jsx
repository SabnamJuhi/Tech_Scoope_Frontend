




// import { useEffect, useState } from "react";
// import MainLayout from "../layouts/MainLayout";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   getMembers,
//   removeMember,
//   changeRole,
// } from "../redux/actions/memberActions";

// function MembersPage() {

//   const dispatch = useDispatch();

//   const workspaces =
//     useSelector(state => state.workspaces.workspaces);

//   const members =
//     useSelector(state => state.members.members);

//   const role =
//     useSelector(state => state.workspaces.role);

//   const [workspaceId, setWorkspaceId] = useState(
//     localStorage.getItem("workspaceId") || ""
//   );

//   useEffect(() => {

//     if (workspaceId) {
//       dispatch(getMembers(workspaceId));
//     }

//   }, [workspaceId]);

//   return (
//     <MainLayout>

//       <div className="bg-white p-6 rounded shadow">

//         <h1 className="text-2xl font-bold mb-5">
//           Members
//         </h1>

//         {/* Workspace selector */}

//         <select
//           value={workspaceId}
//           onChange={(e) => setWorkspaceId(e.target.value)}
//           className="border p-2 rounded mb-6"
//         >
//           <option value="">
//             Select Workspace
//           </option>

//           {
//             workspaces.map((ws) => (
//               <option key={ws.id} value={ws.id}>
//                 {ws.name}
//               </option>
//             ))
//           }

//         </select>

//         <table className="w-full">

//           <thead>

//             <tr className="border-b">

//               <th className="text-left py-3">
//                 Name
//               </th>

//               <th className="text-left py-3">
//                 Email
//               </th>

//               <th className="text-left py-3">
//                 Role
//               </th>

//               {
//                 role === "ADMIN" &&
//                 <th className="text-left py-3">
//                   Actions
//                 </th>
//               }

//             </tr>

//           </thead>

//           <tbody>

//             {
//               members.map(member => (

//                 <tr
//                   key={member.UserId}
//                   className="border-b"
//                 >

//                   <td className="py-3">
//                     {member.User?.name}
//                   </td>

//                   <td className="py-3">
//                     {member.User?.email}
//                   </td>

//                   <td className="py-3">

//                     {
//                       role === "ADMIN"
//                       ? (
//                         <select
//                           value={member.role}
//                           onChange={(e)=>
//                             dispatch(
//                               changeRole(
//                                 workspaceId,
//                                 member.UserId,
//                                 e.target.value
//                               )
//                             )
//                           }
//                           className="border rounded p-1"
//                         >
//                           <option value="ADMIN">
//                             ADMIN
//                           </option>

//                           <option value="ANALYST">
//                             ANALYST
//                           </option>

//                           <option value="VIEWER">
//                             VIEWER
//                           </option>

//                         </select>
//                       )
//                       : member.role
//                     }

//                   </td>

//                   {
//                     role === "ADMIN" &&
//                     <td className="py-3">

//                       <button
//                         className="bg-red-500 text-white px-3 py-1 rounded"
//                         onClick={() =>
//                           dispatch(
//                             removeMember(
//                               workspaceId,
//                               member.UserId
//                             )
//                           )
//                         }
//                       >
//                         Remove
//                       </button>

//                     </td>
//                   }

//                 </tr>

//               ))
//             }

//           </tbody>

//         </table>

//       </div>

//     </MainLayout>
//   );
// }

// export default MembersPage;




import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";

import {
  getMembers,
  removeMember,
  changeRole,
  inviteMember,
} from "../redux/actions/memberActions";

import { getUsers } from "../redux/actions/authActions";

function MembersPage() {

  const dispatch = useDispatch();

  const workspaces =
    useSelector(state => state.workspaces.workspaces);

  const members =
    useSelector(state => state.members.members);

  const users = useSelector(
  state => state.auth.users || []
);

  const currentUser =
    useSelector(state => state.auth.user);

  const role =
    localStorage.getItem("role");

  const [workspaceId, setWorkspaceId] = useState(
    localStorage.getItem("workspaceId") || ""
  );

  const [email,setEmail] = useState("");

  const [newRole,setNewRole] =
    useState("VIEWER");


  useEffect(() => {

    dispatch(getUsers());

  }, []);


  useEffect(() => {

    if(workspaceId){
      dispatch(getMembers(workspaceId));
    }

  },[workspaceId]);


  const handleInvite = () => {

    dispatch(
      inviteMember(
        workspaceId,
        {
          email,
          role:newRole
        }
      )
    );

    setEmail("");
    setNewRole("VIEWER");

  };


  return (

    <MainLayout>

      <div className="bg-white p-6 rounded shadow">

        <h1 className="text-3xl font-bold mb-6">
          Members
        </h1>


        {/* Workspace selector */}

        <select
          value={workspaceId}
          onChange={(e)=>setWorkspaceId(e.target.value)}
          className="border p-2 rounded mb-6"
        >

          <option value="">
            Select Workspace
          </option>

          {
            workspaces.map(ws=>(
              <option
                key={ws.id}
                value={ws.id}
              >
                {ws.name}
              </option>
            ))
          }

        </select>


        {/* Invite member */}

        {
          role==="ADMIN" &&
          <div className="border p-5 rounded mb-8">

            <h2 className="font-bold text-xl mb-4">
              Invite Member
            </h2>


            <select
              className="border p-2 rounded mr-4"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            >

              <option value="">
                Select User
              </option>

              {
                users.map(user=>(
                  <option
                    key={user.id}
                    value={user.email}
                  >
                    {user.name} ({user.email})
                  </option>
                ))
              }

            </select>


            <select
              className="border p-2 rounded mr-4"
              value={newRole}
              onChange={(e)=>setNewRole(e.target.value)}
            >
              <option value="ADMIN">
                ADMIN
              </option>

              <option value="ANALYST">
                ANALYST
              </option>

              <option value="VIEWER">
                VIEWER
              </option>

            </select>


            <button
              onClick={handleInvite}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Invite
            </button>

          </div>
        }



        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th>Name</th>
              <th>Email</th>
              <th>Role</th>

              {
                role==="ADMIN" &&
                <th>Actions</th>
              }

            </tr>

          </thead>

          <tbody>

          {

            members.map(member=>{

              const isCurrentUser =
                member.User?.id===currentUser?.id;

              return (

                <tr
                  key={member.UserId}
                  className="border-b"
                >

                  <td className="py-4">
                    {member.User?.name}
                  </td>

                  <td>
                    {member.User?.email}
                  </td>

                  <td>

                    {

                      role==="ADMIN" &&
                      !isCurrentUser ?

                      <select
                        value={member.role}
                        className="border p-1 rounded"
                        onChange={(e)=>
                          dispatch(
                            changeRole(
                              workspaceId,
                              member.UserId,
                              e.target.value
                            )
                          )
                        }
                      >

                        <option value="ADMIN">
                          ADMIN
                        </option>

                        <option value="ANALYST">
                          ANALYST
                        </option>

                        <option value="VIEWER">
                          VIEWER
                        </option>

                      </select>

                      :

                      member.role

                    }

                  </td>

                  {

                    role==="ADMIN" &&
                    !isCurrentUser &&

                    <td>

                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={()=>
                          dispatch(
                            removeMember(
                              workspaceId,
                              member.UserId
                            )
                          )
                        }
                      >
                        Remove
                      </button>

                    </td>

                  }

                </tr>

              );

            })

          }

          </tbody>

        </table>

      </div>

    </MainLayout>

  );

}

export default MembersPage;