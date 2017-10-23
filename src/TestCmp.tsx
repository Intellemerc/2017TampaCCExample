import * as React from "react";
import "./TestCmp.css";

const dataUrl = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  username: string;
}
interface State {
  users: User[] | null;
}
interface Props {}

const UserInfo = (user: User) => (
  <li className="user">
    <div>id: {user.id}</div>
    <div>name: {user.name}</div>
    <div>user name: {user.username} </div>
  </li>
);

export default class extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      users: null
    };
  }
  componentDidMount() {
    fetch(dataUrl)
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(reason => {
        // tslint:disable-next-line:no-console
        console.log(reason);
      });
  }
  render() {
    const { users } = this.state;
    return !users ? (
      <div>Loading...</div>
    ) : (
      <ul>{users.map(u => <UserInfo key={u.id} {...u} />)}</ul>
    );
  }
}
