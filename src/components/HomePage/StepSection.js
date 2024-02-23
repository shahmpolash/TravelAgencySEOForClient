import React, { useEffect, useState } from "react";

const StepSection = () => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/steps`)
      .then((res) => res.json())
      .then((info) => setSteps(info));
  }, []);

  return (
    <>


      <section
        id="eventes"
        className="eventes-area fix pt-120 pb-120"
        style={{
          backgroundImage: "url(img/bg/event-bg-aliments.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align text-center mb-50">
                <h5>Our Events</h5>
                <h2>Upcoming Events</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {
              steps.map(step =>
                <div className="col-lg-6 col-md-12">
                  <div className="eventes-box">
                    <div className="date-box">
                      <h3>{step.stepNumber}</h3>
                    </div>
                    <div className="text">
                      <h5>
                        <a href="#">
                          {step.stepTitle}
                        </a>
                      </h5>

                      <p>
                        {step.stepDetails}
                      </p>
                    </div>
                  </div>
                </div>

              )
            }

          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="slider-btn mt-30">
                <a
                  href="events.html"
                  className="main-btn"
                  data-animation="fadeInRight"
                  data-delay=".8s"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepSection;
