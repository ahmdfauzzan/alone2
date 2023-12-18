import React from "react";
import { Link } from "react-router-dom";
import berhasil from "../../assets/img/🦆 illustration _Cart shopping list_.png";
import { LayoutUser } from "../../Layout/LayoutUser";

export const Berhasil = () => {
  const handleMulaiBelajarClick = () => {
    // Menetapkan query parameter showTelegramModal=true saat tombol diklik
    const url = new URL("/detail", window.location.origin);
    url.searchParams.set("showTelegramModal", "true");
    window.location.href = url.toString();
  };
  return (
    <>
      <LayoutUser>
        {/* Header */}
        <div className="mt-4">
          <div className="flex justify-center">
            <h3 className="text-base font-semibold bg-[#73CA5C] text-white w-2/3 h-12 rounded-lg flex items-center justify-center">
              Terimakasih atas pembayaran transaksi
            </h3>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className=" w-auto mt-5  flex flex-col items-center p-4">
            <h1 className="text-3xl text-[#6148FF] font-bold mb-4">Selamat!</h1>
            {/* Anda perlu menambahkan src untuk gambar Anda */}
            <img src={berhasil} alt="img berhasil" className="mb-4" />
            <span className="text-xl font-semibold text-black">
              Transaksi pembayaran kelas premium berhasil!
            </span>
            <span className="text-xl text-black my-2">
              E-receipt telah dikirimkan ke email.
            </span>
            <Link
              to="/detail"
              className="text-center bg-[#6148FF] text-white font-bold py-2 px-4 rounded-full mt-6 mb-2 w-full"
              onClick={handleMulaiBelajarClick}
            >
              Mulai Belajar
            </Link>
            <Link
              to="/kelas"
              className="flex justify-center items-center text-black hover:underline"
            >
              <h2 className="font-bold text-[#489CFF]">Kembali ke Beranda</h2>
            </Link>
          </div>
        </div>
      </LayoutUser>
    </>
  );
};
