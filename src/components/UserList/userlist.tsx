import React from "react";
import { Container, Role, User, Avatar } from "./userlist.styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};
const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Available - 1 </Role>
      <UserRow nickname="Anne Taylor" />

      <Role> Offline - 5 </Role>
      <UserRow nickname="Jennifer Stewart" />
      <UserRow nickname="Johnny Black " isBot />
      <UserRow nickname="Rebecca Connely " />
      <UserRow nickname="Jane Brady " />
      <UserRow nickname="Amanda Bree" />
    </Container>
  );
};

export default UserList;
