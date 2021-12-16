import axios from "axios";
import React from "react";
import { Fragment } from "react";

function MiniModal(props) {
  const deleteKaryawan = async () => {
    if (props.nipKaryawan) {
      const res = await axios.delete(
        `http://localhost:8080/karyawan/${props.nipKaryawan}`
      );
    }
    await props.getDataKaryawan();
  };

  return (
    <Fragment>
      <div
        className="modal fade modal-mini modal-primary"
        id="miniModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="modal-profile">
                <i className="nc-icon nc-fav-remove"></i>
              </div>
            </div>
            <div className="modal-body text-center">
              <p>Hapus Data Karyawan?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link btn-simple"
                onClick={deleteKaryawan}
                data-dismiss="modal"
                style={{ cursor: "pointer" }}
              >
                Hapus
              </button>
              <button
                type="button"
                className="btn btn-link btn-simple"
                data-dismiss="modal"
                style={{ cursor: "pointer" }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MiniModal;
