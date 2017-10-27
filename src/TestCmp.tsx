import * as React from "react";
import "./TestCmp.css";
import User from "./User";
import UserInfo from "./UserInfo";

const dataUrl = "https://jsonplaceholder.typicode.com/users";

interface State {
  users: User[] | null;
}
interface Props {
  limit: number;
}

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
