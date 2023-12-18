import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useLoginUser } from "../../services/login-user";

export const LoginUser = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: Login, isSuccess, isError, error } = useLoginUser();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const loginUser = (e) => {
    e.preventDefault();
    console.log("login fired");
    Login({ email, password });
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Anda berhasil login");
  //   }

  //   if (isError) {
  //     toast.error(`Login gagal: ${error.message}`);
  //   }
  // }, [isSuccess, isError, error, navigate]);

  return (
    <div className="flex h-screen">
      {/* Bagian Kiri */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="p-8 w-3/4">
          <h1 className="text-2xl font-bold mb-4 text-indigo-600">Masuk</h1>
          <form onSubmit={loginUser}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black-600">
                Email
              </label>
              <input onChange={handleInput} type="text" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl" autoComplete="off" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black-600">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={handleInput}
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                  autoComplete="off"
                />
                <span className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                  {passwordShown ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              </div>
              {/* Tautan untuk reset password, gantikan "#" dengan link yang sesuai */}
              <a href="#" className="text-right hover:underline text-indigo-600">
                Lupa Kata Sandi
              </a>
            </div>

            <button type="submit" className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold rounded-2xl py-2 px-4 w-full mb-4">
              Masuk
            </button>
          </form>

          {/* Tautan untuk registrasi, gantikan "#" dengan link yang sesuai */}
          <p>
            Belum punya akun?{" "}
            <a href="#" className="hover:underline text-indigo-600">
              Daftar disini
            </a>
          </p>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-1/2 bg-indigo-600">
        {/* Pastikan path ke gambar sudah benar */}
        <img src="../assets/img/Belajar_white.png" alt="Belajar" className="object-cover w-full h-screen" />
      </div>
    </div>
  );
};

export default LoginUser;
