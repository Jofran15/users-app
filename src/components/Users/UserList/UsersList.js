import React from "react";
import Card from "../../UI/Card";
import classes from "./UsersList";

const UsersList = (props) => {
  return (
    <Card className={classes.ul}>
      <ul>
        {props.usersData.map((user) => (
          <li>
            {user.name} I have {user.age} age old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
