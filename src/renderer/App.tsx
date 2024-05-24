import React from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles/App.css";
import "tailwindcss/tailwind.css";

import { AuthProvider, useAuth } from "./context/AuthContext";
import Chat from "./pages/apps/Chat";
import Navigation from "./pages/system/AppDrawer";
import Network from "./pages/apps/network/Network";
import Settings from "./pages/apps/settings/Settings";
import Ai from "./pages/apps/ai/Ai";
import BottomNavbar from "./components/BottomNavbar";
import Messaging from "./pages/apps/messaging/Messaging";
import Wallets from "./pages/apps/wallets/Wallets";
import Profile from "./pages/apps/profile/Profile";
import SplashScreen from "./pages/system/SplashScreen";
import Login from "./pages/system/Login/Login";

function ProtectedRoute({ element }: { element: React.ReactNode }) {
  const { user } = useAuth();
  return user ? element : <Login />;
}

function AppContent() {
  const location = useLocation();
  const { user } = useAuth();
  const hideNavbar =
    !user || ["/", "/login", "/profile"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b via-black from-gray-900 bg-black">
      <div className="flex-grow">
        <Routes>
          <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} />
          <Route
            path="/settings"
            element={<ProtectedRoute element={<Settings />} />}
          />
          <Route
            path="/apps"
            element={<ProtectedRoute element={<Navigation />} />}
          />
          <Route path="/ai" element={<ProtectedRoute element={<Ai />} />} />
          <Route path="/" element={<SplashScreen />} />
          <Route
            path="/network"
            element={<ProtectedRoute element={<Network />} />}
          />
          <Route
            path="/messaging"
            element={<ProtectedRoute element={<Messaging />} />}
          />
          <Route
            path="/wallets"
            element={<ProtectedRoute element={<Wallets />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      {!hideNavbar && <BottomNavbar />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
