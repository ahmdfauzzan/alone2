import React, { useState } from "react";
import { useSendEmail } from "../../services/auth/PostSendEmail";

export const SendEmail = () => {
  const [getEmail, setEmail] = useState("");

  const { mutate: postEmail, data } = useSendEmail();

  const handleSendEmail = () => {
    postEmail({
      email: getEmail,
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
              <label htmlFor="email" className="block text-black-600">
                Email
              </label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                  placeholder="johndoe@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold rounded-2xl py-2 px-4 w-full mb-4"
              onClick={handleSendEmail}
            >
              Kirim
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
