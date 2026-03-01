const ExpenseCard = ({ expense, deleteExpense }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

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
  );
};

export default ExpenseCard;