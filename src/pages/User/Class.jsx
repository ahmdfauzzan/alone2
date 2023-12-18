import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaStar, FaRegClock, FaBookOpen } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LayoutUser } from "../../Layout/LayoutUser";
import { BiSearchAlt } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import img1 from "../../assets/img/img1.png";
import { RiBook3Line } from "react-icons/ri";
import { LuClock } from "react-icons/lu";

export const Class = () => {
  const navigate = useNavigate();

  return (
    <>
      <LayoutUser>
        {/* Title and Search */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Kelas Berjalan</h2>
          <div className="relative flex items-center">
            <input
              type="text"
              className="ps-6 pr-16 py-2 rounded-full focus:shadow focus:outline-none"
              placeholder="Cari Kelas..."
            />
            {/* Search icon with circular background */}
            <div className="absolute right-5 rounded-xl p-2 bg-[#6148FF] cursor-pointer">
              <BiSearchAlt className="text-white h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="relative flex desktop:gap-10 desktopfull:gap-14">
          {/* FILTER */}
          <div className="h-fit desktop:1/4 desktopfull:w-1/5 px-7 py-5 bg-white rounded-xl shadow">
            <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
              <FaFilter className="w-3 h-3" />
              <span>FILTER</span>
            </h3>
            <div className="flex flex-col gap-4 whitespace-nowrap overflow-x-hidden">
              <div className="space-y-3 px-1.5">
                <h4 className="text-base font-bold text-primary -pt-3">
                  Jenis
                </h4>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Paling Baru</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Paling Populer</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Promo</span>
                </label>
              </div>
              <div className="space-y-3 px-1.5">
                <h4 className="text-base font-bold text-primary -pt-3">
                  Kategori
                </h4>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">UI/UX Design</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Web Development</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Android Development</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Data Science</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Business Intelligence</span>
                </label>
              </div>
              <div className="space-y-3 px-1.5">
                <h4 className="text-base font-bold text-primary -pt-3">
                  Level Kesulitan
                </h4>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Beginner Level</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Intermediate Level</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                  />
                  <span className="">Advanced Level</span>
                </label>
              </div>
              <div className="w-full flex justify-center mt-2">
                <button className="font-bold text-red-500 hover:underline">
                  Hapus Filter
                </button>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="desktop:w-3/4 desktopfull:w-4/5">
            <div className="grid grid-cols-3 gap-4 mb-7 text-center">
              <div className="py-2 font-semibold text-gray-600 hover:text-white rounded-full bg-white hover:bg-primary cursor-pointer shadow">All</div>
              <div className="py-2 font-semibold text-gray-600 hover:text-white rounded-full bg-white hover:bg-primary cursor-pointer shadow">Kelas Premium</div>
              <div className="py-2 font-semibold text-gray-600 hover:text-white rounded-full bg-white hover:bg-primary cursor-pointer shadow">Kelas Gratis</div>
            </div>
            <div className="grid grid-cols-2 gap-5 gap-y-7">
              <div className="rounded-3xl bg-white shadow-lg" onClick={() => navigate("/detail")}>
                <img
                  src={img1}
                  alt="img1"
                  className="w-full h-[9rem] object-cover rounded-3xl"
                />
                <div className="flex flex-col gap-1 px-3 pt-3 pb-4">
                  <div className="flex justify-between font-bold">
                    <div className="text-primary">UI/UX Design</div>
                    <div className="flex items-center gap-1">
                      <FaStar className="fill-yellow-400" />
                      <span>4.7</span>
                    </div>
                  </div>
                  <div className="font-bold whitespace-nowrap overflow-hidden">
                    Belajar Web Designer dengan Figma asfkjask jlsfkjalsfkj
                    laflakf lkasjflaksjf laksf lksjl
                  </div>
                  <div className="font-medium">by Angela Doe</div>
                  <div className="flex items-center gap-3 desktopfull:gap-6 font-medium my-1">
                    <div className="flex items-center gap-1">
                      <RiShieldStarLine className="text-[#73CA5C]" />
                      <span>Intermediate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RiBook3Line className="text-[#73CA5C]" />
                      <span>10 Modul</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuClock className="stroke-[#73CA5C]" />
                      <span>120 Menit</span>
                    </div>
                  </div>
                  <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">
                    Rp 249.000
                  </button>
                </div>
              </div>
              <div className="rounded-3xl bg-white shadow-lg">
                <img
                  src={img1}
                  alt="img1"
                  className="w-full h-[9rem] object-cover rounded-3xl"
                />
                <div className="flex flex-col gap-1 px-3 pt-3 pb-4">
                  <div className="flex justify-between font-bold">
                    <div className="text-primary">UI/UX Design</div>
                    <div className="flex items-center gap-1">
                      <FaStar className="fill-yellow-400" />
                      <span>4.7</span>
                    </div>
                  </div>
                  <div className="font-bold whitespace-nowrap overflow-hidden">
                    Belajar Web Designer dengan Figma asfkjask jlsfkjalsfkj
                    laflakf lkasjflaksjf laksf lksjl
                  </div>
                  <div className="font-medium">by Angela Doe</div>
                  <div className="flex items-center gap-3 desktopfull:gap-6 font-medium my-1">
                    <div className="flex items-center gap-1">
                      <RiShieldStarLine className="text-[#73CA5C]" />
                      <span>Intermediate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RiBook3Line className="text-[#73CA5C]" />
                      <span>10 Modul</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuClock className="stroke-[#73CA5C]" />
                      <span>120 Menit</span>
                    </div>
                  </div>
                  <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">
                    Rp 249.000
                  </button>
                </div>
              </div>
              <div className="rounded-3xl bg-white shadow-lg">
                <img
                  src={img1}
                  alt="img1"
                  className="w-full h-[9rem] object-cover rounded-3xl"
                />
                <div className="flex flex-col gap-1 px-3 pt-3 pb-4">
                  <div className="flex justify-between font-bold">
                    <div className="text-primary">UI/UX Design</div>
                    <div className="flex items-center gap-1">
                      <FaStar className="fill-yellow-400" />
                      <span>4.7</span>
                    </div>
                  </div>
                  <div className="font-bold whitespace-nowrap overflow-hidden">
                    Belajar Web Designer dengan Figma asfkjask jlsfkjalsfkj
                    laflakf lkasjflaksjf laksf lksjl
                  </div>
                  <div className="font-medium">by Angela Doe</div>
                  <div className="flex items-center gap-3 desktopfull:gap-6 font-medium my-1">
                    <div className="flex items-center gap-1">
                      <RiShieldStarLine className="text-[#73CA5C]" />
                      <span>Intermediate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RiBook3Line className="text-[#73CA5C]" />
                      <span>10 Modul</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuClock className="stroke-[#73CA5C]" />
                      <span>120 Menit</span>
                    </div>
                  </div>
                  <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">
                    Rp 249.000
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutUser>
    </>
  );
};
