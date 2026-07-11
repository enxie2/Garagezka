import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../api/api";
import authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const initializeAuth = async () => {

      if (!token) {

        setLoading(false);

        return;

      }

      api.defaults.headers.common.Authorization =
        `Bearer ${token}`;

      try {

        const response = await authService.getUser();

        setUser(response.user);

        setIsLoggedIn(true);

      } catch {

        localStorage.removeItem("token");

        delete api.defaults.headers.common.Authorization;

        setUser(null);

        setToken(null);

        setIsLoggedIn(false);

      } finally {

        setLoading(false);

      }

    };

    initializeAuth();

  }, [token]);

  const login = async (email, password) => {

    try {

      const response = await authService.login(
        email,
        password
      );

      localStorage.setItem(
        "token",
        response.token
      );

      api.defaults.headers.common.Authorization =
        `Bearer ${response.token}`;

      setToken(response.token);

      setUser(response.user);

      setIsLoggedIn(true);

      return {
        success: true,
      };

    } catch (error) {

      return {

        success: false,

        message:
          error.response?.data?.message ??
          "Login gagal.",

      };

    }

  };

  const logout = async () => {

    try {

      await authService.logout();

    } catch {}

    localStorage.removeItem("token");

    delete api.defaults.headers.common.Authorization;

    setUser(null);

    setToken(null);

    setIsLoggedIn(false);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        loading,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(AuthContext);

}