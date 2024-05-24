import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { ethers } from "ethers";

interface AuthContextType {
  user: string | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(() => {
    // Retrieve user from local storage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    // Update local storage whenever user state changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("recentAccount", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async () => {
    // if (window.ethereum) {
    //   const provider = new ethers.BrowserProvider(window.ethereum);
    //   const accounts = await provider.send("eth_requestAccounts", []);
    //   setUser(accounts[0]);
    // } else {
    //   console.error("No Ethereum provider found");
    // }

    // Mock login logic
    const mockUserAddress = "0x1234567890abcdef1234567890abcdef12345678";
    setUser(mockUserAddress);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
