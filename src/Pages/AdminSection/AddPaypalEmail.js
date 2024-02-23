import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddPaypalEmail = () => {


    const [email, setEmail] = useState([]);

    useEffect(() => {
        fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/paypal-email`)
            .then((res) => res.json())
            .then((info) => setEmail(info));
    }, [email]);


    const handleEmailSection = (event) => {
        event.preventDefault();
        const paypalEmail = event.target.paypalEmail.value;
        


        const paypalAdded = {
            paypalEmail

        };

        const url = `https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/add-email`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(paypalAdded),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Paypal Email Added');
            });
    };



    return (
        <div>
        <section id="services" class="services-area pt-120 pb-90 fix" >
            <div class="container">
                <div class="row">

                </div>
                <div class="row">

                    <div class="col-lg-8 col-md-12">
                        <h3> Add Paypal Email </h3>

                        <form class="contact-form " onSubmit={handleEmailSection}>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="paypalEmail"  placeholder="Paypal Email" required />
                                    </div>
                                </div>
                                    <div class="slider-btn ">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Add Paypal Email </button>
                                    
                                </div>



                            </div>



                        </form>


                    </div>


                </div>
            </div>
        </section>
    </div>
    );
};

export default AddPaypalEmail;