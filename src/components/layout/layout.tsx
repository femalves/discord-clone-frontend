import React from "react";

import { Grid } from "./layout.styles";

import ServerList from "../ServerList/serverlist";
import ServerName from "../ServerName/serverName";
import ChannelInfo from "../ChannelInfo/channelInfo";
import Channellist from "../ChannelList/channellist";
import UserInfo from "../UserInfo/userInfo";
import UserList from "../UserList/userlist";
const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <Channellist />
      <UserInfo />
      <div />
      <UserList />
    </Grid>
  );
};

export default Layout;
