import React, { useState } from "react";
import { LayoutAdmin } from "../../Layout/LayoutAdmin";
import { CardAdmin } from "../../components/Card/CardAdmin";
import { CiCirclePlus } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";

export const ClassAdmin = () => {
  const [getModalFilter, setModalFilter] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const modalFilter = () => {
    return (
      <div className="absolute right-0 mt-2 bg-white shadow-lg border-t border-primary rounded-lg px-3 pt-1.5 pb-3 text-sm">
        <div className="font-semibold mb-2">Status</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <input
              type="radio"
              id="free"
              name="kelas"
              value=""
              className="h-4 w-4 border border-gray-300 rounded-md"
            />
            <label htmlFor="free" className="whitespace-nowrap">
              Gratis
            </label>
          </div>
          <div className="flex items-center gap-1.5">
            <input
              type="radio"
              id="premium"
              name="kelas"
              value=""
              className="h-4 w-4 border border-gray-300 rounded-md"
            />
            <label htmlFor="premium" className="whitespace-nowrap">
              Premium
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
              <div className="font-bold text-xl">Kelola Kelas</div>
              <div className="flex items-center gap-4 text-primary">
                <button
                  onClick={() => setOpenModal(true)}
                  className="flex items-center gap-1 text-lg border text-white bg-primary border-primary rounded-lg px-4 py-[0.130rem] cursor-pointer"
                >
                  <CiCirclePlus className="stroke-1 text-xl" />
                  <span className="font-semibold">Tambah</span>
                </button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>Tambah Kelas</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-3 text-sm">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="namakelas">Nama Kelas</label>
                        <input
                          type="text"
                          id="namakelas"
                          placeholder="Front-end with ReactJS"
                          className="text-sm border-gray-300 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="kategori">Kategori</label>
                        <input
                          type="text"
                          id="kategori"
                          placeholder="Web Development"
                          className="text-sm border-gray-300 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="kodekelas">Kode Kelas</label>
                        <input
                          type="text"
                          id="kodekelas"
                          placeholder="WD1101"
                          className="text-sm border-gray-300 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="tipekelas">Tipe Kelas</label>
                        <select
                          name="tipekelas"
                          id="tipekelas"
                          className="text-sm border-gray-300 rounded-lg"
                        >
                          <option value="">-- Pilih Tipe Kelas --</option>
                          <option value="">Gratis</option>
                          <option value="">Premium</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="level">Level</label>
                        <select
                          name="level"
                          id="level"
                          className="text-sm border-gray-300 rounded-lg"
                        >
                          <option value="">-- Pilih Level --</option>
                          <option value="">Beginner</option>
                          <option value="">Intermediate</option>
                          <option value="">Advanced</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="harga">Harga</label>
                        <input
                          type="text"
                          id="harga"
                          placeholder="300000"
                          className="text-sm border-gray-300 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="deskripsi">Deskripsi Kelas</label>
                        <textarea
                          name="deskripsi"
                          id="deskripsi"
                          placeholder="ReactJS saat ini .."
                          className="text-sm border-gray-300 rounded-lg w-full h-28"
                        ></textarea>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer className="flex justify-end gap-3">
                    <Button
                      onClick={() => setOpenModal(false)}
                      className="bg-red-500 hover:!bg-red-700 text-white"
                    >
                      Upload Video
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => setOpenModal(false)}
                      className="bg-primary hover:!bg-purple-800 text-white hover:!text-white"
                    >
                      Simpan
                    </Button>
                  </Modal.Footer>
                </Modal>
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
                  <input
                    type="text"
                    placeholder="cari.."
                    className="border border-primary rounded-lg ps-8 pe-3 py-[0.275rem] w-[15rem]"
                  />
                  <FaSearch className="w-3.5 h-3.5 absolute left-2.5" />
                </div>
              </div>
            </div>
            <table className="text-sm w-full mt-3 text-left">
              <thead className="bg-[#EBF3FC]">
                <tr>
                  <th className="ps-2 py-2.5">Kode Kelas</th>
                  <th className="py-2.5">Kategori</th>
                  <th className="py-2.5">Nama Kelas</th>
                  <th className="py-2.5">Tipe Kelas</th>
                  <th className="py-2.5">Level</th>
                  <th className="py-2.5">Harga Kelas</th>
                  <th className="py-2.5">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Ubah
                      </button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};
