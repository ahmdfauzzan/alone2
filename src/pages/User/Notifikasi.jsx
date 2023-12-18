import React, { useEffect, useState } from "react";
import { GoBellFill } from "react-icons/go";

export const Notifikasi = () => {
  const [notifikasi, setNotifikasi] = useState([]);

  useEffect(() => {
    const data = [
      {
        jenis: "Promosi",
        judul: "Dapatkan Potongan 50%",
        isi: "Selama Bulan Maret",
        waktu: "2 Maret 12:00",
        status: "bg-green-400", // Assuming status color is determined here
      },
      {
        jenis: "Notifikasi",
        judul: "Password berhasil diubah",
        isi: "",
        waktu: "1 Maret 10:00",
        status: "bg-rose-500",
      },
      {
        jenis: "Promosi",
        judul: "Dapatkan Potongan 30%",
        isi: "Selama Bulan Maret",
        waktu: "1 Maret 09:00",
        status: "bg-green-400",
      },
    ];
    setNotifikasi(data);
  }, []);
  return (
    <div className="w-[900px] h-[512px] shadow flex flex-col justify-start items-start">
      <div className="w-full h-[62px] p-6 bg-indigo-600 rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-center gap-6">
        <div className="text-white text-xl font-bold font-[Montserrat] leading-[14px]">
          Notifikasi
        </div>
      </div>
      <div className="w-full h-[450px] p-6 rounded-bl-2xl rounded-br-2xl border border-indigo-600 flex flex-col justify-start items-center gap-6">
        {notifikasi.map((notif, index) => (
          <div
            key={index}
            className="w-full flex-col justify-start items-start gap-4 flex"
          >
            <div className="self-stretch flex justify-start items-start gap-4">
              <GoBellFill className="text-indigo-600 w-6 h-6" />
              <div className="flex-grow flex flex-col justify-start items-start gap-1">
                <div className="self-stretch flex justify-start items-center gap-2">
                  <div className="flex-grow text-indigo-600 text-xs font-normal font-[Montserrat]">
                    {notif.jenis}
                  </div>
                  <div className="text-zinc-500 text-[10px] font-semibold font-[Montserrat]">
                    {notif.waktu}
                  </div>
                  <div className={`w-2 h-2 ${notif.status} rounded-full`} />
                </div>
                <div className="self-stretch text-black text-[10px] font-semibold font-[Montserrat]">
                  {notif.judul} {notif.isi}
                </div>
                <div className="text-zinc-500 text-[10px] font-normal font-[Montserrat]">
                  Syarat dan Ketentuan berlaku!
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
