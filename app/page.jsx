'use client';
import styles from './page.module.css';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <div style={{ backgroundColor: '#12372A', color: 'white', paddingTop: '50px' }}>
      <div className="card_payment_header">
        <h1>Card payment</h1>
        <h1>Checkout form</h1>
      </div>
      <div className="container bg-white text-dark mt-5 shadow px-4 pt-4 container_box">
        <div className="row">
          <div className="col-md-4 text-center mb-4 leftside_container">
            <img
              src="/Vector.png"
              alt="Payment gateway logo"
              className="img-fluid"
              style={{ maxHeight: '100px' }}
            />
            <h2 className="mt-2" style={{ color: "#12372A" }}>Payment gateway</h2>
            <p style={{ color: "#A3AED0" }}>Enter school location details!</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <h4 className="mb-4">Complete registration payment</h4>
            <form>
              {/* Personal Details */}
              <h5 className="mt-4">Personal details</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="addressLine" className="form-label subTitle">Address line</label>
                  <input type="text" className="form-control" id="addressLine" placeholder="P.O.Box 1234" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="city" className="form-label subTitle">City</label>
                  <input type="text" className="form-control" id="city" placeholder="Arusha" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="state" className="form-label subTitle">State</label>
                  <input type="text" className="form-control" id="state" placeholder="Tanzania" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="postalCode" className="form-label subTitle">Postal code</label>
                  <input type="text" className="form-control" id="postalCode" placeholder="9090" />
                </div>
              </div>

              {/* Payment Methods */}
              <h5 className="mt-4">Payment methods</h5>
              <div className="d-flex align-items-center mb-3 allgatewayicon">
                <div
                  style={{
                    backgroundColor: '#EBF3FA',
                    padding: "2px 8px",
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                >
                  <img
                    src="/visa_icon.webp"
                    alt="Visa"
                    style={{ height: '30px' }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: '#F5F4FF',
                    padding: "2px 8px",
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                >
                  <img
                    src="/stripe.png" alt="Stripe"
                    style={{ height: '30px' }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: '#F3FBFF',
                    padding: "2px 8px",
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                >
                  <img
                    src="/paypal.png" alt="PayPal"
                    style={{ height: '30px' }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: '#FFF4EE',
                    padding: "2px 8px",
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                >
                  <img
                    src="/mastercard.png"
                    alt="MasterCard"
                    style={{ height: '30px' }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: '#F1F6FF',
                    padding: "2px 8px",
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}
                >
                  <img
                    src="/gpay.png" alt="Google Pay"
                    style={{ height: '30px' }}
                  />
                </div>
              </div>

              {/* Card Details */}
              <h5 className="mt-4">Card details</h5>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="cardholderName" className="form-label subTitle">Cardholder's name</label>
                  <input type="text" className="form-control" id="cardholderName" placeholder="Seen on your card" />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="cardNumber" className="form-label subTitle">Card number</label>
                  <input type="text" className="form-control" id="cardNumber" placeholder="Seen on your card" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="expiry" className="form-label subTitle">Expiry</label>
                  <input type="text" className="form-control" id="expiry" placeholder="MM/YY" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cvc" className="form-label subTitle">CVC</label>
                  <input type="text" className="form-control" id="cvc" placeholder="3 digits" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
