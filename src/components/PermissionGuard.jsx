// function PermissionGuard({ role, children }) {
//   if (role === "ADMIN" || role === "ANALYST") {
//     return children;
//   }

//   return null;
// }

// export default PermissionGuard;

// function PermissionGuard({ role, allowedRoles, children }) {
//   if (allowedRoles.includes(role)) {
//     return children;
//   }

//   return null;
// }

// export default PermissionGuard;









function PermissionGuard({
  role,
  children,
}) {

  if (
    role === "ADMIN" ||
    role === "ANALYST"
  ) {
    return children;
  }

  return null;
}

export default PermissionGuard;