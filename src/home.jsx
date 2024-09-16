import { useEffect, useState } from "react";
import ListItems from "./listItems";
import { FiPlus } from "react-icons/fi";

import { FiMinus } from "react-icons/fi";
import Dropdown from "./assets/dropdown";

export default function Home() {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = () => {
    setBalance(income - totalExpense);
  };

  function calculateIncome() {
    return items
      .filter((item) => item.amount > 0)
      .reduce((sum, current) => sum + current.amount, 0);
  }

  function calculateExpense() {
    return items
      .filter((item) => item.amount < 0)
      .reduce((sum, current) => sum + current.amount, 0);
  }

  return (
    <div>
      <div>
        <div className="center space-grotesk-fontstyle container ">
          <div className="income-box">
            <h5 className="align">
              <FiPlus className="me-2 " />
              Income
            </h5>
            <h3 className="size">{calculateIncome()}</h3>
          </div>
          <div className="ms-4  expense-box">
            <h5 className="align">
              <FiMinus className="me-2 " />
              Expense
            </h5>
            <h3 className="size"> {Math.abs(calculateExpense())}</h3>
          </div>
        </div>
        <div>
          <p className="mt-4">
            <label htmlFor="eName"></label>Name:{" "}
            <input
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              name=" your expense"
            />
          </p>
          <p className=" mt-2">
            Amount:{" "}
            <input
              name="amt"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
            <button
              type="button"
              className="ms-1"
              onClick={() => {
                setItems([
                  ...items,
                  {
                    expenseName: expense,
                    amount: parseInt(amount),
                    date: new Date().toDateString(),
                  },
                ]);
              }}
            >
              Add
            </button>
          </p>
          <p className=" mt-2 flex">
            Category: <Dropdown />
          </p>
        </div>
      </div>
      <ListItems data={items} />
    </div>
  );
}
