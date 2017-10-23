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
interface Props {
  limit: number;
}

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
    // make an ajax request to the URL and return a promise
    fetch(dataUrl)
      .then(data => {
        // convert the ajax response to a promise that returns json
        return data.json();
      })
      .then(data => {
        // after results are returned update the components
        // state to the list of users
        this.setState({
          users: data
        });
      })
      .catch(reason => {
        // some error handling, have to disable ts lint to use console
        // tslint:disable-next-line:no-console
        console.log(reason);
      });
  }
  render() {
    const { users } = this.state;
    const { limit } = this.props;
    return !users ? (
      <div>Loading...</div>
    ) : (
      <ul>{users.slice(0, limit).map(u => <UserInfo key={u.id} {...u} />)}</ul>
    );
  }
}
