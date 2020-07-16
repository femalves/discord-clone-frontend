import React from "react";

import { Grid } from "./layout.styles";

import ServerList from "../ServerList/serverlist";
import ServerName from "../ServerName/serverName";
import ChannelInfo from "../ChannelInfo/channelInfo";
import Channellist from "../ChannelList/channellist";
import UserInfo from "../UserInfo/userInfo";
import UserList from "../UserList/userlist";
import ChannelData from "../ChannelData/channeldata";
const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <Channellist />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
