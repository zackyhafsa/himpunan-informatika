type MessagePropsType = {
  role: "assistant" | "user";
  message: string;
};

export const MessageCard = (props: MessagePropsType) => {
  return (
    <div
      className={` px-6 text-lg shadow-md py-4 max-w-md w-fit whitespace-pre-line break-words ${
        props.role === "user"
          ? "bg-red-700 text-white ml-auto rounded-b-2xl rounded-tl-2xl"
          : "bg-white border rounded-b-2xl rounded-tr-2xl"
      }`}
    >
      {props.message}
    </div>
  );
};
