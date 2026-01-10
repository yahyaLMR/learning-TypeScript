
function Card({name,age,email,children}: {name: string, age: number, email: string, children?: React.ReactNode}) {

  return (
    <div className="card">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        {children}
    </div>
  )
}

export default Card