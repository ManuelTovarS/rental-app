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
              <div className="input-box">
                <p>First Name</p>
                <input className="input-box" type="text" />
              </div>
              <div>
                <p>Last Name</p>
                <input type="text" />
              </div>
            </div>

            <div>
              <div>
                <p>Email</p>
                <input type="text" />
              </div>
            </div>

            <div>
              <div>
                <p>Phone</p>
                <input type="text" />
              </div>
              <div>
                <p>Address</p>
                <input type="text" />
              </div>
            </div>

            <div>
              <div>
                <p>City</p>
                <input type="text" />
              </div>
              <div>
                <p>State</p>
                <input type="text" />
              </div>
            </div>

            <div>
              <div>
                <p>Zip/Code</p>
                <input type="text" />
              </div>
              <div>
                <p>Country</p>
                <input type="text" />
              </div>
            </div>
          </div>
          <div>
            <h3>Card Information</h3>
            <div>
              <div>
                <p>Cardholder Name</p>
                <input type="text" />
              </div>
            </div>

            <div>
              <div>
                <p>Card Number</p>
                <input type="text" />
              </div>
              <div>
                <p>Exp. Date</p>
                <input type="text" />
              </div>
              <div>
                <p>CVC</p>
                <input type="text" />
              </div>
            </div>

            <div>
              <input type="checkbox" />
              <p>Thanks for helpingto cover the processings fees</p>
            </div>

            <div>
              <button>Pay</button>
            </div>
          </div>
        </div>

        <div className="summary-container border-card">
          <div>
            <h3>Add discount code</h3>
            <div>
              <input type="text" />
              <button>Apply Code</button>
            </div>
          </div>

          <div>
            <h3>Summary</h3>
            <div>
              <img src="https://image.shutterstock.com/image-vector/calendar-icon-vectorflat-on-wall-260nw-1388071880.jpg" />
              <p>fecha</p>
            </div>

            <div>
              <p>Address</p>
            </div>

            <div>
              <div>
                <p>1 Hour</p>
              </div>

              <div>
                <p>500</p>
              </div>
            </div>

            <div>
              <div>
                <p>Capacity</p>
              </div>

              <div>
                <p>0</p>
              </div>
            </div>

            <div>
              <div>
                <p>Subtotal</p>
              </div>

              <div>
                <p>500</p>
              </div>
            </div>

            <div>
              <div>
                <p>Total</p>
              </div>

              <div>
                <p>500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
