export interface Message {
  role: "user" | "model";
  parts: string;
}

export interface ChatRequest {
  messages: Message[];
}

