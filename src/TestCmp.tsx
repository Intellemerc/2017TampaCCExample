import * as React from "react";

interface Users {
  id: number;
  name: string;
  username: string;
}
interface State {
  users: Users[] | null;
}
interface Props {}
export default class extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id: 1,
          name: "James Armstrong",
          username: "JArmstrong"
        },
        {
          id: 2,
          name: "John Doe",
          username: "JDoe"
        },
        {
          id: 3,
          name: "John Smith",
          username: "JSmith"
        }
      ]
    };
  }
  render() {
    const { users } = this.state;
    return !users ? (
      <div>Loading...</div>
    ) : (
      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
    );
  }
}
