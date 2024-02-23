import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import settings from "./Images/settings.png"
import orders from './Images/orders.png'
import additem from './Images/add-item.png'
import msg from './Images/message.png'
import sub from './Images/subscriber.png'
import payment from './Images/paypal.png'
import emailicon from './Images/email.png'
import './AdminMenu.css';



const AdminMenu = () => {
    const [paypal, setPaypal] = useState([]);
    useEffect(() => {
        fetch(`https://travelagencymarketingwebsite-63327e68d494.herokuapp.com/paypal-email`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);
    return (






        <div className='container'>
            <div className='admin-cards'>



                <div className='single-card'>
                    <Link to='/setting'> <div className='icon-img'><img src={settings} /></div> <p>Setting Option</p></Link>
                </div>
                <div className='single-card'>
                    <Link to='/total-orders'> <div className='icon-img'><img src={orders} /></div><p> Total Orders</p></Link>
                </div>
                <div className='single-card'>
                    <Link to='/all-messages'><div className='icon-img'><img src={msg} /></div><p>Messages</p></Link>
                </div>
                <div className='single-card'>
                    <Link to='/all-subscriber'> <div className='icon-img'><img src={sub} /></div> <p>Subscribers</p></Link>
                </div>

                <div className='single-card'>
                    <Link to='/add-user'> <div className='icon-img'><img src={emailicon} /></div> <p>Admin Email</p></Link>
                </div>

                {
                    paypal.map(e =>
                        <div className='single-card'>
                            <Link to={`/paypal-email/${e._id}`}> <div className='icon-img'><img src={payment} /></div> <p> Payment</p></Link>
                        </div>

                    )
                }







            </div>
        </div>
    );
};

export default AdminMenu;