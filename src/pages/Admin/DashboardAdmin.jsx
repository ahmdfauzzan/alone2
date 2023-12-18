import React, { useState } from "react";
import { LayoutAdmin } from "../../Layout/LayoutAdmin";
import { CardAdmin } from "../../components/Card/CardAdmin";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export const DashboardAdmin = () => {
  const [getModalFilter, setModalFilter] = useState(false);

  const modalFilter = () => {
    return (
      <div className="absolute right-0 mt-2 bg-white shadow-lg border-t border-primary rounded-lg px-3 pt-1.5 pb-3 text-sm">
        <div className="font-semibold mb-2">Status</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <input
              type="radio"
              id="notyet"
              name="status"
              value=""
              className="h-4 w-4 border border-gray-300 rounded-md"
            />
            <label htmlFor="notyet" className="whitespace-nowrap">
              Belum Bayar
            </label>
          </div>
          <div className="flex items-center gap-1.5">
            <input
              type="radio"
              id="done"
              name="status"
              value=""
              className="h-4 w-4 border border-gray-300 rounded-md"
            />
            <label htmlFor="done" className="whitespace-nowrap">
              Sudah Bayar
            </label>
          </div>
        </div>
        <hr className="mt-3 mb-2" />
        <div className="flex justify-end items-center gap-2 text-sm">
          <button
            className="bg-gray-400 text-white rounded-lg px-2 py-1"
            onClick={() =>
              getModalFilter ? setModalFilter(false) : setModalFilter(true)
            }
          >
            batal
          </button>
          <button className="bg-primary text-white rounded-lg px-2 py-1">
            simpan
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <LayoutAdmin>
        <div className="flex flex-col gap-7">
          <CardAdmin />
          <div>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Status Pembayaran</div>
              <div className="flex items-center gap-6 text-primary">
                <div className="relative">
                  <div
                    className="flex items-center gap-1 text-lg border border-primary rounded-lg px-4 py-0.5 cursor-pointer hover:text-purple-800"
                    onClick={() =>
                      getModalFilter
                        ? setModalFilter(false)
                        : setModalFilter(true)
                    }
                  >
                    <CiFilter className="stroke-1 text-xl" />
                    <span className="font-semibold">Filter</span>
                  </div>
                  {getModalFilter ? modalFilter() : ""}
                </div>
                <div className="relative flex items-center">
                  <input type="text" placeholder="cari.." className="border border-primary rounded-lg ps-8 pe-3 py-[0.275rem] w-[15rem]"/>
                  <FaSearch className="w-3.5 h-3.5 absolute left-2.5"/>
                </div>
              </div>
            </div>
            <table className="text-sm w-full mt-3 text-left">
              <thead className="bg-[#EBF3FC]">
                <tr>
                  <th className="ps-2 py-2.5">ID</th>
                  <th className="py-2.5">Kategori</th>
                  <th className="py-2.5">Kelas Premium</th>
                  <th className="py-2.5">Status</th>
                  <th className="py-2.5">Metode Pembayaran</th>
                  <th className="py-2.5">Tanggal Bayar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};
