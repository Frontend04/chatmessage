import React from "react";
import { Paper, Typography } from "@mui/material";
import { MessageProps } from "../types";

const Message: React.FC<MessageProps> = ({ message, author, datetime }) => {
  return (
    <Paper elevation={3} sx={{ m: "10px", p: "10px" }}>
      <Typography variant="body1" color="#1898a1">
        {author}
      </Typography>
      <Typography variant="h6" sx={{ mt: "10px", mb: "10px" }}>
        {message}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "right" }}>
        {new Date(datetime).toLocaleString()}
      </Typography>
    </Paper>
  );
};
export default Message;