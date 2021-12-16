import axios from "axios";
import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailKaryawan() {
  const { nip } = useParams();
  const [nama, setnama] = useState("");
  const [alamat, setalamat] = useState("");
  const [nohp, setnohp] = useState("");
  const [role, setrole] = useState("");
  const [status, setstatus] = useState("");

  const [karyawan, setkaryawan] = useState({
    nip,
    nama,
    alamat,
    nohp,
    role,
    status,
  });

  const updateDataKaryawan = async (e) => {
    e.preventDefault();

    const data = {
      nama: nama.length != 0 ? nama : karyawan.nama,
      alamat: alamat.length != 0 ? alamat : karyawan.alamat,
      nohp: nohp.length != 0 ? nohp : karyawan.nohp,
      role: role.length != 0 ? role : karyawan.role,
      status: status.length != 0 ? status : karyawan.status,
    };

    const res = await axios.patch(
      `http://localhost:8080/karyawan/${nip}`,
      data
    );

    console.log(res);

    window.history.back();
  };

  const getDetailKaryawan = async (nip) => {
    const res = await axios.get(`http://localhost:8080/karyawan/${nip}`);
    return setkaryawan(res.data);
  };

  useEffect(() => {
    getDetailKaryawan(nip);
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-plain table-plain-bg">
            <div className="card-header ">
              <h4 className="card-title">Detail Karyawan</h4>
              <p className="card-category">{karyawan.nama}</p>
            </div>
            <div className="card-body table-full-width table-responsive">
              <div className="col-7">
                <form onSubmit={updateDataKaryawan}>
                  <div className="mb-3">
                    <label htmlFor="nip" className="form-label">
                      Nomor Induk Pegawai
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nip"
                      autoComplete="off"
                      value={karyawan.nip}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nama" className="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      autoComplete="off"
                      defaultValue={karyawan.nama}
                      onChange={(e) => setnama(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="alamat" className="form-label">
                      Alamat
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="alamat"
                      autoComplete="off"
                      defaultValue={karyawan.alamat}
                      onChange={(e) => setalamat(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nohp" className="form-label">
                      Nomor HP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nohp"
                      autoComplete="off"
                      defaultValue={karyawan.nohp}
                      onChange={(e) => setnohp(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      className="form-control"
                      id="role"
                      onChange={(e) => setrole(e.target.value)}
                    >
                      <option value="">Pilih Role</option>
                      <option
                        value="manager"
                        selected={karyawan.role == "manager" && true}
                      >
                        Manager
                      </option>
                      <option
                        value="admin"
                        selected={karyawan.role == "admin" && true}
                      >
                        Admin
                      </option>
                      <option
                        value="programmer"
                        selected={karyawan.role == "programmer" && true}
                      >
                        Programmer
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-control"
                      id="status"
                      onChange={(e) => setstatus(e.target.value)}
                    >
                      <option value="">Pilih Status</option>
                      <option
                        value="aktif"
                        selected={karyawan.status == "aktif" && true}
                      >
                        Aktif
                      </option>
                      <option
                        value="cuti"
                        selected={karyawan.status == "cuti" && true}
                      >
                        Cuti
                      </option>
                      <option
                        value="nonaktif"
                        selected={karyawan.status == "nonaktif" && true}
                      >
                        Nonaktif
                      </option>
                    </select>
                  </div>
                  <button
                    className="btn btn-primary btn-fill btn-wd text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Update Data Karyawan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailKaryawan;
