import React from "react";

function ListItems(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Expense Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.expenseName}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListItems;
