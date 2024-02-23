import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PremiumTemplates = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [canvas, setCanvas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info));
  }, []);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/Shah-Limon/canvaProjectImage/main/canva7200.json`)
      .then((res) => res.json())
      .then((info) => setCanvas(info));
  }, []);

  // Filter canvas based on the search query
  const filteredCanvas = canvas.filter((canva) =>
    canva.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section id="services" class="services-area pt-120 pb-90 fix">
        <div class="container">
          <h2>You are buying 16000+ Readymade Canva Templates</h2>
          <div class="col-lg-12">
            <div class="contact-field p-relative c-name mb-20">
              <input
                type="text"
                placeholder="Search e.g., Restaurant, Food"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            {orders.map((order) =>
              order.customerEmail === user?.email && order.paymentStatus === 'Paid' && (
                <div className="row" key={order.orderId}>
                  {filteredCanvas.slice(0, 50).map((canva) => (
                    <div className="col-lg-4 col-md-6" key={canva.id}>
                      <div className="product mb-40 bg-light p-2">
                        <div className="product__img">

                          <a href="#"><img src={canva.image} alt='Canva-Template' /></a>

                          <div className="product-action text-center">
                            <a href={canva.facebook} target="_blank" rel="noopener noreferrer">
                              For Facebook
                            </a>
                            <a className="mt-3" href={canva.instagram} target="_blank" rel="noopener noreferrer">
                              For Instagram
                            </a>
                          </div>
                        </div>
                        <div className="product__content text-center pt-30">
                          <span className="pro-cat">
                            <p>{canva.category}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
            {orders.map((order) =>
              order.customerEmail === user?.email && order.paymentStatus === 'UnPaid' && (
                <div className="row" key={order.orderId}>
                  <h2>You are not premium User</h2>
                </div>
              )
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumTemplates;
