import React from "react";
import { Fragment } from "react";

function BtnSearch() {
  return (
    <Fragment>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cari Karyawan"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Cari
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default BtnSearch;
