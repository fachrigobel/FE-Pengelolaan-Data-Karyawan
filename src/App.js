import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Karyawan from "./components/pages/Karyawan";
import TambahKaryawan from "./components/pages/TambahKaryawan";
import DetailKaryawan from "./components/pages/DetailKaryawan";
import Home from "./components/pages/Home";
import { RecoilRoot, useRecoilState } from "recoil";
import ValidateUser from "./ValidateUser";
import Login from "./components/pages/Login";

function App() {
  const [login, setlogin] = useRecoilState(ValidateUser);

  return !login ? (
    <Login />
  ) : (
    <Router>
      <div className="App wrapper">
        <Sidebar />
        <div className="main-panel">
          <Navbar />
          <div className="content">
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addKaryawan" element={<TambahKaryawan />} />
                <Route path="/karyawan" element={<Karyawan />} />
                <Route path="/karyawan/:nip" element={<DetailKaryawan />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
