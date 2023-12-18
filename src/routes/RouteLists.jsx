import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProfile } from "../pages/User/Profil/UserProfile";
import { RiwayatUser } from "../pages/User/Profil/RiwayatUser";
import { GantiPassword } from "../pages/User/Profil/GantiPassword";
import { Notifikasi } from "../pages/User/Notifikasi";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { ClassAdmin } from "../pages/Admin/ClassAdmin";
import { Class } from "../pages/User/Class";
import { Detail } from "../pages/User/Detail";
import { Payment } from "../pages/User/Payment";
import { Berhasil } from "../pages/User/Berhasil";
import { Homepage } from "../pages/User/Homepage";
import { ResetPassword } from "../pages/Autentikasi/ResetPassword";
import { OTP } from "../pages/Autentikasi/OTP";
import { Register } from "../pages/Autentikasi/Register";
import { LoginUser } from "../pages/Autentikasi/LoginUser";
import { SendEmail } from "../pages/Autentikasi/SendEmail";

export const RouteLists = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/gantipassword" element={<GantiPassword />} />
        <Route path="/history" element={<RiwayatUser />} />
        <Route path="/sendemail" element={<SendEmail />} />

        {/* USER */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/kelas" element={<Class />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/berhasil" element={<Berhasil />} />

        {/* ADMIN */}
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/kelolakelas" element={<ClassAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};