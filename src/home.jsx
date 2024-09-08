import React, { useEffect, useState } from "react";
import Expense from "./expense";
import ListItems from "./listItems";
import data from "./data.json";

export default function Home() {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");
  return (
    <div>
      <div>
        <div>
          <div className="centre">
            <h3 className="mt-1">Total Balance</h3>
          </div>
          <div className="expense">
            <p>Income </p>
            <p className="ms-4">Expense </p>
          </div>
        </div>
        <p>
          <label htmlFor="eName"></label> Expense Name:{" "}
          <input
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            name=" your expense"
          />
        </p>
        <p>
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
                  amount: amount,
                  date: new Date().toDateString(),
                },
              ]);
            }}
          >
            Add
          </button>
        </p>
      </div>
      <ListItems data={items} />
    </div>
  );
}
