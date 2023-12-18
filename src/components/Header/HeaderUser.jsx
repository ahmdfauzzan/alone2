import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const HeaderUser = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const [searchQueryLocal, setSearchQueryLocal] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchQueryLocal);
    }
  };

  const handleChange = (e) => {
    setSearchQueryLocal(e.target.value);
  };

  return (
    <div className="flex justify-between items-center px-36 py-5 bg-primary text-white">
      <div className="flex items-center gap-16 w-1/2">
        <div className="font-bold text-center text-2xl">LOGO</div>
        <div className="relative flex items-center w-full">
          <input type="text" placeholder="cari kursus.." className="border-gray-300 rounded-xl text-sm ps-6 pe-16 py-4 text-black w-full" value={searchQueryLocal} onChange={handleChange} onKeyDown={handleSearch} />
          <button className="absolute p-2 rounded-xl bg-primary hover:bg-purple-800 right-4" onClick={() => setSearchQuery(searchQueryLocal)}>
            <BiSearchAlt className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* <div className="flex items-center gap-1.5 cursor-pointer">
        <FiLogIn />
        <span className="font-medium">Masuk</span>
      </div> */}
      <div className="relative flex items-center gap-8 font-medium">
        <div className="px-6 py-1 bg-[#489CFF] rounded-xl cursor-pointer hover:bg-white hover:text-[#489CFF]" onClick={() => navigate("/kelas")}>
          Kelas
        </div>
        <LuBell className="w-6 h-6" />
        <FiUser className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};
