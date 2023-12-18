import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

export const SidebarAdmin = () => {
  return (
    <div className="fixed w-[250px] h-full bg-primary flex flex-col">
      <div className="font-bold text-center py-12 text-white text-2xl">
        LOGO
      </div>
      <div className="flex flex-col text-white font-semibold">
        <a
          href="/admin"
          className="ps-10 py-3.5 hover:bg-[#489CFF] flex gap-3 items-center"
        >
          <LuLayoutDashboard />
          <span>Dashboard</span>
        </a>
        <a
          href="/kelolakelas"
          className="ps-10 py-3.5 hover:bg-[#489CFF] flex gap-3 items-center"
        >
          <IoBookOutline />
          <span>Kelola Kelas</span>
        </a>
        <a
          href="/logout"
          className="ps-10 py-3.5 hover:bg-[#489CFF] flex gap-3 items-center"
        >
          <TbLogout />
          <span>Keluar</span>
        </a>
      </div>
    </div>
  );
};
