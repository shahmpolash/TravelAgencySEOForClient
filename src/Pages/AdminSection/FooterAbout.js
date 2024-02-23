import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FooterAbout = () => {

    const [footerabout, setFooterAbout] = useState([]);

    useEffect(() => {
        fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/footer-about`)
            .then((res) => res.json())
            .then((info) => setFooterAbout(info));
    }, []);


    const handleFooterAbout = (event) => {
        event.preventDefault();
        
        const aboutFooterDetails = event.target.aboutFooterDetails.value;
        const footerFblink = event.target.footerFblink.value;
        const footerInstagram = event.target.footerInstagram.value;
        


        const FooterAboutSection = {
            
            aboutFooterDetails,
            footerFblink,
            footerInstagram,
          

        };

        const url = `https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/add-footer-about`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterAboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer About  is Updated');
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

                        {
                                footerabout.length === 1 &&
                                <>
                                    {
                                        footerabout.map(c =>
                                            footerabout.map(c=>
                                                <Link className='main-btn' to={`/edit-about-footer/${c._id}`}> Please Edit About Footer</Link>)
                                                
                                                
                                        )
                                    }
                                </>
                            }
                            {
                                footerabout.length === 0 &&
                       

                                <form class="contact-form " onSubmit={handleFooterAbout}>
                                    <div class="row">
                                       
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="aboutFooterDetails" placeholder="About Details" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="footerFblink" placeholder="Footer Facebook URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="footerInstagram" placeholder="Footer Instagram URL" required />
                                            </div>
                                        </div>
                                     
                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s">Update Footer About</button>
                                        </div>
                                    </div>

                                </form>


                            }


                            
                            



                        </div>

                            


                    </div>
                </div>
            </section>
        </div>
    );
};

export default FooterAbout;