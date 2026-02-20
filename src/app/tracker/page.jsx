import { addExpenseAction, getExpenses } from "@/app/actions/expenseActions";

export default async function Tracker() {
  const expenses = await getExpenses();

  const total = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white border border-white/20">

        <h1 className="text-3xl font-bold text-center mb-6">
          Expense Tracker
        </h1>

        {/* Server Action Form */}
        <form action={addExpenseAction} className="space-y-3">
          <input
            type="text"
            name="title"
            placeholder="Expense name"
            required
            className="w-full p-3 rounded-lg bg-white/20"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            required
            className="w-full p-3 rounded-lg bg-white/20"
          />

          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600"
          >
            Add Expense
          </button>
        </form>

        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold">
            Total: ₹{total}
          </h2>
        </div>

        <ul className="mt-4 space-y-2 max-h-48 overflow-y-auto">
          {expenses.map((item) => (
            <li
              key={item.id}
              className="flex justify-between bg-white/20 p-3 rounded-lg"
            >
              <span>{item.title}</span>
              <span>₹{item.amount}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}