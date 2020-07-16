import React from "react";
import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./channelInfo.styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>UI/UX channel open</Title>
      <Separator />
      <Description>How to create better designs.</Description>
    </Container>
  );
};

export default ChannelInfo;
