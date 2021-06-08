import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services container-fluid" id="services">
      <div className="row">
        <div className="col-md-3 service__card">
          <i class="fas fa-book fa-3x"></i>
          <br />
          <br />
          <h3>Admission Counseling</h3>
          <p>
            We access your qualification, interest and aptitude and suggest you
            the best course and institute around. Once you decide for the course
            and institute, application forms are filled and sendto institute
            along with fee.
          </p>
        </div>
        <div className="col-md-3 service__card">
          <i class="fas fa-globe-europe fa-3x"></i>
          <br />
          <br />
          <h3>Placement Assistance</h3>
          <p>
            By our network of high quality academicians and professionals
            worldwide, we arrange various job opportunities for the students to
            be an excellent professional. We help the students to connect with
            the local community
          </p>
        </div>
        <div className="col-md-3 service__card">
          <i class="fas fa-file-invoice-dollar fa-3x"></i>
          <br />
          <br />
          <h3>Financial Guidelines</h3>
          <p>
            To find the finance required for the desired study package and to
            ensure its stability, we assist the students and parents to avail
            various educational loans from the concerned banks, help the
            students who are eligible to get received scholarships or
            sponsorships.
          </p>
        </div>
        <div className="col-md-3 service__card">
          <i class="fas fa-university fa-3x"></i>
          <br />
          <br />
          <h3>Career Guidance</h3>
          <p>
            We help students to plan their career according to the rapidly
            changing needs of the complex global economy & We assist in all the
            legal actions if required for a student during the academic period
            in completion of their courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
