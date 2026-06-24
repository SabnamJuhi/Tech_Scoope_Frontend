function MemberTable({ members }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr>
          <th>Name</th>

          <th>Email</th>

          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {members.map((member) => (
          <tr key={member.id} className="border-b">
            <td>{member.name}</td>

            <td>{member.email}</td>

            <td>{member.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MemberTable;
