import React, { useEffect, useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSendOTP } from "../../services/auth/otp_user";
import { useReSendOTP } from "../../services/auth/resendOtp_user";

export const OTP = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [registeredEmail, setRegisteredEmail] = useState(""); // State to hold registered email

  const { mutate: sendOTP } = useSendOTP();
  const { mutate: resendOTP } = useReSendOTP();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    const storedEmail = localStorage.getItem("registeredEmail");
    if (storedEmail) {
      setRegisteredEmail(storedEmail);
    }
  }, []);

  const resendOTPOnClick = () => {
    const resendOTPTask = resendOTP(registeredEmail);
    if (resendOTPTask) {
      resendOTPTask
        .then(() => {
          console.log("OTP berhasil dikirim ulang");
        })
        .catch(() => {
          console.error("Gagal mengirimkan ulang OTP");
        });
    } else {
      console.error("resendOTP is undefined");
    }
  };

  const handleChange = (index, event) => {
    const otp = [...otpValues];
    otp[index] = event.target.value;
    console.log(event.target.value);
    setOtpValues(otp);

    if (event.target.value !== "" && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && otpValues[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSave = () => {
    const fullOtp = otpValues.join("");
    if (fullOtp.length === 6) {
      // Kirim OTP ke API menggunakan useSendOTP
      sendOTP(fullOtp, {
        onSuccess: () => {
          // Navigasi ke halaman berikutnya setelah berhasil
          navigate("/kelas");
        },
        onError: () => {
          console.error("Gagal mengirimkan OTP");
        },
      });
    } else {
      console.error("Harap lengkapi semua digit OTP terlebih dahulu");
    }
  };

  return (
    <div className="flex flex-wrap h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center shadow-lg w-full max-w-md">
          <div className="flex items-center justify-between w-full mb-8">
            <Link to="/register" className="text-black hover:text-indigo-600">
              <IoArrowBackOutline className="h-6 w-6" />
            </Link>
          </div>

          <h2 className="text-3xl mb-2 text-indigo-600 text-center font-bold">Masukkan OTP</h2>
          <p className="mb-8 text-sm text-gray-500 text-center">Ketik 6 digit kode yang dikirimkan ke j****@gmail.com</p>

          <div className="flex justify-center gap-2 mb-8">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="text"
                className="form-input rounded-2xl text-center text-xl w-10 h-10 px-2 py-2 border-2 border-indigo-600"
                maxLength="1"
                value={value}
                ref={(input) => (inputRefs.current[index] = input)}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>

          <button className="text-indigo-600 hover:text-indigo-700 text-sm mb-4" onClick={resendOTPOnClick}>
            Kirim Ulang OTP dalam 60 detik
          </button>

          <button
            className="bg-indigo-600 hover:indigo-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            onClick={handleSave} // Added onClick handler for Save button
          >
            Simpan
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-indigo-600">
        <img src="../assets/img/Belajar_white.png" alt="Belajar" className="object-cover w-full h-screen" />
      </div>
    </div>
  );
};
