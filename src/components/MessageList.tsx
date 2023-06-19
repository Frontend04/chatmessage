import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { MessageListProps } from "../types";
import Message from "./Message";

const MessageList: React.FC<MessageListProps> = ({ messages, loading }) => {
  if (loading) {
    return <CircularProgress />;
  }
  if (messages.length === 0) {
    return <Typography variant="body1">No messages yet.</Typography>;
  }
  return (
    <div>
      {messages.map((message) => (
        <Message
          key={message._id}
          author={message.author}
          message={message.message}
          datetime={message.datetime}
        />
      ))}
    </div>
  );
};

export default MessageList;
