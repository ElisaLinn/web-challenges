import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

// const UsersLis = USERS.map((User) => {
//   return
//   <li key={User.id}>
//     <Card>
//       id={User.id}
//       name={User.name}
//       roles={User.roles}
//       about= {User.about}
//     </Card>
//   </li>;
// });

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <Card key={user.id} user={user} />
        ))};
      </div>
    </main>
  );
}
