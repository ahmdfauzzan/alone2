import { CookieStorage, CookiesKeys } from "./cookies";

const jwtToken = CookieStorage.get(CookiesKeys.JwtToken);

export const API_ENDPOINT = {
  POST_SEND_EMAIL: "/auth/reset-password",
  PUT_RESET_PASSWORD: `/auth/reset-password?token=${jwtToken ? jwtToken : ""}`,
  LOGIN_USER: "/auth/login",
  USER_REGISTER: "/auth/register",
  VERIFY_OTP: "/auth/verify-otp",
  RESEND_OTP: "/auth/resend-otp",
  GET_USER: "/profile/account",
  UPDATE_USER: "/profile/updateProfile",
  GANTI_PASSWORD_USER: "/profile/changePassword",
  RIWAYAT_PEMBAYARAN_USER: "/profile/paymentHistory",
  COURSE: "/course",
  CATEGORY_COURSE: "/category",
};
