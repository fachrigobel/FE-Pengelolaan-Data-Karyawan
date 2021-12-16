import axios from "axios";
import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Form() {
  const [nip, setnip] = useState("");
  const [nama, setnama] = useState("");
  const [alamat, setalamat] = useState("");
  const [nohp, setnohp] = useState("");
  const [role, setrole] = useState("");
  const [status, setstatus] = useState("");

  const addKaryawan = async (event) => {
    event.preventDefault();
    const data = { nip, nama, alamat, nohp, role, status };
    const res = await axios.post("http://localhost:8080/karyawan", data);

    console.log(res);

    window.history.back();
  };

  return (
    <Fragment>
      <form onSubmit={addKaryawan}>
        <div className="mb-3">
          <label htmlFor="nip" className="form-label">
            Nomor Induk Pegawai
          </label>
          <input
            type="text"
            className="form-control"
            id="nip"
            autoComplete="off"
            onChange={(e) => setnip(e.target.value)}
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
            required
          >
            <option value="">Pilih Role</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
            <option value="programmer">Programmer</option>
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
            required
          >
            <option value="">Pilih Status</option>
            <option value="aktif">Aktif</option>
            <option value="cuti">Cuti</option>
            <option value="nonaktif">Nonaktif</option>
          </select>
        </div>
        <button
          className="btn btn-info btn-fill btn-wd text-white"
          style={{ cursor: "pointer" }}
        >
          Tambah Karyawan
        </button>
      </form>
    </Fragment>
  );
}

export default Form;
