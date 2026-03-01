import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ExpenseDashboard = () => {
  const [expenses, setExpenses] = useState([]);

  // Add Expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  // Total Expense Calculation
  const totalExpense = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Expense Dashboard
      </h2>

      <ExpenseForm addExpense={addExpense} />

      {expenses.length === 0 ? (
  <p className="text-center text-gray-500 mt-6">
    No expenses added yet.
  </p>
) : (
  <div className="max-w-lg mx-auto mt-10 space-y-4">
    {expenses.map(expense => (
      <div
        key={expense.id}
        className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
      >
        <div>
          <h3 className="font-semibold">{expense.name}</h3>
          <p className="text-gray-500">
            {expense.category} - ₹{expense.amount}
          </p>
        </div>

        <button
          onClick={() => deleteExpense(expense.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
)}

      <h3 className="text-center text-2xl font-bold mt-10">
        Total Expense: ₹{totalExpense}
      </h3>

    </section>
  );
};

export default ExpenseDashboard;