import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StepSection = () => {


    const [steps, setSteps] = useState([]);

    useEffect(() => {
        fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/steps`)
            .then((res) => res.json())
            .then((info) => setSteps(info));
    }, []);


    const handleStepSection = (event) => {
        event.preventDefault();
        const faqText = event.target.faqText.value;
        const faqHeading = event.target.faqHeading.value;
        const faqImg = event.target.faqImg.value;



        const stepSection = {
            faqText,
            faqHeading,
            faqImg,



        };

        const url = `https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/add-step`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('FAQ Section is Updated');
            });
    };



    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update FAQ </h2>

                            <form class="contact-form " onSubmit={handleStepSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="faqText" placeholder=" FAQ Text" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="faqHeading" placeholder=" FAQ Heading" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text"  name="faqImg" placeholder=" FAQ Img" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update FAQ </button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-align text-center mb-50">
                                <h5>Accoding</h5>
                                <h2>Accoding List</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            steps.map(step =>
                                <div className="col-lg-6 col-md-12">
                                    <div className="eventes-box">
                                        <div className="date-box">
                                            <h3>{step.accodingText}</h3>
                                        </div>
                                        <div className="text">
                                            <h5>
                                                <Link to={`/edit-step/${step._id}`}>
                                                    {step.accodingTitle}
                                                </Link>
                                            </h5>

                                           
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                    </div>

                </div>

            </section>
        </div>
    );
};

export default StepSection;