import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage/channelMessage";
import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from "./channelData.styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Johnny Black"
          date="07/15/2020"
          content={
            <>
              <Mention>@JenniferStewart </Mention>was added to the chat.
            </>
          }
        ></ChannelMessage>
        <ChannelMessage
          author="Johnny Black"
          date="07/15/2020"
          content={
            <>
              <Mention>@PaulHunter </Mention>was added to the chat.
            </>
          }
        ></ChannelMessage>
        <ChannelMessage
          author="Jane Brady"
          date="07/15/2020"
          content="You should use transition on the background change."
        ></ChannelMessage>
        <ChannelMessage
          author="Rebecca Connely"
          date="07/15/2020"
          content="It's looking pretty good! "
        ></ChannelMessage>
        <ChannelMessage
          author="Johnny Black"
          date="07/15/2020"
          content={
            <>
              <Mention>@JenniferStewart </Mention>The next virtual meetup will
              happen on August 1, 2020.
            </>
          }
        ></ChannelMessage>
        <ChannelMessage
          author="Johnny Black"
          date="07/15/2020"
          content={
            <>
              <Mention>@Stevemr </Mention>was added to the chat.
            </>
          }
        ></ChannelMessage>
        <ChannelMessage
          author="Johnny Black"
          date="07/15/2020"
          content={
            <>
              <Mention>@NoelG </Mention>was added to the chat.
            </>
          }
        ></ChannelMessage>
        <ChannelMessage
          author="Johnny Black"
          date="07/15/2020"
          content={
            <>
              <Mention>@JJRudd </Mention>was added to the chat.
            </>
          }
        ></ChannelMessage>
        <ChannelMessage
          author="Johnny Black"
          date="07/15/2020"
          content={
            <>
              <Mention>@DeniseY </Mention>was added to the chat.
            </>
          }
        ></ChannelMessage>
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Message #Look-what-I-made" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
