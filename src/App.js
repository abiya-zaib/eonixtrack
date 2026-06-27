import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import CheckInOut from "./components/CheckInOut";
import DailyProgress from "./components/DailyProgress";
import History from "./components/History";
import MyProfile from "./components/MyProfile";
import LogOut from "./components/LogOut";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <>
              <SideBar />
              <Dashboard />
            </>
          }
        />

        {/* Employee Pages */}
        <Route
          path="/checkinout"
          element={
            <>
              <SideBar />
              <CheckInOut />
            </>
          }
        />

        <Route
          path="/dailyprogress"
          element={
            <>
              <SideBar />
              <DailyProgress />
            </>
          }
        />

        <Route
          path="/history"
          element={
            <>
              <SideBar />
              <History />
            </>
          }
        />

        <Route
          path="/myprofile"
          element={
            <>
              <SideBar />
              <MyProfile />
            </>
          }
        />

        <Route
          path="/logout"
          element={
            <>
              <SideBar />
              <LogOut />
            </>
          }
        />

        {/* Invalid Routes Redirect to Login */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;