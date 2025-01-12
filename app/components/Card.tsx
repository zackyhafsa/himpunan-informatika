export default function Card({
  position,
  name,
  background,
}: {
  position: string;
  name: string;
  background: string;
}) {
  return (
    <div className="">
      <div
        className="  min-w-60 min-h-72 rounded-md shadow-md bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="text-slate-800">
        <h1 className="font-bold text-xl">{position}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
}

export const LargeCard = ({
  position,
  name,
  background,
}: {
  position: string;
  name: string;
  background: string;
}) => {
  return (
    <div className="w-full">
      <div
        className=" w-full h-72 rounded-md bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="text-slate-800">
        <h1 className="font-bold text-xl">{position}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
};
