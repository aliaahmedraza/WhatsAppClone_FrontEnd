import { create } from "zustand";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AuthStore = create((set) => ({
  token: Cookies.get("token") || null,
  user: Cookies.get("token") ? jwtDecode(Cookies.get("token")) : null,

  login: (token) => {
    Cookies.set("token", token, { expires: 1 });
    const user = jwtDecode(token);
    set({ token, user });
  },

  logout: () => {
    Cookies.remove("token");
    set({ token: null, user: null });
  },
  checkAuth: () => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp && decoded.exp < currentTime) {
          Cookies.remove("token");
          set({ token: null, user: null });
          return {
            status: "expired",
            message: "Your session has expired. Please log in again.",
          };
        } else {
          set({ token, user: decoded });
          return { status: "valid" };
        }
      } catch (error) {
        Cookies.remove("token");
        set({ token: null, user: null });
        return {
          status: "invalid",
          message: "Invalid token. Please log in again.",
        };
      }
    } else {
      set({ token: null, user: null });
      return { status: "missing" };
    }
  },
}));
export default AuthStore;