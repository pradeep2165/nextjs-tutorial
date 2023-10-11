
const UserList = ({users}) => {
  return (
    <div>
      <h1>List of of users</h1>
      {users.map(user=>(
        <div key={user.id}>
          <p>{user.name}{"              "}{user.email}</p>
          
        </div>
      ))}
    </div>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return{
    props:{
      users:data
    }
  }
}
