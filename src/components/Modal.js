import React from "react";
import { Fragment } from "react";

function Modal() {
  return (
    <Fragment>
      <div
        class="modal fade modal-mini modal-primary"
        id="myModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header justify-content-center">
              <div class="modal-profile">
                <i class="nc-icon nc-bulb-63"></i>
              </div>
            </div>
            <div class="modal-body text-center">
              <p>Always have an access to your profile</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-link btn-simple">
                Back
              </button>
              <button
                type="button"
                class="btn btn-link btn-simple"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
