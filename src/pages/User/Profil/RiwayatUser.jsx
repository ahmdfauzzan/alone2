import React, { useEffect, useState } from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaStar, FaRegClock, FaBookOpen } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { LayoutUser } from "../../../Layout/LayoutUser";
import { SidebarProfil } from "../../../components/Sidebar/SidebarProfil";
import { useRiwayatPembayaran } from "../../../services/User Profile/riwayat_pembayaran";

export const RiwayatUser = () => {
  const [riwayatPembayaran, setRiwayatPembayaran] = useState([]);
  const { data, isLoading, isError } = useRiwayatPembayaran();

  useEffect(() => {
    if (data) {
      setRiwayatPembayaran(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <LayoutUser>
        <div className="w-4/5 mx-auto bg-primary rounded-xl border border-primary">
          <div className="flex flex-col items-center mt-5 mb-6">
            <div className="text-white text-xl font-bold">Akun</div>
          </div>
          <div className="flex shadow-md bg-white">
            {/* Left Side - Menu */}

            <SidebarProfil />

            {/* Right Side - Profile Form */}

            <div className="w-2/3 rounded p-4">
              <div className="flex flex-col items-center mt-5 mb-6">
                <p className="text-black text-2xl font-bold">Riwayat Pembayaran</p>
              </div>

              <div className="w-full  shadow-xl rounded-3xl sm:w-full md:w-[90%] lg:w-[90%] xl:w-[90%] mb-4 overflow-hidden">
                <div className="overflow-hidden w-full">
                  <img className="w-full h-40 object-cover" src="https://via.placeholder.com/150" alt="Course thumbnail" />
                </div>
                <div className="px-4 py-5 rounded-b-3xl shadow-lg w-full">
                  <div className="flex justify-between items-center pt-2">
                    <h4 className="text-lg font-bold text-[#6148FF]">UI/UX Design</h4>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500 mr-1" />
                      <span className="text-purple-600 font-semibold">4.7</span>
                    </div>
                  </div>
                  <h1 className="font-bold text-lg">Belajar Web Designer dengan Figma</h1>
                  <p className="text-sm mb-2">by Angela Doe</p>
                  <div className="text-sm text-gray-600 mb-4 flex justify-between">
                    <div className="flex items-center">
                      <RiShieldStarLine className="text-green-500 mr-2" />
                      <span className="text-[#6148FF] text-sm font-semibold">Intermediate Level</span>
                    </div>
                    <div className="flex items-center">
                      <FaBookOpen className="text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm font-semibold">10 Modul</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegClock className="text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm font-semibold">120 Menit</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaRegCheckCircle className="text-green-500 mr-2" />
                    <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-[#6148FF] h-7 flex items-center rounded-full" style={{ width: "70%" }}>
                        <span className="ml-2 text-white font-semibold">70% complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutUser>
    </>
  );
};
