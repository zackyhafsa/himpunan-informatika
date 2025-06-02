type MessagePropsType = {
  role: "assistant" | "user";
  message: string;
};

export const MessageCard = (props: MessagePropsType) => {
  return (
    <div
      className={`rounded-2xl px-6 text-lg shadow-md py-4 max-w-md w-fit whitespace-pre-line break-words ${
        props.role === "user" ? "bg-red-700 text-white ml-auto" : "bg-white border"
      }`}
    >
      {props.message}
    </div>
  );
};
