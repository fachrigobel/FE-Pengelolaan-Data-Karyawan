import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Karyawan from "./components/pages/Karyawan";
import TambahKaryawan from "./components/pages/TambahKaryawan";
import DetailKaryawan from "./components/pages/DetailKaryawan";

function App() {
  return (
    <div className="App wrapper">
      <Router>
        <Sidebar />
        <div className="main-panel">
          <Navbar />
          <div className="content">
            <div className="container-fluid">
              <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/addKaryawan" element={<TambahKaryawan />} />
                <Route path="/karyawan" element={<Karyawan />} />
                <Route path="/karyawan/:nip" element={<DetailKaryawan />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
