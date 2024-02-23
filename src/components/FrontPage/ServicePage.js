import React, { useEffect, useState } from 'react';
import HeaderBottom from './HeaderBottom';

const ServicePage = () => {


    const [items, setItems] = useState([]);
    const [service, setService] = useState([]);
  
    useEffect(() => {
      fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/service-items`)
          .then((res) => res.json())
          .then((info) => setItems(info));
  }, []);
  
  
    useEffect(() => {
      fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/service`)
        .then((res) => res.json())
        .then((info) => setService(info));
    }, []);

    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section className="bredcumbs-area bg_cover" style={{ backgroundColor: '#000000', }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-title-inner">
                                <ul className="bredcumbs-link">
                                    <li><a href="/">Home</a></li>
                                    <li className="active">Services</li>
                                </ul>
                                <div className="title">
                                    <h1>Services Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-area-v1 aquamarine-light pt-105 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Section Title */}

                            {
                                service.map(s=> <div className="section-title mb-65 text-center">
                                <h2>{s.serviceHeading}</h2>
                                <span className="span">{s.serviceText}</span>
                            </div> )
                            }

                            
                        </div>
                    </div>
                    <div className="row">
                       
                        {
                            items.map(s=> <div className="col-lg-3 col-md-6 col-sm-12">
                            {/* Service Item */}
                            <div className="serivce-item mb-40 wow fadeInUp">
                                <div className="icon">
                                <img src={s.serviceIcon} alt="icon01" />
                                    
                                </div>
                                <div className="content">
                                    <h3 className="title"><a href="/">{s.serviceTitle}</a></h3>
                                    <p>{s.serviceDetails}</p>
                                   
                                </div>
                            </div>
                        </div>
                                )
                        }
                        
                       
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServicePage;