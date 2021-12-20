import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [jumlah, setJumlah] = useState("");
  const [aktif, setAktif] = useState("");
  const [cuti, setCuti] = useState("");
  const [nonaktif, setNonaktif] = useState("");
  const [manager, setManager] = useState("");
  const [admin, setAdmin] = useState("");
  const [programmer, setProgrammer] = useState("");

  const getCount = async (keyword, state) => {
    const response = await axios.get(`http://localhost:8080/group/${keyword}`);
    return state(response.data.length);
  };

  const getJumlahKaryawan = async () => {
    const response = await axios.get(`http://localhost:8080/karyawan`);
    return setJumlah(response.data.length);
  };

  useEffect(() => {
    getJumlahKaryawan();
    getCount("aktif", setAktif);
    getCount("cuti", setCuti);
    getCount("nonaktif", setNonaktif);
    getCount("manager", setManager);
    getCount("admin", setAdmin);
    getCount("programmer", setProgrammer);
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-3">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Jumlah Karyawan</h4>
              <p className="card-category">Karyawan John Smith</p>
              <hr />
              <h1>{jumlah}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Karyawan Aktif</h4>
              <p className="card-category">Karyawan John Smith</p>
              <hr />
              <h1>{aktif}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Karyawan Cuti</h4>
              <p className="card-category">Karyawan John Smith</p>
              <hr />
              <h1>{cuti}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Karyawan Tidak Aktif</h4>
              <p className="card-category">Karyawan John Smith</p>
              <hr />
              <h1>{nonaktif}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Karyawan Manager</h4>
              <p className="card-category">Karyawan John Smith</p>
              <hr />
              <h1>{manager}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Karyawan Admin</h4>
              <p className="card-category">Karyawan John Smith</p>
              <hr />
              <h1>{admin}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Karyawan Programmer</h4>
              <p className="card-category">Karyawan John Smith</p>
              <hr />
              <h1>{programmer}</h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
