import { AiFillMessage } from "react-icons/ai";

export const NoChat = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-5 flex items-center flex-col gap-2  text-center">
        <AiFillMessage className="size-20 text-red-700 bg-red-300 p-3 rounded-full animate-bounce" />
        <h1 className="font-black text-5xl text-gray-900 max-sm:text-3xl">
          Chat-nya masih kosong 😶
        </h1>
        <p className="text-gray-900 text-lg">
          Tapi aku nggak gigit, kok! Yuk ngobrol, mulai aja dari “Halo”.
        </p>
      </div>
    </div>
  );
};
