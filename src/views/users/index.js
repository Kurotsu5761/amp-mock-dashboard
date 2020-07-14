import React from "react";
import { UserListData } from "../../mock";
import UserForm from "./forms";

const UserDetail = ({ match }) => {
  const user = UserListData.data.find(
    (user) => user.id.toString() === match.params.id
  );
  return (
    <>
      <UserForm user={user} />
    </>
  );
};

export default UserDetail;
