import React from "react";
import "./styles/Payment.css";

export const Payment = () => {
  return (
    <div className="payment-wrapper">
      <div className="payment-content">
        <div className="payment-container border-card">
          <div className="personal-information">
            <h3 className="title-sections">Personal Information</h3>

            <div className="two-columns">
              <div className="input-box-half">
                <p>
                  <b className="require-field">*</b>First Name
                </p>
                <input type="text" />
              </div>

              <div className="input-box-half">
                <p>
                  <b className="require-field">*</b>Last Name
                </p>
                <input type="text" />
              </div>
            </div>

            <div className="one-columns">
              <div className="input-box-all">
                <p>
                  <b className="require-field">*</b>Email
                </p>
                <input type="text" />
              </div>
            </div>

            <div className="two-columns">
              <div className="input-box-half">
                <p>Phone</p>
                <input type="text" />
              </div>

              <div className="input-box-half">
                <p>Address</p>
                <input type="text" />
              </div>
            </div>

            <div className="two-columns">
              <div className="input-box-half">
                <p>City</p>
                <input type="text" />
              </div>

              <div className="input-box-half">
                <p>State</p>
                <input type="text" />
              </div>
            </div>

            <div className="two-columns">
              <div className="input-box-half">
                <p>Zip/Code</p>
                <input type="text" />
              </div>

              <div className="input-box-half">
                <p>Country</p>
                <input type="text" />
              </div>
            </div>
          </div>

          <div>
            <h3>Card Information</h3>

            <div className="one-columns">
              <div className="input-box-all">
                <p>Cardholder Name</p>
                <input type="text" />
              </div>
            </div>

            <div className="three-columns">
              <div className="input-box-one">
                <p>Card Number</p>
                <input type="text" />
              </div>

              <div className="input-box-two">
                <p>Exp. Date</p>
                <input type="text" />
              </div>

              <div className="input-box-two">
                <p>CVC</p>
                <input type="text" />
              </div>
            </div>

            <div className="fee-container">
              <input type="checkbox" />
              <p>Thanks for helpingto cover the processings fees</p>
            </div>

            <div className="input-box-all">
              <button>Pay $10</button>
            </div>
          </div>
        </div>

        <div className="summary-container">
          <div>
            <h3>Add discount code</h3>
            <div className="discount-container">
              <input type="text" placeholder="Discount Code" />
              <button>Apply Code</button>
            </div>
          </div>

          <div className="summary">
            <h3>Summary</h3>

            <div className="summary-box-event">
              <div className="summary-date">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 19.5438C0 19.9862 0.3575 20.3438 0.8 20.3438H19.2C19.6425 20.3438 20 19.9862 20 19.5438V9.04375H0V19.5438ZM19.2 2.14375H15V0.54375C15 0.43375 14.91 0.34375 14.8 0.34375H13.4C13.29 0.34375 13.2 0.43375 13.2 0.54375V2.14375H6.8V0.54375C6.8 0.43375 6.71 0.34375 6.6 0.34375H5.2C5.09 0.34375 5 0.43375 5 0.54375V2.14375H0.8C0.3575 2.14375 0 2.50125 0 2.94375V7.34375H20V2.94375C20 2.50125 19.6425 2.14375 19.2 2.14375Z"
                    fill="#2D2F2F"
                  />
                </svg>
                <h6>Tuesday April 8th, 2022 - 7:00am - 8:00am</h6>
              </div>
              <div>
                <div className="summary-event-payment-info">
                  <h5>Street 54-23</h5>
                </div>

                <div className="summary-event-payment-info">
                  <p>1 Hour</p>
                  <p>$500.00</p>
                </div>

                <div className="summary-event-payment-info">
                  <p>Capacity: 30</p>
                  <p>$0.00</p>
                </div>
              </div>
            </div>

            <div className="summary-event-payment-total">
              <div className="summary-event-payment-ammount">
                <p>Subtotal</p>
                <p>500</p>
              </div>
              <div className="summary-event-payment-ammount">
                <p>Total</p>
                <p>500</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
