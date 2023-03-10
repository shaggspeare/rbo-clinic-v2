import AppointForm from "@/components/forms/appoint-form";
import React from "react";
import Image from "next/image";

const Appointment = () => {
  return (
    <>
      <section className="appoinment-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 p-0">
              <div className="appoinment-thumb">
                <Image
                    src="/assets/img/background/serhii-pose.jpeg"
                    alt="appointment-img"
                    width={1200}
                    height={747}
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-12 col-md-12 p-0">
              <div className="visitor-info">
                <h4 className="appoinment-title mb-25">
                  <i className="fa-light fa-file-signature"></i>Записатися на прийом
                </h4>
                <div className="visitor-form">
                  {/* form start */}
                  <AppointForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
