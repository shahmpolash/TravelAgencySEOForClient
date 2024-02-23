import React, { useEffect, useState } from 'react';

const AddPricing = () => {
    const [pricing, setPricing] = useState([]);




    useEffect(() => {
        fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/pricings`)
            .then((res) => res.json())
            .then((info) => setPricing(info));
    }, []);


    const handlePricing = (event) => {
        event.preventDefault();
        const packageName = event.target.packageName.value;
        const packagePrice = event.target.packagePrice.value;
        const packageButtonText = event.target.packageButtonText.value;
        const packagePointOne = event.target.packagePointOne.value;
        const packagePointTwo = event.target.packagePointTwo.value;
        const packagePointThree = event.target.packagePointThree.value;
        const packagePointFour = event.target.packagePointFour.value;
        const packagePointFive = event.target.packagePointFive.value;
        const packagePointSix = event.target.packagePointSix.value;
        const packagePointSeven = event.target.packagePointSeven.value;
        const packagePointEight = event.target.packagePointEight.value;
        const packagePointNine = event.target.packagePointNine.value;
        const packagePointTen = event.target.packagePointTen.value;




        const pricingSection = {
            packageName,
            packagePrice,
            packageButtonText,
            packagePointOne,
            packagePointTwo,
            packagePointThree,
            packagePointFour,
            packagePointFive,
            packagePointSix,
            packagePointSeven,
            packagePointEight,
            packagePointNine,
            packagePointTen




        };

        const url = `https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/add-pricing`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(pricingSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Pricing is Updated');
            });
    };



    return (
        <>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">




                                <form class="contact-form " onSubmit={handlePricing}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packageName" placeholder="Package Name" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePrice" placeholder="Package Price" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packageButtonText" placeholder="Button Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointOne" placeholder="Ponint One" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointTwo" placeholder="Point Two" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointThree" placeholder="Point Three" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointFour" placeholder="Point Four" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointFive" placeholder="Point Five" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointSix" placeholder="Point Six" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointSeven" placeholder="Point Seven" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointEight" placeholder="Point Eight" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointNine" placeholder="Point Nine" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointTen" placeholder="Point Ten" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="main-btn" data-delay=".8s"> Add Package</button>
                                        </div>
                                    </div>

                                </form>








                            </div>

                            <div className="row no-gutters align-items-center justify-content-center">

                                {
                                    pricing.map(p => <div className="col-lg-4 col-md-7 col-sm-8">
                                        <div className="pricing-table pricing-table-two">
                                            <h4 className="plan-name">{p.packageName}</h4>

                                            <div className="plan-price">
                                                <span className="currency">$</span>
                                                <span className="price">{p.packagePrice}</span>
                                            </div>
                                            <Link to={`/package-edit/${p._id}`} className="template-btn bordered-btn">
                                                Edit <i className="far fa-long-arrow-right" />
                                            </Link>


                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                </section>
            </div>





        </>
    );
};

export default AddPricing;