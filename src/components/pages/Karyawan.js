import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BtnSearch from "../BtnSearch";
import MiniModal from "../MiniModal";

function Karyawan() {
  const [dataKaryawan, setdataKaryawan] = useState([]);
  const [nipKaryawan, setnipKaryawan] = useState("");

  const getDataKaryawan = async () => {
    const res = await axios.get("http://localhost:8080/karyawan");
    return setdataKaryawan(res.data);
  };

  const checkAction = () => {
    const alert = document.querySelector(".alert");

    if (sessionStorage.getItem("action") == "add") {
      alert.classList.add("alert-success");
      alert.classList.remove("d-none");
      alert.innerHTML = `
        <span>
          <b> Success - </b> Data Berhasil Ditambahkan!
        </span>`;
      sessionStorage.removeItem("action");
    } else if (sessionStorage.getItem("action") == "delete") {
      alert.classList.add("alert-success");
      alert.classList.remove("d-none");
      alert.innerHTML = `
        <span>
          <b> Success - </b> Data Berhasil Dihapus!
        </span>`;
      sessionStorage.removeItem("action");
    } else if (sessionStorage.getItem("action") == "update") {
      alert.classList.add("alert-success");
      alert.classList.remove("d-none");
      alert.innerHTML = `
        <span>
          <b> Success - </b> Data Berhasil Diubah!
        </span>`;
      sessionStorage.removeItem("action");
    }
  };

  useEffect(() => {
    getDataKaryawan();
  }, []);

  useEffect(() => {
    checkAction();
  }, [sessionStorage]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-plain table-plain-bg">
            <div className="card-header ">
              <h4 className="card-title">Daftar Karyawan</h4>
              <p className="card-category">Data Karyawan John Smith</p>
            </div>
            <div className="card-body table-full-width table-responsive">
              <div className="menu-table my-2">
                <div className="row">
                  <div className="col-8">
                    <Link
                      to={"/addKaryawan"}
                      className="btn btn-info btn-fill btn-wd text-white"
                      data-toggle="modal"
                      data-target="#tambahKaryawan"
                    >
                      Tambah Karyawan
                    </Link>
                  </div>
                  <div className="col-4">
                    <BtnSearch />
                  </div>
                </div>
              </div>
              <div className="alert d-none"></div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>NIP</th>
                    <th>Nama</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="fs-3">
                  {dataKaryawan.length == 0 ? (
                    <tr>
                      <td>
                        <div className="alert alert-danger" role="alert">
                          Data Karyawan Masih Kosong!
                        </div>
                      </td>
                    </tr>
                  ) : (
                    dataKaryawan.map((karyawan) => (
                      <tr key={karyawan.nip}>
                        <td>{karyawan.nip}</td>
                        <td>{karyawan.nama}</td>
                        <td>{karyawan.role}</td>
                        <td>{karyawan.status}</td>
                        <td>
                          <Link
                            to={"/karyawan/" + karyawan.nip}
                            className="badge badge-success mx-1"
                          >
                            Detail
                          </Link>
                          <Link
                            to={""}
                            className="badge badge-danger mx-1 text-white"
                            data-toggle="modal"
                            data-target="#miniModal"
                            style={{ cursor: "pointer" }}
                            onClick={() => setnipKaryawan(karyawan.nip)}
                          >
                            Hapus
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <MiniModal
        nipKaryawan={nipKaryawan}
        getDataKaryawan={getDataKaryawan}
        checkAction={checkAction}
      />
    </Fragment>
  );
}

export default Karyawan;
