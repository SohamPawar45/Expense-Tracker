

export default function TallyCard({name, expense_name, amount}) {
  return (
    <div>
      <h2>Name: {name}</h2>

      <div>
        <p>{expense_name}</p>
        <p>{amount}</p>
      </div>
    </div>
  )
}
