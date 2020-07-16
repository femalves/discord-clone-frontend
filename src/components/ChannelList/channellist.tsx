import React from "react";
import { Container, Category, AddCategoryIcon } from "./channellist.styles";
import ChannelButton from "../ChannelButton/channelButton";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>General</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="General" />
      <ChannelButton channelName="Open-source" />
      <ChannelButton channelName="Look-what-I-made" />
      <ChannelButton channelName="Helpme" />
      <ChannelButton channelName="Tools" />
      <ChannelButton channelName="Learn" />
    </Container>
  );
};

export default ChannelList;
