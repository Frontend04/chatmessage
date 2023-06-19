import React, { useEffect, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import MessageList from "../components/MessageList";
import "../App.css";
import { MessageData } from "../types";

const ChatMessages: React.FC = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newMessage, setNewMessage] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  useEffect(() => {
    fetchMessages();
  }, []);
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://146.185.154.90:8000/messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSendMessage = async () => {
    try {
      const url = "http://146.185.154.90:8000/messages";
      const data = new URLSearchParams();
      data.set("message", newMessage);
      data.set("author", author);
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });
      const messageData = await response.json();
      setNewMessage("");
      setAuthor("");    
      setMessages([messageData, ...messages]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <Container maxWidth="sm" className="container">
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        sx={{ mb: "15px" }}
      />
      <TextField
        label="Message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        onClick={handleSendMessage}
        disabled={!newMessage || !author}
        id="button"
      >
        Send
      </Button>

      <MessageList messages={messages} loading={loading} />
    </Container>
  );
};
export default ChatMessages;
