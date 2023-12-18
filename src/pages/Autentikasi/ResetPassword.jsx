import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useResetPassword } from "../../services/auth/PutResetPassword.";
import { useLocation } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";

export const ResetPassword = () => {
  const location = useLocation();

  const [passwordShown, setPasswordShown] = useState(false);
  const [getPassword, setPassword] = useState("");
  const [getConfPassword, setConfPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  CookieStorage.set(CookiesKeys.JwtToken, token);

  const { mutate: putPassword } = useResetPassword();
  const handlePassword = () => {
    putPassword({
      password: getPassword,
      confirmationPassword: getConfPassword,
    });
  };

  return (
    <div className="flex h-screen">
      {/* Bagian Kiri */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="p-8 w-3/4">
          <h1 className="text-2xl font-bold mb-4 text-indigo-600">
            Reset Password
          </h1>
          <div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black-600">
                Password Baru
              </label>
              <div className="relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordShown ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmationpassword"
                  className="block text-black-600"
                >
                  Ulangi Password Baru
                </label>
                <div className="relative">
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="confirmationpassword"
                    name="confirmationpassword"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                    autoComplete="off"
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordShown ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold rounded-2xl py-2 px-4 w-full mb-4"
              onClick={handlePassword}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-1/2 bg-indigo-600">
        <img
          src="../assets/img/Belajar_white.png"
          alt="Belajar"
          className="object-cover w-full h-screen"
        />
      </div>
    </div>
  );
};
