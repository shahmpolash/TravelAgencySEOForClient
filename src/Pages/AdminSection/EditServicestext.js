import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditServicestext = () => {

    const [servicetext, setService] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/service/${id}`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);




    const handleServiceText = (event) => {
        event.preventDefault();
        const serviceText = event.target.serviceText.value;
        const serviceHeading = event.target.serviceHeading.value;
        

        const serviceSection = {
            serviceText,
            serviceHeading,
           
        };

        const url = `https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/service/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service Text is Updated');
            });
    };




    return (
        <div>
            {
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h3> Update Service Text </h3>

                                <form class="contact-form " onSubmit={handleServiceText}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceText" defaultValue={servicetext.serviceText} placeholder="Service Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceHeading" defaultValue={servicetext.serviceHeading} placeholder="Service Heading" required />
                                            </div>
                                        </div>

                                


                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Services Text </button>
                                        </div>
                                    </div>

                                </form>



                            </div>



                        </div>
                    </div>

                </section>
            }
        </div>
    );
};

export default EditServicestext;