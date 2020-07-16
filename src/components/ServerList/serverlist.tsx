import React from "react";
import { Container, Separator } from "./serverlist.styles";
import ServerButton from "../ServerButton/serverbutton";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton mentions={1} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications mentions={102} />
      <ServerButton mentions={18} />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={8} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
