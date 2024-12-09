const Hero = () => {
  return (
    <div className="px-[5%] pt-24 pb-6 w-full h-screen">
      <div
        className=" w-full h-full rounded-md bg-no-repeat bg-cover bg-center grid place-items-center text-center shadow-md"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div>
          <h1 className="font-bold text-5xl text-slate-800 mb-2">Kabinet Mahavira Vidyatara</h1>
          <p className="text-lg">
            Himpunan Mahasiswa Informatika <br />
            Universitas Majalengka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
