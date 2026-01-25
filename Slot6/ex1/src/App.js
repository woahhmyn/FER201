import { BrowserRouter, Routes, Route } from "react-router-dom";
import NNavbar from "./components/NNavbar";
import AppLayout from "./components/AppLayout";

import FlightPage from "./pages/FlightPage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <BrowserRouter>
      <NNavbar />

      <AppLayout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/flight" element={<FlightPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
