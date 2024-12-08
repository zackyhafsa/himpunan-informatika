export default function Navbar() {
  return (
    <div className="shadow-md fixed top-0 left-0 right-0 bg-white z-[9999]">
      <div className="px-[5%] py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="" width={50} />
          <h1 className="font-bold leading-5 uppercase text-sm">
            Himpunan Mahasiswa Informatika
            <br />
            Universitas Majalengka
          </h1>
        </div>
        <div className="flex gap-5">
          <a href="">Beranda</a>
          <a href="">Berita</a>
          <a href="">Tentang</a>
          <a href="">Saran</a>
        </div>
      </div>
    </div>
  );
}
