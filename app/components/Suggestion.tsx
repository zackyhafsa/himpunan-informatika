"use client";

const Suggestion = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center mx-[10%]">
      <div className="flex border w-full justify-center items-center my-32 shadow-md rounded-md">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-gray-100 rounded-r-3xl">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Kritik & Saran</h1>

            <p className="mt-4 text-gray-500">Jika Kalian punya saran, segera sampaikan yaaa :)</p>
          </div>

          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSckHf8bvAbpcnZt7PS2_q8gvHpsmtHsTVrwGlb4D3LaverQqQ/formResponse"
            className="mx-auto mb-0 mt-8 max-w-md"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <textarea
                  className="w-full border rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm resize-none focus:outline-red-700"
                  placeholder="Masukkan saran"
                  name="entry.1733016149"
                  rows={5}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full sm:h-96 lg:w-1/2 flex justify-center max-md:hidden">
          <img alt="saran" src="Chat.svg" className="" />
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
