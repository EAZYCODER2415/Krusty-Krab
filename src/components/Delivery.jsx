import React from 'react';
import { useCart } from './CartContext';
import '../styles/main.css';

const Delivery = () => {
  const { cart, totalPrice } = useCart();

  const navIcon = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <>
      <main>
        <section className="header">
          <h1>You are almost done!</h1>
          <h2>Complete Your Order!</h2>
        </section>
        <section className="delivery-form">
          <div className="tabbed-forms">
            <div className="tab-selections">
              <button id="DELIVER" className="tablinks active" onClick={navIcon}>Delivery</button>
              <button onClick={navIcon} className="tablinks" id="PICKUP">Pick-Up</button>
            </div>
            <div className="deliver menu" id="deliver">
              <form action="https://formsubmit.co/thames2415@gmail.com" method="POST">
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Delivery Order from Krusty Krab!" />
                <h1>Personal Information</h1>
                <div className="form-item">
                  <input type="text" name="first-name" placeholder="First Name" required="true" />
                  <input type="text" name="last-name" placeholder="Last Name" required="true" />
                </div>
                <div className="form-item">
                  <input type="email" name="email-address" placeholder="Email Address" required="true" />
                  <input type="text" name="phone" placeholder="Phone Number" required="true" />
                </div>
                <h1>Delivery Information</h1>
                <div className="form-item">
                  <input type="text" name="address" placeholder="Street Address" required="true" />
                </div>
                <div className="form-item">
                  <input type="text" name="apt-unit" placeholder="Apt/Suite (Optional)" />
                </div>
                <div className="form-item">
                  <input type="text" name="postal-code" placeholder="Postal Code" required="true" />
                  <input type="text" name="city" placeholder="City" required="true" />
                  <input type="text" name="country" placeholder="Country" required="true" />
                </div>
                <br />
                <h1>Order Review</h1>
                <div className="order-summary" id="order-summary">
                  {/* We'll map over the cart to create order items */}
                  {cart.map((item, index) => {
                    const [, foodname, foodprice, foodquantity] = item;
                    const itemPrice = foodprice * foodquantity;
                    return (
                      <React.Fragment key={index}>
                        <div className="order-item">
                          <h3>{foodname} (x{foodquantity})</h3>
                          <h3>${itemPrice}</h3>
                        </div>
                        <input type="hidden" name={`order-${index + 1}`} value={`${foodname}, x${foodquantity}, Unit Price - $${foodprice}, Total - $${itemPrice}`} />
                      </React.Fragment>
                    );
                  })}
                  {cart.length === 0 ? (
                    <p>Your cart is empty. Please add some items.</p>
                  ) : (
                    <React.Fragment>
                      <div className="order-item total-cost">
                        <h2 className="total">Total</h2>
                        <h2 className="total">${totalPrice}</h2>
                      </div>
                      <input type="hidden" name="total" value={totalPrice} />
                    </React.Fragment>
                  )}
                </div>
                <br />
                <figure id="loading4" className="loading4">
                  <img className="loading" src="/media/loading.gif" alt="loading" />
                  <figcaption>This may take a while...</figcaption>
                </figure>
                <div className="form-item">
                  <button type="submit" onClick={(e) => {
                    e.target.form.submit();
                    e.target.disabled = true;
                    const x = document.getElementById('loading4');
                    if (x.className === 'loading4') {
                      x.className += ' visible';
                    } else {
                      x.className = 'loading4';
                    }
                  }}>
                    Submit Order
                  </button>
                </div>
              </form>
            </div>
            <div className="pickup menu" id="pickup">
              <form action="https://formsubmit.co/thames2415@gmail.com" method="POST">
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Pickup Order from Krusty Krab!" />
                <h1>Pickup Location</h1>
                <div className="form-item">
                  <h3>831 Bottom Feeder Lane, <br />Bikini Bottom, Pacific Ocean <br />(11.6065° N, 165.3768° E)</h3>
                </div>
                <h1>Pickup Time</h1>
                <div className="form-item">
                  <h3>Keep in mind that time zone is Pacific Time (PT)</h3>
                </div>
                <div className="form-item">
                  <input list="times" placeholder="Select pickup time" id="pickup-time" required="true" />
                  <datalist id="times">
                    <option value="4:00 pm" />
                    <option value="4:15 pm" />
                    <option value="4:30 pm" />
                    <option value="4:45 pm" />
                    <option value="5:00 pm" />
                    <option value="5:15 pm" />
                    <option value="5:30 pm" />
                    <option value="5:45 pm" />
                  </datalist>
                </div>
                <h1>Pickup Information</h1>
                <div className="form-item">
                  <input type="text" name="first-name" placeholder="First Name" required="true" />
                  <input type="text" name="last-name" placeholder="Last Name" required="true" />
                </div>
                <div className="form-item">
                  <input type="email" name="email-address" placeholder="Email Address" required="true" />
                  <input type="text" name="phone" placeholder="Phone Number" required="true" />
                </div>
                <br />
                <h1>Order Review</h1>
                <div className="order-summary2" id="order-summary2">
                  {/* Same as above for pickup */}
                  {cart.map((item, index) => {
                    const [, foodname, foodprice, foodquantity] = item;
                    const itemPrice = foodprice * foodquantity;
                    return (
                      <React.Fragment key={index}>
                        <div className="order-item">
                          <h3>{foodname} (x{foodquantity})</h3>
                          <h3>${itemPrice}</h3>
                        </div>
                        <input type="hidden" name={`order-${index + 1}`} value={`${foodname}, x${foodquantity}, Unit Price - $${foodprice}, Total - $${itemPrice}`} />
                      </React.Fragment>
                    );
                  })}
                  {cart.length === 0 ? (
                    <p>Your cart is empty. Please add some items.</p>
                  ) : (
                    <React.Fragment>
                      <div className="order-item total-cost2">
                        <h2 className="total">Total</h2>
                        <h2 className="total">${totalPrice}</h2>
                      </div>
                      <input type="hidden" name="total" value={totalPrice} />
                    </React.Fragment>
                  )}
                </div>
                <br />
                <figure id="loading5" className="loading5">
                  <img className="loading" src="/media/loading.gif" alt="loading" />
                  <figcaption>This may take a while...</figcaption>
                </figure>
                <div className="form-item">
                  <button type="submit" onClick={(e) => {
                    e.target.form.submit();
                    e.target.disabled = true;
                    const x = document.getElementById('loading5');
                    if (x.className === 'loading5') {
                      x.className += ' visible';
                    } else {
                      x.className = 'loading5';
                    }
                  }}>
                    Submit Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Delivery;