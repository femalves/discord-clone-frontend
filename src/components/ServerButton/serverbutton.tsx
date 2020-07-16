import React from "react";
import { Button } from "./serverbutton.styles";
import logo from "../../assets/logo.svg";

export interface Props {
  selected?: boolean;
  hasNotifications?: boolean;
  isHome?: boolean;
  mentions?: number;
}
const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      selected={selected}
      mentions={mentions}
    >
      {isHome && <img src={logo} alt="serverLogo" />}
    </Button>
  );
};

export default ServerButton;
