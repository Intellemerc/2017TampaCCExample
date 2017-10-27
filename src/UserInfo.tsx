import * as React from "react";
import User from "./User";

export default (user: User) => (
  <li className="user">
    <div>id: {user.id}</div>
    <div>name: {user.name}</div>
    <div>user name: {user.username} </div>
  </li>
);
