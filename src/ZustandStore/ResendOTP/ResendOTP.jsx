import { create } from "zustand";

const ResendOTPStore = create((set) => ({
  resendOTP: null,
  setResendOTP: (func) => set({ resendOTP: func }),
}));

export default ResendOTPStore;
