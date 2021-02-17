import { FunctionComponent } from "react";
import { IUser } from "./types";

import "./style.css";

interface IUserTable {
  data: IUser[];
}

const UserTable: FunctionComponent<IUserTable> = ({ data }) => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <div style={{ width: "200px", overflowX: "scroll" }}>
          <th>GIVEN NAME</th>
          <th>FAMILY NAME</th>
          <th>EMAIL</th>
        </div>
      </thead>
      <tbody>
        {data.map((el: IUser) => {
          return (
            <tr>
              <td>{el.id}</td>
              <div style={{ width: "200px", overflowX: "scroll" }}>
                <td>{el.first_name}</td>
                <td>{el.last_name}</td>
                <td>{el.email}</td>
              </div>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
