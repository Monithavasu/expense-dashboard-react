import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !category) return;

    addExpense({
      name,
      amount: Number(amount),
      category,
      id: Date.now()
    });

    setName("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto space-y-4">

      <input
        type="text"
        placeholder="Expense Name"
        className="w-full border p-3 rounded-lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full border p-3 rounded-lg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
  className="w-full border p-3 rounded-lg"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Select Category</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Shopping">Shopping</option>
  <option value="Bills">Bills</option>
  <option value="Bills">Education</option>
  <option value="Bills">Entertainment</option>
  <option value="Bills">HouseHold</option>
  <option value="Bills">Savings</option>
</select>

      <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
        Add Expense
      </button>

    </form>
  );
};

export default ExpenseForm;