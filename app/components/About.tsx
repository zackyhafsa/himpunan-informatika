import Card, { LargeCard } from "./Card";

const About = () => {
  return (
    <div>
      <div className="bg-red-700 text-white py-4 rounded-md">
        <p className="text-center ">Kabinet</p>
        <h1 className="text-center font-bold text-3xl ">Mahavira Vidyatara</h1>
      </div>
      <div className="px-[5%] my-5">
        <h1 className="text-center my-5 text-slate-800 font-bold text-2xl">
          BPH <span className="block font-medium text-base">Badan Pengurus Harian</span>
        </h1>
        <div className="grid grid-cols-4 gap-5 px-[5%]">
          <div className="col-span-2 mb-10">
            <LargeCard position="Ketua Himpunan" name="Aep Saepuloh" />
          </div>
          <div className="col-span-2 mb-10">
            <LargeCard position="Wakil Ketua Himpunan" name="Desfi Silvia Aros" />
          </div>
          <Card position="Sekretaris 1" name="Mira Yunisa" />
          <Card position="Sekretaris 2" name="Haura Zahra" />
          <Card position="Bendahara 1" name="Hegar Zalekania" />
          <Card position="Bendahara 2" name="Retno Sari Sirotujanah" />
        </div>
        <h1 className="font-bold text-center my-5 text-slate-800 text-2xl">
          Litbang
          <span className="block text-base font-medium">Penelitian dan Pengembangan</span>
        </h1>
        {/* <div className="flex justify-center gap-5 mt-5 w-full">
        <div className="w-1/4">
          <LargeCard position="Koordinator" name="Abrar Wahid" />
        </div>
        <div className="grid grid-cols-4 gap-5 w-3/4">
          <Card position="Anggota" name="Anis Agustin" />
          <Card position="Anggota" name="Ayip Luthfy Firmansyah" />
          <Card position="Anggota" name="Zacky Hafsari" />
          <Card position="Anggota" name="Puput Risna" />
          <Card position="Anggota" name="Wildan Zhilal Manafi" />
          <Card position="Anggota" name="Pandu Yassar Alfaros" />
          <Card position="Anggota" name="Rintan Nurhaliza" />
          <Card position="Anggota" name="Khoerul Anwar" />
        </div>
      </div> */}

        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <LargeCard position="koordinator" name="Abrar Wahid" />
          </div>
          <Card position="Anggota" name="Anis Agustin" />
          <Card position="Anggota" name="Ayip Luthfy Firmansyah" />
          <Card position="Anggota" name="Zacky Hafsari" />
          <Card position="Anggota" name="Puput Risna" />
          <Card position="Anggota" name="Wildan Zhilal Manafi" />
          <Card position="Anggota" name="Pandu Yassar Alfaros" />
          <Card position="Anggota" name="Rintan Nurhaliza" />
          <Card position="Anggota" name="Khoerul Anwar" />
        </div>
      </div>
    </div>
  );
};

export default About;
