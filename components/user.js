function User({ user }) {
  return (
    <>
      <h5>{user.name}</h5>
      <span>{user.email}</span>
    </>
  );
}
export default User