import React from "react";

function ListItems(props) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Expense Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <tr>
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
