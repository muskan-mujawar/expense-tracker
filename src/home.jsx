import { useEffect, useState } from "react";
import ListItems from "./listItems";
import { FiPlus } from "react-icons/fi";

import { FiMinus } from "react-icons/fi";

export default function Home() {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");

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
          <p className=" mt-2">
            Name:{" "}
            <input
              placeholder="Enter Name "
              size="sm"
              onChange={(e) => setExpense(e.target.value)}
              width="15%"
            />
          </p>
          <p className=" mt-2">
            Amount:{" "}
            <input
              placeholder="Enter Amount "
              size="sm"
              onChange={(e) => setAmount(e.target.value)}
              width="15%"
            />
            <button
              className="ms-2"
              colorScheme="teal"
              variant="ghost"
              onClick={() => {
                setItems([
                  ...items,
                  {
                    id: crypto.randomUUID(),
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
        </div>
      </div>
      <ListItems setList={setItems} data={items} />
    </div>
  );
}
