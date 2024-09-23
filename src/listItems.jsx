import React from "react";
import { useState } from "react";

function ListItems(props) {
  function handleRemove(id) {
    const newList = props.data.filter((item) => item.id !== id);
    props.setList(newList);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Expense Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {props.data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.expenseName}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>

                <td>
                  <div>
                    <button>edit</button>
                    <button
                      className="ms-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      remove
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListItems;
