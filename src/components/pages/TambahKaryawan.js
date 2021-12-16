import React from "react";
import { Fragment } from "react";
import Form from "../Form";

function TambahKaryawan() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-plain table-plain-bg">
            <div className="card-header ">
              <h4 className="card-title">Tambah Karyawan Baru</h4>
              <p className="card-category">Karyawan John Smith</p>
            </div>
            <div className="card-body table-full-width table-responsive">
              <div className="col-7">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TambahKaryawan;
