export interface MessageProps {
    message: string;
    author: string;
    datetime: string;
}
export interface MessageListProps {
    messages: MessageDate[];
    loading: boolean;
}