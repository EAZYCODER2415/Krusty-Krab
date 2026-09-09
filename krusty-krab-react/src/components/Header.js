import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure CSS is imported (though already in App.js)

const Header = () => {
  const { totalQuantity } = useCart();

  const navIcon = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  const orderCart = () => {
    const x = document.getElementById("cart");
    if (x.className === "cart") {
      x.className += " visible";
    } else {
      x.className = "cart";
    }
    const y = document.getElementById("overlay");
    if (y.className === "overlay") {
      y.className += " visible";
    } else {
      y.className = "overlay";
    }
    const z = document.getElementById("body");
    if (z.className === "body") {
      z.className += " locked";
    } else {
      z.className = "body";
    }
  };

  return (
    <>
      <header id="home">
        <div className="container">
          <div className="child null"></div>
          <div className="child">
            <Link to="/"><img src="%PUBLIC_URL%/media/Krusty_Krab_logo.jpeg" alt="logo" className="krusty" /></Link>
          </div>
          <div className="child null">
            <div className="interactive">
              <Link to="#" onClick={orderCart} style={{ marginRight: '7.5px' }}>
                <i className="fa fa-shopping-cart"></i>
              </Link>
              <span style={{ fontSize: '25px', color: 'red' }} id="cartsize">{totalQuantity}</span>
              <Link to="#contact" style={{ margin: '0 20px' }}>
                <i className="fa fa-map-marker"></i>
              </Link>
            </div>
          </div>
          <div className="cart" id="cart">
            <div className="cart-header">
              <h1>My Cart</h1>
              <button onClick={orderCart} className="close-button">
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="cart-content">
              <div id="cart-items"></div>
              <div className="item" style={{ backgroundColor: '#fff;' }}>
                <div className="The-item">
                  <h3>Total</h3>
                </div>
                <div className="quantity-n-price">
                  <h3 id="total-price">$0</h3>
                </div>
              </div>
              <div className="item" style={{ backgroundColor: '#fff;' }}>
                <div className="The-item">
                  <button onClick={() => { /* clearCart function from context */ }}>Clear</button>
                </div>
                <div className="quantity-n-price">
                  <button onClick={() => { /* proceedOrder */ }}>Proceed</button>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay" className="overlay"></div>
        </div>
      </header>

      <nav>
        <div className="topnav" id="myTopnav">
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/promos">Promotions</Link>
          <Link to="/jobs">Careers</Link>
          <Link to="/news">Newsletter</Link>
          <div className="icon" onClick={navIcon}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;