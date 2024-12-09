export default function Card({ position, name }: { position: string; name: string }) {
  return (
    <div className="">
      <div className="bg-red-700  min-w-60 min-h-72 rounded-md shadow-md"></div>
      <div className="text-slate-800">
        <h1 className="font-bold text-xl">{position}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
}

export const LargeCard = ({ position, name }: { position: string; name: string }) => {
  return (
    <div className="w-full h-72">
      <div className="bg-red-700 w-full h-full rounded-md"></div>
      <div className="text-slate-800">
        <h1 className="font-bold text-xl">{position}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
};
